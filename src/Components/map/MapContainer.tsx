/*global kakao*/
import * as React from "react";

declare var kakao: any;

const mystyles = {
  width: "100%",
  height: "100vh"
} as React.CSSProperties;

class Map extends React.Component {
  componentDidMount() {
    const el = document.getElementById("map");
    let daumMap = new kakao.maps.Map(el, {
      center: new kakao.maps.LatLng(33.450701, 126.570667)
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

// class MapContainer extends React.Component {
//   componentDidMount() {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src =
//       "//dapi.kakao.com/v2/maps/sdk.js?appkey=4eafa52b2516f97b290cee98e3591fc3?autoload=false";
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         let el = document.getElementById("maps");
//         let map = new window.kakao.maps.Map(el, {
//           center: new window.kakao.maps.Coords(523951.25, 1085073.75)
//         });
//       });
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div
//           className="Map"
//           id="maps"
//           style={{ width: "400px", height: "400px" }}
//         />
//       </React.Fragment>
//     );
//   }
// }

// export default MapContainer;

// class MapContainer extends React.Component<{}, Props, State> {
//   componentDidMount() {
//     this.renderMap();
//   }
//   renderMap = () => {
//     loadScript(API);
//     window.initMap = this.initMap;
//   };

//   initMap = () => {
//     // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
//     var map = new window.kakao.maps.Map(document.getElementById("map"), {
//       center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//       level: 3 // 지도의 확대 레벨
//     });
//   };

//   render() {
//     return <div id="map" style={{ width: "400px", height: "400px" }}></div>;
//   }
// }

// function loadScript(url: string) {
//   var app = document.getElementById("map");
//   var script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = url;
//   script.async = true; // map api를 가져오기 때문에 async 사용
//   script.defer = true;
//   document.body.prepend(script);
// } // 아래 주석과 같은 형태 함수 만들기

// /*
// <script type="text/javascript"
// src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 사용하세요" async defer>
// </script>
//  */

// export default MapContainer;
