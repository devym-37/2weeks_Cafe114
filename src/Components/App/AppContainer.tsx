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
}
class AppContainer extends Component<{}, Istate> {
  state = {
    isLoggedIn: false,
    showLoginModal: false,
    showFilterModal: false
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

  render() {
    const { isLoggedIn, showLoginModal, showFilterModal } = this.state;
    return (
      <div className="App">
        <Map />
        <ToolGroup
          toggleLoginModal={this.toggleLoginModal}
          toggleFilterModal={this.toggleFilterModal}
        />
        <AppPresenter
          toggleLoginModal={this.toggleLoginModal}
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
