import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import hollys from "../../assets/marker/hollys-logo.png";
import tomtom from "../../assets/marker/tomtom-logo.png";
import codestates from "../../assets/marker/codestates.png";
import currentLoca from "../../assets/marker/currentLoca.png";
import { geoCode } from "../../mapHelpers";
import { serverApi } from "../API";
import MapPresenter from "./MapPresenter";

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

interface IState {
  lat: number;
  lng: number;
  address?: string;
  result: Array<Iinfo>;
  loading: boolean;
  error: string;
  subAddress: Array<string>;
  x: Array<Iinfo>;
  y: Array<Iinfo>;
  category: Array<Iinfo>;
  name: Array<Iinfo>;
  map: any;
}

class MapContainer extends React.Component<any, IState> {
  public mapRef: any;
  public state = {
    map: this.props.google.maps,
    address: this.props.address,
    lat: 0,
    lng: 0,
    result: [],
    subAddress: [],
    loading: true,
    error: "",
    x: [],
    y: [],
    category: [],
    name: [],
    centerY: this.props.centerY,
    centerX: this.props.centerX,
    navigatorBoolean: this.props.navigatorBoolean,
    level: 16
  };

  constructor(props: any) {
    super(props);
    this.mapRef = React.createRef();
  }

  async componentDidMount() {
    const { google } = this.props;
    const maps = google.maps;
    const mapNode = ReactDOM.findDOMNode(this.mapRef.current);
    const mapConfig: google.maps.MapOptions = {
      center: { lat: this.props.centerY, lng: this.props.centerX },
      minZoom: 9,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      }
    };

    const googleMap = new google.maps.Map(mapNode, mapConfig); // 지도생성

    try {
      const {
        data: {
          data: { result: result }
        }
      } = await serverApi.getAllCafes();
      const subAddress = result.map((cafe: Iinfo) => cafe.subAddress);
      const x = result.map((cafe: Iinfo) => cafe.x);
      const y = result.map((cafe: Iinfo) => cafe.y);
      const category = result.map((cafe: Iinfo) => cafe.category);
      const name = result.map((cafe: Iinfo) => cafe.name);
      this.setState({ result, subAddress, x, y, category, name });
    } catch {
      this.setState({ error: "Can't load googleMap" });
    } finally {
      this.setState({ loading: false });
    }

    for (let i = 0; i < this.state.category.length; i++) {
      if (this.state.category[i] === "hollys") {
        const { google } = this.props;
        const hollysSrc = hollys;
        const spot = new google.maps.LatLng(this.state.y[i], this.state.x[i]);
        const imageSize = new google.maps.Size(60, 60);
        const hollysMarkerImage = new google.maps.MarkerImage(
          hollysSrc,
          imageSize,
          null,
          null,
          imageSize
        );
        const hollysMarker = new google.maps.Marker({
          position: spot,
          title: "Hollys Cafe",
          icon: hollysMarkerImage
        });
        hollysMarker.setMap(googleMap);
        const hollysName = this.state.name[i];
        const idNumber = i + 1;
        const infoWindowContent = await ReactDOMServer.renderToString(
          <div className="customoverlay">
            <a>
              <span className="title">Hollys {hollysName}</span>
            </a>
          </div>
        );

        const infowindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });
        hollysMarker.addListener("click", function() {
          infowindow.open(googleMap, hollysMarker);
          googleMap.panTo(spot);
          window.location.href = `/cafe/${idNumber}`;
        });
        hollysMarker.addListener("mouseover", function() {
          infowindow.open(googleMap, hollysMarker);
        });
        hollysMarker.addListener("mouseout", function() {
          infowindow.close();
        });
      } else {
        const { google } = this.props;
        const tomtomSrc = tomtom;
        const spot = new google.maps.LatLng(this.state.y[i], this.state.x[i]);
        const imageSize = new google.maps.Size(60, 60);
        const tomtomMarkerImage = new google.maps.MarkerImage(
          tomtomSrc,
          imageSize,
          null,
          null,
          imageSize
        );
        const tomtomMarker = new google.maps.Marker({
          position: spot,
          title: "TOMnTOMs Cafe",
          icon: tomtomMarkerImage
        });
        tomtomMarker.setMap(googleMap);
        const tomtomNames = this.state.name[i];
        const idNumber = i + 1;
        const infoWindowContent = await ReactDOMServer.renderToString(
          <div className="customoverlay">
            <a>
              <span className="title">TOMNTOMS {tomtomNames}</span>
            </a>
          </div>
        );
        const infowindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });
        tomtomMarker.addListener("click", function() {
          infowindow.open(googleMap, tomtomMarker);
          googleMap.panTo(spot);
          window.location.href = `/cafe/${idNumber}`;
        });
        tomtomMarker.addListener("mouseover", function() {
          infowindow.open(googleMap, tomtomMarker);
        });
        tomtomMarker.addListener("mouseout", function() {
          infowindow.close();
        });
      }
    }

    const COORDS = "coords";
    if (this.props.navigatorBoolean) {
      if (navigator.geolocation) {
        init(); // navigator 실행
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치
        console.log("Cant access geo location");
        this.codeStatesMarker(googleMap); // 위워크 marker
      }
    }

    function saveCoords(coordsObj: any) {
      localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }

    function handleGeoSucces(position: any) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coordsObj = {
        latitude,
        longitude
      };
      var locPosition = new google.maps.LatLng(
        coordsObj.latitude,
        coordsObj.longitude
      );
      displayMarker(locPosition);
      saveCoords(coordsObj);
    }
    function handleGeoError() {
      console.log("Cant access geo location");
    }
    function askForCoords() {
      navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    }

    function loadCoords() {
      const loadCoords = localStorage.getItem(COORDS);
      if (loadCoords === null) {
        askForCoords();
      } else {
        const parseCoords = JSON.parse(loadCoords);
        var locPosition = new google.maps.LatLng(
          parseCoords.latitude,
          parseCoords.longitude
        );
        displayMarker(locPosition);
      }
    }

    function displayMarker(locPosition: any) {
      const currentLocaSrc = currentLoca;
      const imageSize = new google.maps.Size(60, 60);
      const currentLocaImage = new google.maps.MarkerImage(
        currentLocaSrc,
        imageSize,
        null,
        null,
        imageSize
      );
      var marker = new google.maps.Marker({
        map: googleMap,
        position: locPosition,
        image: currentLocaImage
      });
      googleMap.setCenter(locPosition);
    }

    function init() {
      loadCoords(); // 실행함수
    }

    this.codeStatesMarker(googleMap); // codestates marker

    // function toggleBounce(marker: any) {
    //   if (marker.getAnimation() !== null) {
    //     marker.setAnimation(null);
    //   } else {
    //     marker.setAnimation(google.maps.Animation.BOUNCE);
    //   }
    // }
  }

  public codeStatesMarker(map: any) {
    const codeStatesSrc = codestates;
    const { google } = this.props;
    const imageSize = new google.maps.Size(60, 60);
    const codeMarkerImage = new google.maps.MarkerImage(
      codeStatesSrc,
      imageSize,
      null,
      null,
      imageSize
    );
    const codeMarker = new google.maps.Marker({
      position: { lat: 37.503444, lng: 127.049833 },
      title: "CODE STATES",
      icon: codeMarkerImage
    });
    const infoWindowContent = ReactDOMServer.renderToString(
      <div className="customoverlay">
        <a>
          <span className="title">CODE STATES</span>
        </a>
      </div>
    );
    var infowindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    codeMarker.setMap(map);
    codeMarker.addListener("click", function() {
      infowindow.open(map, codeMarker);
      // window.location.href = `/cafe/${idNumber}`;
      map.panTo({ lat: 37.503444, lng: 127.049833 });
    });
    codeMarker.addListener("mouseover", function() {
      infowindow.open(map, codeMarker);
    });
    codeMarker.addListener("mouseout", function() {
      infowindow.close();
    });
  }

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value } as any);
  };

  public onSubmit = async (input: any) => {
    console.log("input");
    const address = input;
    const result = await geoCode(address);
    if (result !== false) {
      const { lat, lng, formatted_address: formatedAddress } = result;
      this.setState({
        address: formatedAddress,
        lat,
        lng
      });
    }
  };

  public render() {
    console.log("this.props", this.props.google.maps);
    console.log("this.state.map : ", this.state.map);
    const { address } = this.state;
    return (
      <MapPresenter
        mapRef={this.mapRef}
        address={address}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}
export default MapContainer;
