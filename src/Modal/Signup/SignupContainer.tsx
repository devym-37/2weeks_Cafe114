import React, { Component } from "react";
import SignupPresenter from "./SignupPresenter";
import { toast } from "react-toastify";
interface IProps {
  toggleSignupModal: any;
}

interface IState {
  email: string;
  name: string;
  password: string;
  password2: string;
  birth: string;
  gender: number;
  agreement_ad: number;
  agreement_all: number;
  agreement_privacy: number;
  agreement_lbs: number;
}

class SignupContainer extends Component<IProps, IState> {
  state = {
    email: "",
    name: "",
    password: "",
    password2: "",
    birth: "",
    agreement_all: 0,
    agreement_privacy: 0,
    agreement_lbs: 0,
    gender: 0,
    agreement_ad: 0
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      target: { type, name, value }
    } = event;

    console.log(type);
    const { password } = this.state;
    this.setState({ [name]: value } as any);

    if (name === "password2") {
      if (value !== password.substring(0, value.length)) {
        toast.error("비밀번호가 일치하지 않습니다", { autoClose: 1300 });
      }
    }

    if (type === "checkbox") {
      if (name === "agreement_all") {
        this.setState(prevState => ({
          agreement_all: prevState.agreement_all === 0 ? 1 : 0,
          agreement_ad: 1,
          agreement_privacy: 1,
          agreement_lbs: 1
        }));
      } else if (name === "agreement_privacy") {
        this.setState(prevState => ({
          agreement_privacy: prevState.agreement_privacy === 0 ? 1 : 0
        }));
      } else if (name === "agreement_ad") {
        this.setState(prevState => ({
          agreement_ad: prevState.agreement_ad === 0 ? 1 : 0
        }));
      } else {
        this.setState(prevState => ({
          agreement_lbs: prevState.agreement_lbs === 0 ? 1 : 0
        }));
      }
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;
  };

  handleSelectGender = (event: any) => {
    const {
      target: { value }
    } = event;
    this.setState({ gender: Number(value) });
  };
  render() {
    const { toggleSignupModal } = this.props;
    const {
      email,
      name,
      password,
      password2,
      birth,
      gender,
      agreement_ad,
      agreement_all,
      agreement_privacy,
      agreement_lbs
    } = this.state;
    console.log(gender);
    return (
      <SignupPresenter
        email={email}
        name={name}
        password={password}
        password2={password2}
        gender={gender}
        agreement_ad={agreement_ad}
        agreement_all={agreement_all}
        agreement_privacy={agreement_privacy}
        agreement_lbs={agreement_lbs}
        birth={birth}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        toggleSignupModal={toggleSignupModal}
        handleSelectGender={this.handleSelectGender}
      ></SignupPresenter>
    );
  }
}

export default SignupContainer;
