import React from "react";
import Router from "./router";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
      <GlobalStyles />
    </div>
  );
};

export default App;
