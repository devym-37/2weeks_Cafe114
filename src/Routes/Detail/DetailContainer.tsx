import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { mapApi } from "../../Components/API";

interface IState {
  result: object;
  error: string;
  loading: boolean;
}

export default class extends Component<{}, IState> {
  state = { result: { name: "" }, error: "", loading: false };
  async componentDidMount() {
    try {
      const result = await mapApi.getMap();
      this.setState({ result });
    } catch {
      this.setState({ error: "Can't render kakao map" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
