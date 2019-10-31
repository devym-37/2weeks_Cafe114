import * as React from "react";
declare var daum: any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

class Map extends React.Component {
  componentDidMount() {
    const el = document.getElementById("map");
    let daumMap = new daum.maps.Map(el, {
      center: new daum.maps.LatLng(33.450701, 126.570667)
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="Map" id="map" style={mystyles} />
      </React.Fragment>
    );
  }
}
export default Map;
