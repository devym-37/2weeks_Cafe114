import React from "react";
import ReactDOM from "react-dom";
import { geoCode } from "../../mapHelpers";
import MapPresenter from "./MapPresenter";

interface IState {
  lat: number;
  lng: number;
  address: string;
}

class MapContainer extends React.Component<any, IState> {
  public mapRef: any;
  public map: google.maps.Map | null;
  constructor(props: any) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }
  public componentDidMount() {
    const defaultY = 37.503444;
    const defaultX = 127.049833;
    if (true) {
      this.loadMap(defaultY, defaultX);
    } else {
      navigator.geolocation.getCurrentPosition(
        this.handleGeoSucces,
        this.handleGeoError
      );
    }
  }
  public render() {
    return <MapPresenter mapRef={this.mapRef} />;
  }

  public handleGeoSucces = (positon: Position) => {
    const {
      coords: { latitude, longitude }
    } = positon;
    this.setState({
      lat: latitude,
      lng: longitude
    });
    this.loadMap(latitude, longitude);
  };
  public handleGeoError = () => {
    console.log("Cant access geo location");
  };

  public loadMap = (lat: any, lng: any) => {
    const { google } = this.props;
    const maps = google.maps;
    const mapNode = ReactDOM.findDOMNode(this.mapRef.current);
    const mapConfig: google.maps.MapOptions = {
      center: { lat, lng },
      disableDefaultUI: true,
      zoom: 15
    };
    this.map = new maps.Map(mapNode, mapConfig);
  };

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ term: value } as any);
  };

  public onInputAddress = () => {
    const { address } = this.state;
    geoCode(address);
  };
}
export default MapContainer;
