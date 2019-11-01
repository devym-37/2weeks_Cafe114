import * as React from "react";
declare var kakao: any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

class Map extends React.Component {
  componentDidMount() {
    const el = document.getElementById("map");
    let map = new kakao.maps.Map(el, {
      center: new kakao.maps.LatLng(37.503469, 127.049782),
      level: 2
    });
    this.marker(map);
  }
  // default = 37.503469, 127.049782;

  marker(map: any) {
    var markerPosition = new kakao.maps.LatLng(37.503469, 127.049782);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
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
