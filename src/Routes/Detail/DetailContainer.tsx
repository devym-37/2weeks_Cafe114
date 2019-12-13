import React, { Component, ChangeEvent } from "react";
import DetailPresenter from "./DetailPresenter";
import { serverApi } from "../../Components/API";
import { RouteComponentProps } from "react-router";
interface IInfo {
  name: string;
  address: string;
  parkingLot: number;
  smokingRoom: number;
  telephone: string;
  images: Array<string>;
}

interface IState {
  id: number;
  result: IInfo;
  error: string;
  loading: boolean;
}
interface IProps extends RouteComponentProps<any> {}

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
      result: {
        images: [],
        name: "",
        address: "",
        parkingLot: 0,
        smokingRoom: 0,
        telephone: ""
      },
      error: "",
      loading: false
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.state;
      const {
        data: { data: result }
      } = await serverApi.getCafeInfobyId(id);
      // console.log("detail: ", result);

      this.setState({ result });
    } catch {
      this.setState({ error: "Can't render kakao map" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    // console.log("result: ", result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
