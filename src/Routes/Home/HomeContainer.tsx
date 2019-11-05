import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  map: object;
  error: string;
  loading: boolean;
  term: string;
  result: object;
}
export default class extends Component<{}, IState> {
  state = { term: "", result: {}, map: {}, error: "", loading: false };

  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ term: value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { term } = this.state;
  };

  render() {
    const { term, result, map, error, loading } = this.state;
    return (
      <HomePresenter
        term={term}
        map={map}
        error={error}
        loading={loading}
        updateTerm={this.updateTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
