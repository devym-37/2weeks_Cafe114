import React, { Component } from "react";
import hollys from "../assets/marker/hollys-brandcolor.png";
import tomtom from "../assets/marker/tomtom-brandcolor.png";
declare var kakao: any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

class Map extends Component {
  componentDidMount() {
    const hollysImageSrc = hollys;
    const tomtomImageSrc = tomtom;
    const imageSize = new kakao.maps.Size(57, 58);
    const hollysMarkerImage = new kakao.maps.MarkerImage(
      hollysImageSrc,
      imageSize
    );
    const tomtomMarkerImage = new kakao.maps.MarkerImage(
      tomtomImageSrc,
      imageSize
    );

    const el = document.getElementById("map");
    let kakaoMap = new kakao.maps.Map(el, {
      center: new kakao.maps.LatLng(33.450701, 126.570667)
    });

    const hollysMarker = new kakao.maps.Marker({
      map: kakaoMap, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(33.450705, 126.570677),
      title: "할리스", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: hollysMarkerImage
    });

    const tomtomMarker = new kakao.maps.Marker({
      map: kakaoMap, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(33.450936, 126.569477),
      title: "탐앤탐스", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: tomtomMarkerImage
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
