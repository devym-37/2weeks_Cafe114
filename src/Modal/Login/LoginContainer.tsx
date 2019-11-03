import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";
import { RouteComponentProps } from "react-router";
import { toast } from "react-toastify";

interface IState {
  phoneNumber: string;
  password: string;
  email: string;
}

interface IProps {
  toggleModal: any;
}
class LoginContainer extends Component<IProps, IState> {
  state = {
    phoneNumber: "",
    email: "",
    password: ""
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      target: { name, value }
    } = event;

    this.setState({ [name]: value } as any);

    if (
      (name === "phoneNumber" && value.match(/^\d{3}$/)) ||
      value.match(/^\d{3}[-]\d{4}$/)
    ) {
      this.setState(prevState => ({
        phoneNumber: prevState.phoneNumber + "-"
      }));
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, phoneNumber } = this.state;
    if (phoneNumber.match(/^\d{11}$/)) {
      var addDash =
        phoneNumber.substr(0, 3) +
        "-" +
        phoneNumber.substr(3, 4) +
        "-" +
        phoneNumber.substr(7, 4);
      this.setState({ phoneNumber: addDash });
    }

    const isValid = /[0][1][0][-][0-9]{4}[-][0-9]{4}$/.test(phoneNumber);
    console.log(`isValid: `, isValid);
    isValid
      ? toast.success("Suup", { autoClose: 1300 })
      : toast.error("로그인정보가 일치하지 않습니다", { autoClose: 1300 });
  };

  render() {
    const { email, phoneNumber, password } = this.state;
    const { toggleModal } = this.props;
    console.log(email, phoneNumber);
    return (
      <LoginPresenter
        password={password}
        phoneNumber={phoneNumber}
        handleInputChange={this.handleInputChange}
        toggleModal={toggleModal}
        handleSubmit={this.handleSubmit}
        email={email}
      />
    );
  }
}

export default LoginContainer;
