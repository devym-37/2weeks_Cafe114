import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { mapApi } from "../../Components/API";

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

    if (term !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { term } = this.state;
    try {
      this.setState({ loading: true });
      const result = await mapApi.search(term);
      this.setState({ result });
    } catch {
      this.setState({ error: `can't find location by ${term}` });
    } finally {
      this.setState({ loading: false });
    }
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
