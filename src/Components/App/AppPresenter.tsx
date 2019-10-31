import React from "react";
import Router from "../router";
import GlobalStyles from "../GlobalStyles";
import PropTypes from "prop-types";

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

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
export default AppPresenter;
