import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import AppPresenter from "./AppPresenter";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer draggable={true} position={"top-center"} />
      </div>
    );
  }
}

export default AppContainer;
