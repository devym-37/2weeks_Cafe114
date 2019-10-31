import React from "react";
import { NaverMap } from "react-naver-maps";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 37.3595704, lng: 127.105399 }
    };

    this.panToNaver = this.panToNaver.bind(this);
  }

  panToNaver() {
    this.setState({ center: { lat: 37.3595704, lng: 127.105399 } });
  }

  render() {
    return (
      <div>
        <NaverMap
          id="cy5x7yh6ia"
          style={{ width: "100%", height: "400px" }}
          // uncontrolled zoom
          defaultZoom={10}
          // controlled center
          // Not defaultCenter={this.state.center}
          center={this.state.center}
          onCenterChanged={center => this.setState({ center })}
        />
      </div>
    );
  }
}

export default MapContainer;
