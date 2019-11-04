import React, { Component } from "react";
import SignupPresenter from "./SignupPresenter";

interface IProps {
  toggleSignupModal: any;
}

interface IState {
  email: string;
  password: string;
  password2: string;
}

class SignupContainer extends Component<IProps, IState> {
  render() {
    const { toggleSignupModal } = this.props;

    return <SignupPresenter></SignupPresenter>;
  }
}

export default SignupContainer;
