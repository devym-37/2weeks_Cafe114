import React, { Component } from "react";
import hollys from "../assets/marker/hollys-brandcolor.png";
import tomtom from "../assets/marker/tomtom-brandcolor.png";
import { serverApi } from "../Components/API";

declare var kakao: any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

interface Iinfo {
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
  result: Array<Iinfo>;
  loading: boolean;
  error: string;
  address: Array<string>;
}

class Map extends Component<{}, Istate> {
  state = { result: [], address: [], loading: true, error: "" };
  async componentDidMount() {
    try {
      const { data: result } = await serverApi.getAllCafes();
      const address = result.map((cafe: Iinfo) => cafe.address);
      this.setState({ result, address });
    } catch {
      this.setState({ error: "Can't load kakaoMap" });
    } finally {
      this.setState({ loading: false });
    }

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

    this.marker(kakaoMap); // 위워크 marker
    console.log("result ------", this.state.result);
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    for (let i = 0; i < this.state.address.length; i++) {
      geocoder.addressSearch(this.state.address[i], placesSearchCB);
    }
    // 주소로 좌표를 검색합니다
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();
        displayMarker(data[0]);
        bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
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
      console.log("place.place_name : ", place.place_name);
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "mouseover", function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' + `cafe114` + "</div>"
        );
        infowindow.open(kakaoMap, marker);
      });
      kakao.maps.event.addListener(marker, "mouseout", function() {
        infowindow.close();
      });
    }
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

// 마커 표시
// const hollysMarker = new kakao.maps.Marker({
//   map: kakaoMap, // 마커를 표시할 지도
//   position: new kakao.maps.LatLng(33.450705, 126.570677),
//   title: "할리스", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//   image: hollysMarkerImage
// });
