import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import AppPresenter from "./AppPresenter";
import Map from "../Map";
import "react-toastify/dist/ReactToastify.css";
import ToolGroup from "../ToolGroup";
interface Istate {
  isLoggedIn: boolean;
  showLoginModal: boolean;
}
class AppContainer extends Component<{}, Istate> {
  state = {
    isLoggedIn: false,
    showLoginModal: false
  };

  toggleLoginModal = () => {
    this.setState({
      showLoginModal: !this.state.showLoginModal
    });
  };

  render() {
    const { isLoggedIn, showLoginModal } = this.state;
    return (
      <div className="App">
        <Map />
        <ToolGroup toggleLoginModal={this.toggleLoginModal} />
        <AppPresenter
          toggleLoginModal={this.toggleLoginModal}
          showLoginModal={showLoginModal}
          isLoggedIn={isLoggedIn}
        />
        <ToastContainer draggable={true} position={"top-center"} />
      </div>
    );
  }
}

export default AppContainer;
