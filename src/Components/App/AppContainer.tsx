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
import { geoCode } from "../../mapHelpers";

interface Iinfo {
  id: number;
  name: string;
  address: string;
  subAddress: string;
  x: string;
  y: string;
  telephone: string;
  category: string;
  detailCategory: string;
  parkingLot: number;
  smokingRoom: number;
  createdAt: string;
  updatedAt: string;
}

interface Istate {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  showFilterModal: boolean;
  showSignupModal: boolean;
  showLocation: boolean;
  showMypageSlider: boolean;
  showMypageLikeCafe: boolean;
  error: string;
  term: string;
  centerY: number;
  centerX: number;
  navigatorBoolean: boolean;
  address: string;
  userName: string;
  userEmail: string;
  favoriteCafe: any;
}

class AppContainer extends Component<{}, Istate> {
  state = {
    isLoggedIn: false,
    showLoginModal: false,
    showFilterModal: false,
    showSignupModal: false,
    showLocation: false,
    showMypageSlider: true,
    error: "",
    term: "",
    centerY: 37.503444,
    centerX: 127.049833,
    navigatorBoolean: false,
    address: "",
    showMypageLikeCafe: false,
    userName: "",
    userEmail: "",
    favoriteCafe: {}
  };

  handleCafePosition = (centerX: number, centerY: number) => {
    this.setState({
      centerX,
      centerY
    });
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

  toggleMypageSlider = async () => {
    try {
      const userInfo = await serverApi.getUserInfo();
      if (userInfo.data.success) {
        if (userInfo.data.data.name !== null) {
          this.setState({
            showMypageSlider: !this.state.showMypageSlider,
            userName: userInfo.data.data.name,
            userEmail: userInfo.data.data.email
          });
        } else {
          this.setState({
            showMypageSlider: !this.state.showMypageSlider,
            userName: "카카오 고객",
            userEmail: ""
          });
        }
      }
    } catch {
      this.setState({ error: "로그인에 실패했습니다." });
    }
  };

  handleLikeCafe = async () => {
    try {
      const {
        data: {
          data: { favoriteCafe: userInfoCafe }
        }
      } = await serverApi.getUserInfo();
      console.log("userInfo", userInfoCafe);
      if (userInfoCafe.length !== 0) {
        this.setState({
          showMypageLikeCafe: !this.state.showMypageLikeCafe,
          favoriteCafe: [...userInfoCafe]
        });
      } else {
        this.setState({
          showMypageLikeCafe: !this.state.showMypageLikeCafe,
          favoriteCafe: {}
        });
      }
    } catch {
      this.setState({ error: "로그인에 실패했습니다." });
    }
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
  toggleFilterModal = () => {
    this.setState({
      showFilterModal: !this.state.showFilterModal
    });
  };

  public handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { term } = this.state;
    console.log(`term: `, term);
    const result = await geoCode(term);
    if (result !== false) {
      const { lat, lng, formatted_address: formatedAddress } = result;
      this.setState({
        address: formatedAddress,
        centerY: lat,
        centerX: lng
      });
    }
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
      centerY,
      navigatorBoolean,
      userName,
      userEmail,
      showMypageLikeCafe,
      favoriteCafe
    } = this.state;

    console.log("likecafe", favoriteCafe);
    return (
      <div className="App">
        <AppPresenter
          handleCafePosition={this.handleCafePosition}
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
            handleLikeCafe={this.handleLikeCafe}
            showMypageLikeCafe={showMypageLikeCafe}
            userName={userName}
            userEmail={userEmail}
            favoriteCafe={favoriteCafe}
          />
        )}
        {showFilterModal && <Filter />}
        <ToastContainer draggable={true} position={"top-center"} />
      </div>
    );
  }
}

export default AppContainer;
