import React, { Component, ChangeEvent } from "react";
import DetailPresenter from "./DetailPresenter";
import { serverApi } from "../../Components/API";
import { RouteComponentProps, withRouter } from "react-router";
import { Input, Form } from "../../Components/SearchInput";
import Map from "../../Components/MapScreen";

import { IconButton } from "../../Components/ButtonMaker";

// const socket = io.connect('http://127.0.0.1:3000');
import io from "socket.io-client";
const socket = io.connect("http://13.209.4.48:3000");
socket.on("connect", () => {
  console.log("connection server");
});
interface IInfo {
  name: string;
  address: string;
  parkingLot: number;
  smokingRoom: number;
  telephone: string;
  images: Array<string>;
  userId: number | null;
}
interface IChat {
  cafeId: number;
  id: number;
  comment: string;
  image: null | string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: { name: string; email: string };
}
interface IState {
  centerX: number;
  centerY: number;
  id: number;
  userId: number | null;
  result: IInfo;
  error: string;
  loading: boolean;
  navigatorBoolean: boolean;
  term: string;
  address: string;
  showLocation: boolean;
  showFilterModal: boolean;
  newComment: string;
  showSendButton: boolean;
  comments: Array<IChat> | null;
}
interface IProps extends RouteComponentProps<any> {
  handleCafePosition?: any;
  cafeId: number;
}

class DetailContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // this.props.history.push(`/cafe/${this.props.cafeId}`);
    socket.on("giveNewChatInfo", chat => {
      console.log("너 뭐냐고", chat);
      this.setState({
        comments: chat
      });
    });

    this.state = {
      id: this.props.cafeId,
      userId: null,
      term: "",
      result: {
        images: [],
        name: "",
        address: "",
        parkingLot: 0,
        smokingRoom: 0,
        userId: 99999999,
        telephone: ""
      },
      centerX: 0,
      centerY: 0,
      error: "",
      loading: false,
      navigatorBoolean: false,
      address: "",
      newComment: "",
      showLocation: false,
      showFilterModal: false,
      showSendButton: false,
      comments: null
    };
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.cafeId !== this.props.cafeId) {
      try {
        const id = nextProps.cafeId;
        socket.emit("postCafeIdToGetComment", id);
        socket.on("giveCommentsToClient", comments => {
          this.setState({
            comments: comments
          });
        });

        const {
          data: { data: result }
        } = await serverApi.getCafeInfobyId(id);

        this.setState({
          userId: result.userId ? result.userId : Math.random(),
          result,
          centerX: Number(result.x),
          centerY: Number(result.y)
        });

        socket.on("giveNewChatInfo", chat => {
          this.setState({
            comments: chat
          });
        });
      } catch {
        this.setState({ error: "Can't render kakao map" });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  // async componentDidUpdate(prevProps, prevState) {
  //   console.log(`prevProps: ${JSON.stringify(prevProps.cafeId)}`);
  //   console.log(`this.Props: ${JSON.stringify(this.props.cafeId)}`);
  //   if (prevProps.cafeId !== this.props.cafeId) {
  //     try {
  //       const { id } = this.state;
  //       socket.emit("postCafeIdToGetComment", id);
  //       socket.on("giveCommentsToClient", comments => {
  //         this.setState({
  //           comments: comments
  //         });
  //       });

  //       const {
  //         data: { data: result }
  //       } = await serverApi.getCafeInfobyId(id);
  //       // this.props.handleCafePosition(Number(result.x));
  //       this.setState({
  //         userId: result.userId ? result.userId : Math.random(),
  //         result,
  //         centerX: Number(result.x),
  //         centerY: Number(result.y)
  //       });

  //       socket.on("giveNewChatInfo", chat => {
  //         this.setState({
  //           comments: chat
  //         });
  //       });
  //     } catch {
  //       this.setState({ error: "Can't render kakao map" });
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }
  // }

  async componentDidMount() {
    try {
      const { id } = this.state;
      socket.emit("postCafeIdToGetComment", id);
      socket.on("giveCommentsToClient", comments => {
        this.setState({
          comments: comments
        });
      });

      const {
        data: { data: result }
      } = await serverApi.getCafeInfobyId(id);
      // this.props.handleCafePosition(Number(result.x));
      this.setState({
        userId: result.userId ? result.userId : Math.random(),
        result,
        centerX: Number(result.x),
        centerY: Number(result.y)
      });

      socket.on("giveNewChatInfo", chat => {
        this.setState({
          comments: chat
        });
      });
    } catch {
      this.setState({ error: "Can't render kakao map" });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleCommentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ newComment: value });
  };

  handleCommentSubmit = (event: React.FormEvent) => {
    console.log(`ㅇㅇ: `, event.target);
    event.preventDefault();

    const { newComment, id, result, userId } = this.state;
    this.setState({ newComment: "" });
    socket.emit("postCommentToSaveDB", {
      userId: result.userId,
      cafeId: id,
      comment: newComment
    });

    socket.on("giveNewChatInfo", chat => {
      console.log("너 뭐냐고", chat);
      this.setState({
        comments: chat
      });
    });
  };
  handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { term } = this.state;
    // console.log(`term: `, term);
  };
  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ term: value });
  };

  toggleFilterModal = () => {
    this.setState({
      showFilterModal: !this.state.showFilterModal
    });
  };
  toggleLocation = () => {
    this.setState({
      showLocation: !this.state.showLocation
    });
  };

  activateSendButton = () => {
    this.setState({
      showSendButton: true
    });
  };

  deactivateSendButton = () => {
    this.setState({
      showSendButton: false
    });
  };
  render() {
    const {
      userId,
      result,
      error,
      showLocation,
      loading,
      centerX,
      centerY,
      term,
      address,
      navigatorBoolean,
      newComment,
      showSendButton,
      comments
    } = this.state;
    console.log(`detail Cafeinfo: `, this.props);
    return (
      <>
        <DetailPresenter
          userId={userId}
          comments={comments}
          newComment={newComment}
          handleCommentSubmit={this.handleCommentSubmit}
          handleCommentInput={this.handleCommentInput}
          activateSendButton={this.activateSendButton}
          deactivateSendButton={this.deactivateSendButton}
          result={result}
          error={error}
          loading={loading}
          showSendButton={showSendButton}
        />
      </>
    );
  }
}

export default withRouter(DetailContainer);
