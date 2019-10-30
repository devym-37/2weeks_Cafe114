import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
// import { mapApi } from "../../Components/API";

interface IState {
  map: object;
  error: string;
  loading: boolean;
}

export default class extends Component<{}, IState> {
  state = { map: {}, error: "", loading: false };
  async componentDidMount() {
    try {
      // const map = await mapApi.getMap();
      // this.setState({ map });
    } catch {
      this.setState({ error: "Can't render kakao map" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { map, error, loading } = this.state;
    return <DetailPresenter map={map} error={error} loading={loading} />;
  }
}
