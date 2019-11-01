import React, { Component } from "react";
import { serverApi } from "../../Components/API";

interface Istate {
  adress: Array<string>;
  loading: boolean;
  error: string;
}
class MapContainer extends Component<{}, Istate> {
  state = { adress: [], loading: true, error: "" };

  async componentDidMount() {
    const { adress } = this.state;

    try {
      const adress = await serverApi.getAdress();

      console.log(`adress: `, adress);
    } catch {
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <div></div>;
  }
}

export default MapContainer;
