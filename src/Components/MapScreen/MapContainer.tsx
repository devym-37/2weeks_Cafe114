import React from "react";
import { RouteComponentProps } from "react-router-dom";
import MapPresenter from "./MapPresenter";

class MapContainer extends React.Component<any> {
  public mapRedf: any;
  public map: google.maps.Map;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  public componentDidMount() {
    const { google } = this.props;
    const maps = google.maps;
  }

  public render() {
    console.log(this.props);
    return <MapPresenter />;
  }
}

export default MapContainer;
