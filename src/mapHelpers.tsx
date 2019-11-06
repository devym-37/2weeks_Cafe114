import { MAPS_KEY } from "./keys";
import axios from "axios";

// 주소를 받아 좌료를 얻는 함수
export const geoCode = async (address: string) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${MAPS_KEY}`;
  const { data } = await axios(URL);
  console.log(data);
};

export const reverseGeoCode = () => {};
