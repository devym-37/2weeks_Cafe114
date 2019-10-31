import React from "react";
import Router from "./router";
import Map from "./Map/index";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
      <Map />
    </div>
  );
};

export default App;
