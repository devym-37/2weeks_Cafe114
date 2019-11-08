import React, { Component, ChangeEvent } from "react";
import DetailPresenter from "./DetailPresenter";
import { serverApi } from "../../Components/API";
import { RouteComponentProps } from "react-router";
import { Input, Form } from "../../Components/SearchInput";
import Map from "../../Components/MapScreen";
import io from "socket.io-client";
const socket = io.connect("http://127.0.0.1:3000");

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
}

interface IState {
  centerX: number;
  centerY: number;
  id: number;
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
  response: string;
}
interface IProps extends RouteComponentProps<any> {
  handleCafePosition: any;
}

export default class extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const {
      match: {
        params: { id }
      }
    } = props;
    this.state = {
      id: props.match.params.id,
      term: "",
      result: {
        images: [],
        name: "",
        address: "",
        parkingLot: 0,
        smokingRoom: 0,
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
      response: ""
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.state;
      socket.emit("postCafeIdToGetComment", id);
      socket.on("giveCommentsToClient", comments => {
        console.log(comments);
        this.setState({
          response: comments
        });
      });
      const {
        data: { data: result }
      } = await serverApi.getCafeInfobyId(id);
      this.props.handleCafePosition(Number(result.x));
      this.setState({
        result,
        centerX: Number(result.x),
        centerY: Number(result.y)
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
    event.preventDefault();
    const { newComment, id } = this.state;

    socket.emit("postCommentToSaveDB", {
      userId: 1,
      cafeId: id,
      comment: newComment
    });

    socket.on("giveNewChatInfo", chat => {
      console.log("너 뭐냐고", chat);
      this.setState({
        response: chat
      });
    });

    console.log(`newComment: `, newComment);
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
      response
    } = this.state;
    console.log(`response: `, response);

    return (
      <>
        {" "}
        {centerX && centerY && (
          <Map
            toggleFilterModal={this.toggleFilterModal}
            toggleLocation={this.toggleLocation}
            showLocation={showLocation}
            centerY={centerY}
            centerX={centerX}
            navigatorBoolean={navigatorBoolean}
            address={term}
          />
        )}
        <Form onSubmit={this.handleSearchSubmit}>
          <Input value={term} onChange={this.updateTerm} />
        </Form>{" "}
        <DetailPresenter
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
