import React, { Component } from "react";
import MapPresenter from "./MapPresenter";
import API from "../API";

declare global {
  interface Window {
    initMap: any;
    kakao: any;
    parentNode: Node;
  }
}
interface Props {
  url: string;
}

export default class extends Component<{}, Props> {
  componentDidMount() {
    this.renderMap();
  }
  renderMap = () => {
    this.loadScript(API);
    window.initMap = this.initMap;
  };

  loadScript(url: string) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true; // map api를 가져오기 때문에 async 사용
    script.defer = true;
    index: HTMLScriptElement.parentNode.insertBefore(script, index); // script : newNode, index : referenceNode
  } // 아래 주석과 같은 형태 함수 만들기

  initMap = () => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new window.kakao.maps.Map(mapContainer, mapOption);
  };
  render() {
    return (
      <main>
        <div id="map"></div>
        <MapPresenter />
      </main>
    );
  }
}

/*
<script type="text/javascript" 
src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 사용하세요" async defer>
</script>
 */
