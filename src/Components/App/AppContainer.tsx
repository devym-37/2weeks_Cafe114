import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import AppPresenter from "./AppPresenter";
import Map from "../Map";
import "react-toastify/dist/ReactToastify.css";
import ToolGroup from "../ToolGroup";
import Filter from "../../Modal/Filter";

interface Istate {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  showFilterModal: boolean;
  showSignupModal: boolean;
  showLocation: boolean;
}

class AppContainer extends Component<{}, Istate> {
  state = {
    isLoggedIn: false,
    showLoginModal: false,
    showFilterModal: false,
    showSignupModal: true,
    showLocation: false
  };

  toggleLoginModal = () => {
    this.setState({
      showLoginModal: !this.state.showLoginModal
    });
  };

  toggleFilterModal = () => {
    this.setState({
      showFilterModal: !this.state.showFilterModal
    });
  };

  toggleSignupModal = () => {
    this.setState({
      showSignupModal: !this.state.showSignupModal,
      showLoginModal: false
    });
  };

  toggleLocation = () => {
    this.setState({
      showLocation: true
    });
  };

  toggleLoggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  render() {
    const {
      isLoggedIn,
      showLoginModal,
      showFilterModal,
      showSignupModal
    } = this.state;
    // console.log("toggleLocation : ", toggleLocation);
    return (
      <div className="App">
        <Map
          toggleFilterModal={this.toggleFilterModal}
          toggleLocation={this.toggleLocation}
        />
        <ToolGroup
          toggleLoginModal={this.toggleLoginModal}
          toggleFilterModal={this.toggleFilterModal}
          toggleLocation={this.toggleLocation}
        />
        <AppPresenter
          toggleLoggedIn={this.toggleLoggedIn}
          toggleLoginModal={this.toggleLoginModal}
          toggleSignupModal={this.toggleSignupModal}
          showSignupModal={showSignupModal}
          showLoginModal={showLoginModal}
          isLoggedIn={isLoggedIn}
        />
        {showFilterModal && <Filter />}
        <ToastContainer draggable={true} position={"top-center"} />
      </div>
    );
  }
}

export default AppContainer;
