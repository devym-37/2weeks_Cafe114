import React, { Component, ButtonHTMLAttributes } from "react";
import { Link } from 'react-router-dom'
import hollys from "../assets/marker/hollys-brandcolor.png";
import tomtom from "../assets/marker/tomtom-brandcolor.png";
import { serverApi } from "../Components/API";
import ToolGroup from "../Components/ToolGroup";
import { any } from "prop-types";

declare var kakao: any;
declare const zoomIn: (event: MouseEvent) => any;
declare const zoomOut: (event: MouseEvent) => any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

interface Iinfo {
  id: number;
  name: string;
  address: string;
  subAddress: string;
  x: string;
  y: string;
  telephone: string;
  category: string;
  detailCategory: string;
  parkingLot: number;
  smokingRoom: number;
  createdAt: string;
  updatedAt: string;
}

interface Istate {
  result: Array<Iinfo>;
  loading: boolean;
  error: string;
  subAddress: Array<string>;
  x: Array<Iinfo>;
  y: Array<Iinfo>;
  category: Array<Iinfo>;
  name: Array<Iinfo>;
  geoClickState: boolean;
}

class Map extends Component<{}, Istate> {
  state = {
    result: [],
    subAddress: [],
    loading: true,
    error: "",
    x: [],
    y: [],
    category: [],
    name: [],
    geoClickState: false
  };
  async componentDidMount() {
    try {
      const { data: result } = await serverApi.getAllCafes();
      const subAddress = result.map((cafe: Iinfo) => cafe.subAddress);
      const x = result.map((cafe: Iinfo) => cafe.x);
      const y = result.map((cafe: Iinfo) => cafe.y);
      const category = result.map((cafe: Iinfo) => cafe.category);
      const name = result.map((cafe: Iinfo) => cafe.name);
      this.setState({ result, subAddress, x, y, category, name });
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
    // console.log("result ------", this.state.result.length);
    // 주소-좌표 변환 객체를 생성합니다

    for (var i = 0; i < this.state.category.length; i++) {
      if (this.state.category[i] === "hollys") {
        const spot = new kakao.maps.LatLng(this.state.y[i], this.state.x[i]);
        const hollysMarker = new kakao.maps.Marker({
          map: kakaoMap, // 마커를 표시할 지도
          clickable: true,
          position: spot,
          title: "Hollys Cafe", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: hollysMarkerImage
        });
        hollysMarker.setMap(kakaoMap);
        // 마커에 클릭이벤트를 등록합니다
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        const hollysName = this.state.name[i];
        kakao.maps.event.addListener(hollysMarker, "mouseover", function() {
          var content = '<div class="customoverlay">' +
          `  <a href="http://localhost:3000/cafe/${i}">` +
          `    <span class="title">"Hollys Cafe"</span>` +
          '  </a>' +
          '</div>';

          // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          map: kakaoMap,
          position: spot,
          content: content,
          yAnchor: 1 
        }); 
          // // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          // infowindow.setContent(
          //   '<div style="padding:5px;font-size:12px;">' +
          //     `${hollysName}` +
          //     "</div>"
          // );
          // infowindow.open(kakaoMap, hollysMarker);
          customOverlay.setMap(kakaoMap);
        });
        kakao.maps.event.addListener(hollysMarker, "mouseout", function() {
          // customOverlay.setMap(null);
          // infowindow.close();
        });
        kakao.maps.event.addListener(hollysMarker, 'click', function(){
          console.log(hollysMarker.a.innerHTML)
        })
      } else {
        const spot = new kakao.maps.LatLng(this.state.y[i], this.state.x[i]);
        const tomtomMarker = new kakao.maps.Marker({
          map: kakaoMap, // 마커를 표시할 지도
          position: spot,
          title: "TOMTOMs Cafe", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: tomtomMarkerImage
        });
        tomtomMarker.setMap(kakaoMap);
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        const tomtomName = this.state.name[i];
        kakao.maps.event.addListener(tomtomMarker, "mouseover", function() {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
            `${tomtomName}` +
            "</div>"  
          );
          infowindow.open(kakaoMap, tomtomMarker);
        });
        kakao.maps.event.addListener(tomtomMarker, "mouseout", function() {
          infowindow.close();
        });
      }
    }

    this.zoomIn(kakaoMap);
    this.zoomOut(kakaoMap);
  }
  // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  zoomIn = (map: any) => {
    map.setLevel(map.getLevel() - 1);
  };

  // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  zoomOut = (map: any) => {
    map.setLevel(map.getLevel() + 1);
  };

  marker = (map: any) => {
    var markerPosition = new kakao.maps.LatLng(37.503469, 127.049782);
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }; // 위워크 marker

  

  render() {
    return (
      <React.Fragment>
        <div className="Map" id="map" style={mystyles} />
        <ToolGroup />
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
