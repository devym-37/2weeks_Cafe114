import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { updateExpression } from "@babel/types";

interface IState {
  term: string;
  result: object;
  error: string;
  loading: boolean;
}

export default class extends Component<{}, IState> {
  state = { term: "", result: { name: "" }, error: "", loading: false };
  // async componentDidMount() {
  //   try {
  //     const result = await mapApi.getMap();
  //     this.setState({ result });
  //   } catch {
  //     this.setState({ error: "Can't render kakao map" });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }
  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ term: value });
  };

  render() {
    const { term, result, error, loading } = this.state;
    return (
      <DetailPresenter
        term={term}
        updateTerm={this.updateTerm}
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}
