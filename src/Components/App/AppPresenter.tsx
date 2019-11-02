import React from "react";
import { LoggedOutRoutes, LoggedInRoutes } from "../router";
import GlobalStyles from "../GlobalStyles";
import PropTypes from "prop-types";
import Map from "../Map";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) =>
  isLoggedIn ? (
    <LoggedInRoutes />
  ) : (
    <>
      <LoggedOutRoutes />
      <GlobalStyles />
    </>
  );

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
