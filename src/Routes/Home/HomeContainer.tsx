import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  error: string;
  loading: boolean;
  isLoggedIn: boolean;
  showLoginModal: boolean;
  showFilterModal: boolean;
  showSignupModal: boolean;
  showLocation: boolean;
  showMypageSlider: boolean;
  term: string;
  centerY: number;
  centerX: number;
  navigatorBoolean: boolean;
  address: string;
}
export default class extends Component<{}, IState> {
  state = {
    error: "",
    loading: false,
    isLoggedIn: false,
    showLoginModal: false,
    showFilterModal: false,
    showSignupModal: false,
    showLocation: false,
    showMypageSlider: false,
    term: "",
    centerY: 37.503444,
    centerX: 127.049833,
    navigatorBoolean: false,
    address: ""
  };

  toggleFilterModal = () => {
    this.setState({
      showFilterModal: !this.state.showFilterModal
    });
  };
  toggleLocation = () => {
    this.setState({
      showLocation: !this.state.showLocation
    });
  };
  handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { term } = this.state;
    console.log(`term: `, term);
  };

  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    this.setState({ term: value });
  };
  render() {
    const {
      error,
      loading,
      isLoggedIn,
      showLoginModal,
      showFilterModal,
      showSignupModal,
      showLocation,
      showMypageSlider,
      term,
      centerX,
      centerY,
      navigatorBoolean
    } = this.state;
    return (
      <HomePresenter
        error={error}
        loading={loading}
        toggleFilterModal={this.toggleFilterModal}
        toggleLocation={this.toggleLocation}
        showLocation={showLocation}
        centerY={centerY}
        centerX={centerX}
        navigatorBoolean={navigatorBoolean}
        address={term}
        handleSearchSubmit={this.handleSearchSubmit}
        term={term}
        updateTerm={this.updateTerm}
      />
    );
  }
}
