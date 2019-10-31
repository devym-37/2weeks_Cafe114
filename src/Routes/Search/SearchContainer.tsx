import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { mapApi } from "../../Components/API";

interface IState {
  term: string;
  result: object;
  error: string;
  loading: boolean;
}

export default class extends Component<{}, IState> {
  state = { term: "", result: {}, error: "", loading: false };

  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`target: `, event.target.value);
    // const {
    //   target: { value }
    // } = event;
    // this.setState({ term: value });
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
      this.setState({ error: `can't find search location by ${term}` });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { term, result, error, loading } = this.state;
    return (
      <SearchPresenter
        term={term}
        result={result}
        error={error}
        loading={loading}
        updateTerm={this.updateTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
