import React from "react";
import { LoggedOutRoutes, LoggedInRoutes } from "../router";
import GlobalStyles from "../GlobalStyles";
import Login from "../../Modal/Login";
import Map from "../Map";

interface IProps {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  toggleLoginModal: any;
}

const AppPresenter: React.SFC<IProps> = ({
  toggleLoginModal,
  showLoginModal,
  isLoggedIn
}) =>
  isLoggedIn ? (
    <LoggedInRoutes />
  ) : (
    <>
      <LoggedOutRoutes />
      {showLoginModal ? <Login toggleModal={toggleLoginModal} /> : null}
      <GlobalStyles />
    </>
  );

export default AppPresenter;
