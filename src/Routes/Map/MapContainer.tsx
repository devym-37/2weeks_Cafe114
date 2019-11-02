import React, { Component } from "react";
import { serverApi } from "../../Components/API";

interface Istate {
  result: Array<string>;
  loading: boolean;
  error: string;
}
class MapContainer extends Component<{}, Istate> {
  state = { result: [], loading: true, error: "" };

  async componentDidMount() {
    try {
      const { data: result } = await serverApi.getAllCafes();
      this.setState({ result });
    } catch {
      this.setState({ error: "Can't load kakaoMap" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(`result: `, result);
    return <div></div>;
  }
}

export default MapContainer;
