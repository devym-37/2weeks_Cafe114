import React from "react";
import Router from "./router";
import Map from "../Components/map/index";
const App: React.FC = () => {
  return (
    <div className="App">
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4eafa52b2516f97b290cee98e3591fc3"
      />
      <Router />
      <Map />
    </div>
  );
};

export default App;
