import React from "react";
import ReactDOM from "react-dom";
import MapPresenter from "./MapPresenter";

class MapContainer extends React.Component<any> {
  public mapRef: any;
  public map: google.maps.Map | null;
  constructor(props: any) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }
  public componentDidMount() {
    const { google } = this.props;
    const maps = google.maps;
    const mapNode = ReactDOM.findDOMNode(this.mapRef.current);
    console.log(google);
    console.log(this.mapRef.current);
    console.log(mapNode);
    console.log(mapNode === this.mapRef.current);
    const mapConfig: google.maps.MapOptions = {
      center: { lat: 37.503444, lng: 127.049833 },
      disableDefaultUI: true,
      zoom: 15
    };
    this.map = new maps.Map(mapNode, mapConfig);
  }
  public render() {
    return <MapPresenter mapRef={this.mapRef} />;
  }
}
export default MapContainer;
