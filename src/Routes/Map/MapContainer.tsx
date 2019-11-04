import React, { Component } from "react";
import { serverApi } from "../../Components/API";
import { object } from "prop-types";

interface IData {
  id: number;
  name: string;
  address: string;
  telephone: string;
  category: string;
  createdAt: string;
  detailCategory: string;
  parkingLot: number;
  smokingRoom: number;
  updatedAt: string;
}
interface Istate {
  result: Array<IData>;
  address: Array<string>;
  loading: boolean;
  error: string;
}

class MapContainer extends Component<{}, Istate> {
  state = { result: [], address: [], loading: true, error: "" };

  async componentDidMount() {
    try {
      const { data: result } = await serverApi.getAllCafes();
      const address = result.map((cafe: IData) => cafe.address);
      this.setState({ result, address });
    } catch {
      this.setState({ error: "Can't load kakaoMap" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, loading, error, address } = this.state;
    // console.log(`address: `, address);
    // console.log(`address: `, result);
    return <div></div>;
  }
}

export default MapContainer;
