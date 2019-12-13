import React from "react";
import { LoggedOutRoutes, LoggedInRoutes } from "../router";
import GlobalStyles from "../GlobalStyles";
import Login from "../../Modal/Login";
import Signup from "../../Modal/Signup";
import Map from "../../Components/MapScreen/index";
import ToolGroup from "../ToolGroup";
import LoggedToolGroup from "../LoggedToolGroup";
interface IProps {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  toggleLoginModal: () => void;
  toggleSignupModal: () => void;
  showSignupModal: boolean;
  toggleLoggedIn: () => void;
  toggleFilterModal: () => void;
  toggleLocation: () => void;
  toggleMypageSlider: () => void;
}

const AppPresenter: React.SFC<IProps> = ({
  toggleLoginModal,
  showLoginModal,
  toggleSignupModal,
  showSignupModal,
  isLoggedIn,
  toggleLoggedIn,
  toggleFilterModal,
  toggleLocation,
  toggleMypageSlider
}) =>
  isLoggedIn ? (
    <>
      <LoggedToolGroup
        toggleMypageSlider={toggleMypageSlider}
        toggleFilterModal={toggleFilterModal}
        toggleLocation={toggleLocation}
      />
      <LoggedInRoutes />
    </>
  ) : (
    <>
      <ToolGroup
        toggleLoginModal={toggleLoginModal}
        toggleFilterModal={toggleFilterModal}
        toggleLocation={toggleLocation}
      />
      <LoggedOutRoutes />
      {showLoginModal ? (
        <Login
          toggleSignupModal={toggleSignupModal}
          toggleLoggedIn={toggleLoggedIn}
          toggleModal={toggleLoginModal}
        />
      ) : null}
      {showSignupModal ? (
        <Signup toggleSignupModal={toggleSignupModal} />
      ) : null}
      <GlobalStyles />
    </>
  );

export default AppPresenter;
