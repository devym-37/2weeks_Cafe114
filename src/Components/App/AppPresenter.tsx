import React from "react";
import Router from "../router";
import GlobalStyles from "../GlobalStyles";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) =>
  isLoggedIn ? (
    <span>you are in</span>
  ) : (
    <>
      <Router />
      <GlobalStyles />
    </>
  );

export default AppPresenter;
