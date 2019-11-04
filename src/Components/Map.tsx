import React, { Component, ButtonHTMLAttributes } from "react";
import ReactDOMServer from "react-dom/server";
import hollys from "../assets/marker/hollys-logo.png";
import tomtom from "../assets/marker/tomtom-logo.png";
import codestates from "../assets/marker/codestates.png";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { serverApi } from "../Components/API";
import {
  Update,
  CurrentLocation,
  Filter
} from "../Components/ToolGroup/MapControl";

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

interface IProps {
  toggleLocation?: any;
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
    geoClickState: false,
    centerY: 37.503444,
    centerX: 127.049833,
    level: 5
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

    const centerX = this.state.centerX;
    const centerY = this.state.centerY;
    const level = this.state.level;
    const el = document.getElementById("map");

    let kakaoMap = new kakao.maps.Map(el, {
      center: new kakao.maps.LatLng(centerY, centerX),
      level: level
    }); // 지도 생성

    this.marker(kakaoMap); // 위워크 marker
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
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        const hollysName = this.state.name[i];
        const idNumber = i + 1;
        const infoWindowContent = ReactDOMServer.renderToString(
          <Router>
            <Switch>
              <Link to={`/cafe/${idNumber}`}>
                <div>
                  <span className="title">{hollysName}</span>
                </div>
              </Link>
            </Switch>
          </Router>
        );
        kakao.maps.event.addListener(hollysMarker, "mouseover", function() {
          infowindow.setContent(infoWindowContent);
          infowindow.open(kakaoMap, hollysMarker);
        });
        kakao.maps.event.addListener(hollysMarker, "mouseout", function() {
          infowindow.close();
        });
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(hollysMarker, "click", function() {
          window.location.href = `/cafe/${idNumber}`;
        });
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
        const idNumber = i + 1;
        const infoWindowContent = ReactDOMServer.renderToString(
          <Router>
            <Switch>
              <Link to={`/cafe/${idNumber}`}>
                <span className="title">{tomtomName}</span>
              </Link>
            </Switch>
          </Router>
        );
        kakao.maps.event.addListener(tomtomMarker, "mouseover", function() {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(infoWindowContent);
          infowindow.open(kakaoMap, tomtomMarker);
        });
        kakao.maps.event.addListener(tomtomMarker, "mouseout", function() {
          infowindow.close();
        });
        kakao.maps.event.addListener(tomtomMarker, "click", function() {
          window.location.href = `/cafe/${idNumber}`;
          panTo(spot);
        });
        // kakao.maps.event.addListener(kakaoMap, "center_changed", function() {
        //   var latlng = kakaoMap.getCenter(); //
        //   panTo(latlng.getLat(), latlng.getLng());
        // });
      }
    }
    function panTo(changeLatLng: any) {
      // 이동할 위도 경도 위치를 생성합니다
      var moveLatLon = changeLatLng;
      // 지도 중심을 부드럽게 이동시킵니다
      // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      kakaoMap.panTo(moveLatLon);
    }
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      var locPosition = new kakao.maps.LatLng(37.503444, 127.049833),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any, message: any) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: locPosition
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
      });
      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(kakaoMap, marker);
      // 지도 중심좌표를 접속위치로 변경합니다
      kakaoMap.setCenter(locPosition);
    }

    var mapTypeControl = new kakao.maps.MapTypeControl();
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }

  marker = (map: any) => {
    const codestatesImageSrc = codestates;
    const imageSize = new kakao.maps.Size(57, 58);
    const codeMarkerImage = new kakao.maps.MarkerImage(
      codestatesImageSrc,
      imageSize
    );
    var markerPosition = new kakao.maps.LatLng(37.503444, 127.049833);
    // 마커를 생성합니다
    var codeMarker = new kakao.maps.Marker({
      position: markerPosition,
      title: "Code States",
      image: codeMarkerImage
    });
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    kakao.maps.event.addListener(codeMarker, "click", function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div class="customoverlay">' +
          '<span onclick="zoomIn()" style="cursor:pointer">' +
          `    <span class="title">CodeStates</span>` +
          "</span>" +
          "</div>"
      );
      infowindow.open(map, codeMarker);
    });
    kakao.maps.event.addListener(codeMarker, "mouseout", function() {
      // infowindow.close();
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    codeMarker.setMap(map);
  }; // 위워크 marker

  panTo = (map: any, y: string, x: string) => {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new kakao.maps.LatLng(y, x);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
  };

  render() {
    console.log("11111", this.props);
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

// var content =
// '<div class="customoverlay">' +
// +`  <a href="http://localhost:3000/cafe/${i + 1}">` +
// `    <span class="title">${hollysName}</span>` +
// "  </a>" +
// +"</div>";
// var content =
//   '<div class="customoverlay">' +
//   `<Link to=/cafe/${i + 1}>` +
//   // `  <a href="/cafe/${i + 1}">` +
//   `    <span class="title">${hollysName}</span>` +
//   // "  </a>" +
//   `</Link>` +
//   "</div>";

// // 커스텀 오버레이를 생성합니다
// var hollysOverlay = new kakao.maps.CustomOverlay({
//   map: kakaoMap,
//   position: spot,
//   content: content,
//   yAnchor: 1
// });
