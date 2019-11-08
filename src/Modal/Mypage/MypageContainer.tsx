import React, { Component } from "react";
import MypagePresenter from "./MypagePresenter";
import { serverApi } from "../../Components/API";
import { userInfo } from "os";

interface IProps {
  toggleMypageSlider: any;
  handleLogout: any;
  handleLikeCafe: any;
  userName: string;
  userEmail: string;
  showMypageLikeCafe: boolean;
}
interface IState {
  user: any;
  error: any;
}

class MypageContainer extends Component<IProps, IState> {
  state = {
    user: null,
    error: null
  };
  userGetInfo = async () => {
    try {
      const getUser = await serverApi.getUserInfo();
      console.log("getUser", getUser);
      this.setState({
        user: getUser
      });
    } catch {
      this.setState({ error: "로그아웃에 실패했습니다." });
    }
  };
  render() {
    const {
      toggleMypageSlider,
      handleLogout,
      handleLikeCafe,
      userName,
      userEmail,
      showMypageLikeCafe
    } = this.props;
    console.log("user111", this.state.user);
    return (
      <MypagePresenter
        handleLogout={handleLogout}
        toggleMypageSlider={toggleMypageSlider}
        handleLikeCafe={handleLikeCafe}
        showMypageLikeCafe={showMypageLikeCafe}
        userName={userName}
        userEmail={userEmail}
      />
    );
  }
}

export default MypageContainer;
