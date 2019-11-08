import React, { Component } from "react";
import LoginPresenter from "./LoginPresenter";
//@ts-ignore
import Kakao from "kakaojs";
import { toast } from "react-toastify";
import { serverApi } from "../../Components/API";

interface IState {
  phoneNumber: string;
  password: string;
  email: string;
  error: string;
  loading: boolean;
}

interface IProps {
  toggleModal: any;
  toggleLoggedIn: any;
  toggleSignupModal: any;
}
class LoginContainer extends Component<IProps, IState> {
  state = {
    error: "",
    phoneNumber: "",
    email: "",
    password: "",
    loading: false
  };

  handleSuccessKakaoLogin = async (response: any) => {
    try {
      this.setState({ loading: true });
      const KakaoRequest = await Kakao.API.request({
        url: "/v2/user/me",
        success: function(res: any) {
          // console.log("kakao res: ", res);
          return res;
          // const { id } = res;
          // return id;
        }
      });
      if (KakaoRequest.id !== undefined) {
        // console.log(`KakaoRequest: `, KakaoRequest);
        const {
          id,
          kakao_account: { email },
          profile: { nickname, thumbnail_image_url: image }
        } = KakaoRequest;

        const ServerRequest = await serverApi.loginkakao(
          id,
          email,
          nickname,
          image
        );
        console.log(`server: `, ServerRequest);
        if (ServerRequest) {
          this.props.toggleLoggedIn();
          toast.success("로그인이 정상적으로 완료었습니다", {
            autoClose: 1300
          });
        }
      }
    } catch {
      this.setState({ error: "서버상에 문제가 발생했습니다." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleFailureKakaoLogin = (error: any) => {
    toast.error("잘못된 카카오 로그인 정보입니다", { autoClose: 1300 });
    this.setState({ error: JSON.stringify(error) });
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

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, phoneNumber, password } = this.state;
    const { toggleLoggedIn } = this.props;
    // console.log(email, password);
    const isValid = await serverApi.login(email, password);
    // console.log(`isValid: `, isValid);
    const {
      data: { success: isSucceed }
    } = isValid;

    // console.log(`isSucceed: `, isSucceed);

    if (isSucceed) {
      toast.success("안녕하세요!", { autoClose: 1300 });
      toggleLoggedIn();
    } else {
      toast.error("로그인정보가 일치하지 않습니다", { autoClose: 1300 });
    }

    // if (phoneNumber.match(/^\d{11}$/)) {
    //   var addDash =
    //     phoneNumber.substr(0, 3) +
    //     "-" +
    //     phoneNumber.substr(3, 4) +
    //     "-" +
    //     phoneNumber.substr(7, 4);
    //   this.setState({ phoneNumber: addDash });
    // }

    // const isValid = /[0][1][0][-][0-9]{4}[-][0-9]{4}$/.test(phoneNumber);

    // isValid
    //   ? toast.success("Suup", { autoClose: 1300 })
    //   : toast.error("로그인정보가 일치하지 않습니다", { autoClose: 1300 });
  };

  render() {
    // console.log(`error: `, this.state.error);
    // console.log(`kakao: `, this.state.kakao);
    const { email, phoneNumber, password } = this.state;
    const { toggleModal, toggleSignupModal } = this.props;
    // console.log(email, password);
    return (
      <LoginPresenter
        handleFailureKakaoLogin={this.handleFailureKakaoLogin}
        handleSuccessKakaoLogin={this.handleSuccessKakaoLogin}
        password={password}
        phoneNumber={phoneNumber}
        handleInputChange={this.handleInputChange}
        toggleModal={toggleModal}
        handleSubmit={this.handleSubmit}
        email={email}
        toggleSignupModal={toggleSignupModal}
      />
    );
  }
}

export default LoginContainer;
