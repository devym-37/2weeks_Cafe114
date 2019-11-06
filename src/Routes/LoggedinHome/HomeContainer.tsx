import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  error: string;
  loading: boolean;
}
export default class extends Component<{}, IState> {
  state = { error: "", loading: false };

  render() {
    const { error, loading } = this.state;
    return <HomePresenter error={error} loading={loading} />;
  }
}
