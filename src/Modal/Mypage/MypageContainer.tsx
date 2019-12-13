import React, { Component } from "react";
import MypagePresenter from "./MypagePresenter";

interface IProps {
  toggleMypageSlider: any;
  handleLogout: any;
}
class MypageContainer extends Component<IProps> {
  render() {
    const { toggleMypageSlider, handleLogout } = this.props;
    return (
      <MypagePresenter
        handleLogout={handleLogout}
        toggleMypageSlider={toggleMypageSlider}
      />
    );
  }
}
