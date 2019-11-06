import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import hollys from "../../assets/marker/hollys-logo.png";
import tomtom from "../../assets/marker/tomtom-logo.png";
import codestates from "../../assets/marker/codestates.png";
import currentLoca from "../assets/marker/currentLoca.png";
import { geoCode } from "../../mapHelpers";
import { serverApi } from "../API";
import MapPresenter from "./MapPresenter";
import "../../Components/Map.css";

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
  address: string;
  result: Array<Iinfo>;
  loading: boolean;
  error: string;
  subAddress: Array<string>;
  x: Array<Iinfo>;
  y: Array<Iinfo>;
  category: Array<Iinfo>;
  name: Array<Iinfo>;
}

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component<any, IState> {
  public mapRef: any;
  public state = {
    address: "",
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
    centerY: 37.503444,
    centerX: 127.049833,
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
      center: { lat: this.state.centerY, lng: this.state.centerX },
      zoom: 15,
      zoomControl: true,
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      scaleControl: true,
      streetViewControl: true,
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
      console.log(`new result: `, result[0]);

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
    console.log("lat: ", this.state.y[0], "lng: ", this.state.x[0]);
    for (var i = 0; i < this.state.category.length; i++) {
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
        const tomtomName = this.state.name[i];
        const idNumber = i + 1;
        const infoWindowContent = ReactDOMServer.renderToString(
          <div className="customoverlay">
            <a>
              <span className="title">TOMNTOMS {tomtomName}</span>
            </a>
          </div>
        );
        var infowindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });
        hollysMarker.addListener("click", function() {
          infowindow.open(googleMap, hollysMarker);
          // window.location.href = `/cafe/${idNumber}`;
          googleMap.panTo(spot);
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
      }
    }
    this.codeStatesMarker(googleMap); // codestates marker

    function toggleBounce(marker: any) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  }

  public codeStatesMarker(map: any) {
    const codeStatesSrc = codestates;
    const { google } = this.props;
    const imageSize = new google.maps.Size(50, 50);
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
    codeMarker.setMap(map);
  }

  public onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value } as any);
    console.log("value", value);
  };

  public onSubmit = async () => {
    console.log("input");
    const { address } = this.state;
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

  public handleGeoSucces = (positon: Position) => {
    const {
      coords: { latitude, longitude }
    } = positon;
    this.setState({
      lat: latitude,
      lng: longitude
    });
  };

  public handleGeoError = () => {
    console.log("Cant access geo location");
  };

  public render() {
    console.log("this.props", this.props.showLocation);
    const { address } = this.state;
    return (
      // <Map
      //   google={this.props.google}
      //   zoom={16}
      //   initialCenter={{ lat: 37.503444, lng: 127.049833 }}
      //   mapTypeControl={false}
      // >
      <MapPresenter
        mapRef={this.mapRef}
        address={address}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
      // </Map>
    );
  }
}
export default MapContainer;
