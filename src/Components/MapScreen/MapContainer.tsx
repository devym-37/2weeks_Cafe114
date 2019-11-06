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
  public state = {
    address: "",
    lat: 0,
    lng: 0
  };
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
      console.log(this.loadMap);
    } else {
      navigator.geolocation.getCurrentPosition(
        this.handleGeoSucces,
        this.handleGeoError
      );
    }
  }

  public loadMap = (lat: any, lng: any) => {
    const { google } = this.props;
    const maps = google.maps;
    const mapNode = ReactDOM.findDOMNode(this.mapRef.current);
    const mapConfig: google.maps.MapOptions = {
      center: { lat, lng },
      zoom: 15,
      zoomControl: true,
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      scaleControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      }
    };

    this.map = new google.maps.Map(mapNode, mapConfig);
  };

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value } as any);
    console.log("value", value);
  };

  public onSubmit = async () => {
    console.log("input");
    const { address } = this.state;
    const result = await geoCode(address);
    if (result !== false) {
      const { lat, lng, formatted_address: formatedAddress } = result;
      this.setState({
        address: formatedAddress,
        lat,
        lng
      });
    }
  };

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

  public render() {
    console.log("this.props", this.props);
    const { address } = this.state;
    return (
      <MapPresenter
        mapRef={this.mapRef}
        address={address}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}
export default MapContainer;
