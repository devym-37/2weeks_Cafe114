import api from "../api";
import * as React from "react";
import { map } from "react-kakao-maps";

// interface State {
//   api: string;
// } // 컴포넌트에 들어오는 인자에 대한 타입들을 미리 선언

export default function MapView() {
  return (
    <map
      width="100%"
      height="700px"
      level={2}
      lat={37.490826}
      lng={127.03342}
    ></map>
  );
}
