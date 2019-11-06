import React from "react";
import { LoggedOutRoutes, LoggedInRoutes } from "../router";
import GlobalStyles from "../GlobalStyles";
import Login from "../../Modal/Login";
import Signup from "../../Modal/Signup";
// import Map from "../MapScreen/Map";

interface IProps {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  toggleLoginModal: any;
  toggleSignupModal: any;
  showSignupModal: boolean;
  toggleLoggedIn: any;
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
      {showSignupModal ? (
        <Signup toggleSignupModal={toggleSignupModal} />
      ) : null}
      {showLoginModal ? (
        <Login
          toggleSignupModal={toggleSignupModal}
          toggleLoggedIn={toggleLoggedIn}
          toggleModal={toggleLoginModal}
        />
      ) : null}

      <GlobalStyles />
    </>
  );

export default AppPresenter;
