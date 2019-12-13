import React, { Component } from "react";
import SignupPresenter from "./SignupPresenter";
import { toast } from "react-toastify";
import { serverApi } from "../../Components/API";
interface IProps {
  toggleSignupModal: any;
}

interface IState {
  email: string;
  name: string;
  password: string;
  password2: string;
  birth: string;
  gender: string;
  agreement_ad: boolean;
  agreement_all: boolean;
  agreement_privacy: boolean;
  agreement_lbs: boolean;
}

class SignupContainer extends Component<IProps, IState> {
  state = {
    email: "",
    name: "",
    password: "",
    password2: "",
    birth: "",
    agreement_all: false,
    agreement_privacy: false,
    agreement_lbs: false,
    gender: "",
    agreement_ad: false
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
        toast.error("비밀번호가 일치하지 않습니다", { autoClose: 2000 });
      }
    }
  };

  handleCheck = (event: any) => {
    const {
      target: { name }
    } = event;
    const { agreement_privacy, agreement_lbs, agreement_ad } = this.state;
    if (name === "agreement_all") {
      this.setState(prevState => ({
        agreement_all: !prevState.agreement_all,
        agreement_privacy: !prevState.agreement_all,
        agreement_lbs: !prevState.agreement_all,
        agreement_ad: !prevState.agreement_all
      }));
    } else if (name === "agreement_privacy") {
      this.setState({
        agreement_privacy: !this.state.agreement_privacy,
        agreement_all:
          !this.state.agreement_privacy &&
          this.state.agreement_lbs &&
          this.state.agreement_ad
      });
    } else if (name === "agreement_lbs") {
      this.setState({
        agreement_lbs: !this.state.agreement_lbs,
        agreement_all:
          this.state.agreement_privacy &&
          !this.state.agreement_lbs &&
          this.state.agreement_ad
      });
    } else if (name === "agreement_ad") {
      this.setState({
        agreement_ad: !this.state.agreement_ad,
        agreement_all:
          this.state.agreement_privacy &&
          this.state.agreement_lbs &&
          !this.state.agreement_ad
      });
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
          autoClose: 2000
        }
      );
    } else {
      return true;
    }
  };

  checkName = (name: string) => {
    const isCorrectNameReg = name.match(
      /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/
    );
    // console.log(`name: `, typeof name);
    // console.log(`isCorrectNameReg: `, isCorrectNameReg);
    if (!isCorrectNameReg) {
      toast.error("성함은 한 글자 이상 정확하게 입력해주세요(예: 홍길동)");
      return false;
    } else {
      return true;
    }
  };

  checkBirth = (birth: string) => {
    let currentYear = new Date().getFullYear();
    if (!birth.match(/^\d{4}$/) || currentYear - Number(birth) < 6) {
      toast.error("태어난 연도는 4자리 숫자로 정확하게 입력해주세요(예:1999)", {
        autoClose: 2000
      });
      return false;
    } else {
      return true;
    }
  };

  checkPassword = (password: string) => {
    const checkPasswordReg = password.match(/^[a-zA-Z0-9]{6,15}$/);
    if (!checkPasswordReg) {
      toast.error(
        "비밀번호는 숫자와 영문자 조합으로 6자리 이상 12자리 이하로 입력해주세요",
        {
          autoClose: 2000
        }
      );
      return false;
    } else {
      return true;
    }
  };

  checkAgreement = (agreement_privacy: number, agreement_lbs: number) => {
    if (agreement_privacy === 0 || agreement_privacy === 0) {
      toast.error("동", {
        autoClose: 2000
      });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
    console.log(this.state);
    const isCorrectEmail = this.checkEmailReg(email);
    console.log(`isCorrectEmail:`, isCorrectEmail);
    const isCorrectName = this.checkName(name);
    console.log(`isCorrectName:`, isCorrectName);
    const isCorrectPassword = this.checkPassword(password);
    console.log(`isCorrectPassword:`, isCorrectPassword);
    const isCorrectBirth = this.checkBirth(birth);
    console.log("isCorrectBirth: ", isCorrectBirth);

    if (
      isCorrectEmail &&
      isCorrectName &&
      isCorrectPassword &&
      isCorrectBirth
    ) {
      const validateEmail = await serverApi.validateEmail(email);
      // console.log(validateEmail);
      const {
        data: { success }
      } = validateEmail;

      if (success) {
        const signup = await serverApi.signup(
          email,
          password,
          name,
          Number(gender)
        );
        toast.success("회원가입이 완료되었습니다", { autoClose: 1300 });
        this.props.toggleSignupModal();
      } else {
        toast.error("이미 가입된 이메일주소 입니다");
      }
      //   console.log("success:", success);
    }

    // if(isCorrectPasword){}
    //     }

    // const isCorrectBirth= this.checkBirth(birth);
    // const isCorrectEmail = this.checkEmailReg(email);
    // const isCorrectName = this.checkName(name);
  };

  handleSelectGender = (event: any) => {
    event.persist();
    const {
      target: { value }
    } = event;
    this.setState({ gender: value });
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
    console.log(
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
    );
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
        handleCheck={this.handleCheck}
      ></SignupPresenter>
    );
  }
}

export default SignupContainer;
