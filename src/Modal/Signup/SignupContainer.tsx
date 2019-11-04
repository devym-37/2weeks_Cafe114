import React, { Component } from "react";
import SignupPresenter from "./SignupPresenter";
import { toast } from "react-toastify";
interface IProps {
  toggleSignupModal: any;
}

interface IState {
  email: string;
  password: string;
  password2: string;
  birth: string;
  gender: string;
  agreement_ad: number;
}

class SignupContainer extends Component<IProps, IState> {
  state = {
    email: "",
    password: "",
    password2: "",
    birth: "",
    gender: "",
    agreement_ad: 0
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      target: { name, value }
    } = event;

    const { password } = this.state;
    this.setState({ [name]: value } as any);

    if (name === "password2") {
      if (value !== password.substring(0, value.length)) {
        toast.error("비밀번호가 일치하지 않습니다", { autoClose: 1300 });
      } else {
        toast.success("회원가입이 완료되었습니다", { autoClose: 1300 });
      }
    }
  };

  hadleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;

    // const is = s;
  };
  render() {
    const { toggleSignupModal } = this.props;
    const {
      email,
      password,
      password2,
      birth,
      gender,
      agreement_ad
    } = this.state;
    return <SignupPresenter></SignupPresenter>;
  }
}

export default SignupContainer;
