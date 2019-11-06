import React from "react";
import { LoggedOutRoutes, LoggedInRoutes } from "../router";
import GlobalStyles from "../GlobalStyles";
import Login from "../../Modal/Login";
import Signup from "../../Modal/Signup";
import Map from "../Map";

interface IProps {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  toggleLoginModal: () => void;
  toggleSignupModal: () => void;
  showSignupModal: boolean;
  toggleLoggedIn: () => void;
}

const AppPresenter: React.SFC<IProps> = ({
  toggleLoginModal,
  showLoginModal,
  toggleSignupModal,
  showSignupModal,
  isLoggedIn,
  toggleLoggedIn
}) =>
  isLoggedIn ? (
    <LoggedInRoutes />
  ) : (
    <>
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
