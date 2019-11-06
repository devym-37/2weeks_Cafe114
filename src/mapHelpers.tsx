import { MAPS_KEY } from "./keys";
import { toast } from "react-toastify";
import axios from "axios";

// 주소를 받아 좌료를 얻는 함수
export const geoCode = async (address: string) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${MAPS_KEY}`;
  const { data } = await axios(URL);
  console.log(data);
  if (!data.error_message) {
    const { results } = data;
    const firstPlace = results[0];
    const {
      formatted_address,
      geometry: {
        location: { lat, lng }
      }
    } = firstPlace;
    return { formatted_address, lat, lng };
  } else {
    toast.error(data.error_message);
    return false;
  }
};

export const reverseGeoCode = () => {};
