import React, { Component } from "react";
import hollys from "../assets/marker/hollys-brandcolor.png";
import tomtom from "../assets/marker/tomtom-brandcolor.png";
import { any } from "prop-types";

declare var kakao: any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

const State = {
  el: any,
  kakaoMap: any
};
// default = 37.503469, 127.049782;

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
      center: new kakao.maps.LatLng(37.503469, 127.049782),
      level: 5
    }); // 지도 생성

    // const hollysMarker = new kakao.maps.Marker({
    //   map: kakaoMap, // 마커를 표시할 지도
    //   position: new kakao.maps.LatLng(33.450705, 126.570677),
    //   title: "할리스", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //   image: hollysMarkerImage
    // });

    // const tomtomMarker = new kakao.maps.Marker({
    //   map: kakaoMap, // 마커를 표시할 지도
    //   position: new kakao.maps.LatLng(33.450936, 126.569477),
    //   title: "탐앤탐스", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //   image: tomtomMarkerImage
    // });

    this.marker(kakaoMap); // 위워크 marker

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(kakaoMap);
    // 카테고리로 은행을 검색합니다
    ps.keywordSearch("서울 할리스커피", placesSearchCB);
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        kakaoMap.setBounds(bounds);
      }
    }
    function displayMarker(place: any) {
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: hollysMarkerImage
      });
      console.log("place.place_name : ", place);
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "mouseover", function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(kakaoMap, marker);
      });
      kakao.maps.event.addListener(marker, "mouseout", function() {
        infowindow.close();
      });
    }

    // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomIn() {
      kakaoMap.setLevel(kakaoMap.getLevel() - 1);
    }

    // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomOut() {
      kakaoMap.setLevel(kakaoMap.getLevel() + 1);
    }
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    kakao.maps.event.addListener(kakaoMap, "zoom_changed");
  }

  marker(map: any) {
    var markerPosition = new kakao.maps.LatLng(37.503469, 127.049782);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  } // 위워크 marker

  render() {
    return (
      <React.Fragment>
        <div className="Map" id="map" style={mystyles} />
      </React.Fragment>
    );
  }
}
export default Map;
