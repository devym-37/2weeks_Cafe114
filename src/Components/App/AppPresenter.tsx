import React from "react";
import { LoggedOutRoutes, LoggedInRoutes } from "../router";
import GlobalStyles from "../GlobalStyles";
import Login from "../../Modal/Login";
import Signup from "../../Modal/Signup";
import Map from "../Map";

interface IProps {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  toggleLoginModal: any;
  toggleSignupModal: any;
  showSignupModal: boolean;
}

const AppPresenter: React.SFC<IProps> = ({
  toggleLoginModal,
  showLoginModal,
  toggleSignupModal,
  showSignupModal,
  isLoggedIn
}) =>
  isLoggedIn ? (
    <LoggedInRoutes />
  ) : (
    <>
      <LoggedOutRoutes />
      {showLoginModal ? <Login toggleModal={toggleLoginModal} /> : null}
      {showSignupModal ? (
        <Signup toggleSignupModal={toggleSignupModal} />
      ) : null}
      <GlobalStyles />
    </>
  );

export default AppPresenter;
