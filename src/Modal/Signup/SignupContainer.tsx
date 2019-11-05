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

  checkEmailReg = (email: string) => {
    const isCorrectEmail = email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!isCorrectEmail) {
      toast.error(
        "이메일은 이메일 주소 형식에 맞게 정확하게 입력해주세요(예: cafe114@gmail.com)",
        {
          autoClose: 1300
        }
      );
    } else {
      return true;
    }
  };

  checkName = (name: string) => {
    const isCorrectNameReg = name.match(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    );
    if (!isCorrectNameReg) {
      toast.error("성함은 한 글자 이상 정확하게 입력해주세요(예: 홍길동)");
    }
  };

  checkBirth = (birth: string) => {
    let currentYear = new Date().getFullYear();
    if (!birth.match(/^\d{4}$/) || currentYear - Number(birth) < 6) {
      toast.error("태어난 연도는 4자리 숫자로 정확하게 입력해주세요(예:1999)", {
        autoClose: 1300
      });
      return false;
    } else {
      return true;
    }
  };

  checkPassword = (password: string) => {
    // const checkPasswordReg = password.match(
    //   /^(?.*[a-z])(?.*[A-Z])(?.*\d)(?.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$)/
    // );
    // if (!checkPasswordReg) {
    //   toast.error(
    //     "비밀번호는 4자리 이상 12자리 이하로 입력해주세요(특수문자 가능)",
    //     {
    //       autoClose: 1300
    //     }
    //   );
    //   return false;
    // } else {
    //   return true;
    // }
  };

  checkAgreement = (agreement_privacy: number, agreement_lbs: number) => {
    if (agreement_privacy === 0 || agreement_privacy === 0) {
      toast.error("동", {
        autoClose: 1300
      });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const {
      email,
      password,
      name,
      password2,
      birth,
      gender,
      agreement_ad,
      agreement_all,
      agreement_privacy,
      agreement_lbs
    } = this.state;

    const isCorrectBirth = this.checkBirth(birth);
    const isCorrectEmail = this.checkEmailReg(email);
    const isCorrectName = this.checkName(name);
  };

  handleSelectGender = (event: any) => {
    event.preventDefault();
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
