import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import AppPresenter from "./AppPresenter";
import Map from "../../Components/MapScreen/index";
import "react-toastify/dist/ReactToastify.css";
import ToolGroup from "../ToolGroup";
import Filter from "../../Modal/Filter";
import { Input, Form } from "../../Components/SearchInput";
import Mypage from "../../Modal/Mypage";
import { serverApi } from "../API";

interface Istate {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  showFilterModal: boolean;
  showSignupModal: boolean;
  showLocation: boolean;
  showMypageSlider: boolean;
  error: string;
  term: string;
  centerY: number;
  centerX: number;
}

class AppContainer extends Component<{}, Istate> {
  state = {
    isLoggedIn: false,
    showLoginModal: false,
    showFilterModal: false,
    showSignupModal: false,
    showLocation: false,
    showMypageSlider: false,
    error: "",
    term: "",
    centerY: 37.503444,
    centerX: 127.049833
  };

  toggleLoginModal = () => {
    this.setState({
      showLoginModal: !this.state.showLoginModal
    });
  };

  handleLogout = async () => {
    try {
      const logout = await serverApi.signout();
      if (logout.data.success) {
        this.setState({ isLoggedIn: false, showLoginModal: false });
      }
    } catch {
      this.setState({ error: "로그아웃에 실패했습니다." });
    }
  };

  toggleMypageSlider = () => {
    this.setState({
      showMypageSlider: !this.state.showMypageSlider
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
      showLocation: !this.state.showLocation
    });
  };

  toggleLoggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ term: value });
  };

  handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { term } = this.state;
    console.log(`term: `, term);
  };
  render() {
    const {
      isLoggedIn,
      showLoginModal,
      showFilterModal,
      showSignupModal,
      showLocation,
      showMypageSlider,
      term,
      centerX,
      centerY
    } = this.state;
    console.log("toggleLocation : ", term);
    return (
      <div className="App">
        <Map
          toggleFilterModal={this.toggleFilterModal}
          toggleLocation={this.toggleLocation}
          showLocation={showLocation}
          centerY={centerY}
          centerX={centerX}
        />
        <Form onSubmit={this.handleSearchSubmit}>
          <Input value={term} onChange={this.updateTerm} />
        </Form>
        <AppPresenter
          toggleMypageSlider={this.toggleMypageSlider}
          toggleLoggedIn={this.toggleLoggedIn}
          toggleLoginModal={this.toggleLoginModal}
          toggleSignupModal={this.toggleSignupModal}
          toggleFilterModal={this.toggleFilterModal}
          toggleLocation={this.toggleLocation}
          showSignupModal={showSignupModal}
          showLoginModal={showLoginModal}
          isLoggedIn={isLoggedIn}
        />
        {showMypageSlider && (
          <Mypage
            handleLogout={this.handleLogout}
            toggleMypageSlider={this.toggleMypageSlider}
          />
        )}
        {showFilterModal && <Filter />}
        <ToastContainer draggable={true} position={"top-center"} />
      </div>
    );
  }
}

export default AppContainer;
