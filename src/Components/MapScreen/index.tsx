import dotenv from "dotenv";
import { MAPS_KEY } from "../../keys";
import { GoogleApiWrapper } from "google-maps-react";
import MapContainer from "./MapContainer";

dotenv.config();

export default GoogleApiWrapper({
  apiKey: MAPS_KEY
})(MapContainer);
