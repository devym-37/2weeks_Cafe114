import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";
import { RouteComponentProps } from "react-router";
import { toast } from "react-toastify";

interface IState {
  countryCode: string;
  phoneNumber: string;
}
class LoginContainer extends Component<RouteComponentProps<any>, IState> {
  state = {
    countryCode: "+82",
    phoneNumber: ""
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
    const { countryCode, phoneNumber } = this.state;
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
      : toast.error("유효하지 않은 전화번호입니다", { autoClose: 1300 });
  };

  render() {
    const { countryCode, phoneNumber } = this.state;
    console.log(countryCode, phoneNumber);
    return (
      <LoginPresenter
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;
