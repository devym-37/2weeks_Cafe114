import React, { Component } from "react";

import AppPresenter from "./AppPresenter";

interface Istate {
  isLoggedIn: boolean;
}
class AppContainer extends Component<{}, Istate> {
  state = {
    isLoggedIn: false
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <AppPresenter isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default AppContainer;
