import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import KakaoLogo from "../../assets/SocialLogin/KakaoLogo.png";
import FacebookLogo from "../../assets/SocialLogin/FacebookLogo.png";
import Cafe114Logo from "../../assets/Cafe114Symbol.png";
import Seperator from "../../Components/Seperator";
import MainButton from "../../Components/MainButton";
import TextButton from "../../Components/TextButton";
import GhostButton from "../../Components/GhostButton";
import CloseButton from "../../Components/CloseButton";

const DimmedLayerCantainer = styled.div`
  height: 993px;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 100;
  opacity: 0.3;
`;

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const DimmedLayerSceneAuth = styled.div`
  opacity: 1;
  top: 219.5px;
  width: 286px;
  left: 50%;
  margin: 20px auto;
  margin-left: -143px;
  z-index: 100;
  position: relative;
  box-sizing: border-box;
  padding: 55px 20px 20px;
  border-radius: 3px;
  padding: 55px 20px 20px;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  line-height: 1.3;
`;

const LoginGroup = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const Cafe114Login = styled.div`
  position: relative;
  display: block;
  margin-bottom: 10px;
`;

interface IProps {
  phoneNumber: string;
  email: string;
  password: string;
  toggleModal: any;
  toggleSignupModal: any;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const LoginPresenter: React.SFC<IProps> = ({
  email,
  phoneNumber,
  password,
  handleInputChange,
  handleSubmit,
  toggleModal,
  toggleSignupModal
}) => (
  //   handleInputChange
  <DimmedLayerCantainer>
    <Helmet>
      <title> Login | Cafe114 </title>
    </Helmet>
    <Dimmed />
    <Container>
      <DimmedLayerSceneAuth>
        <ContentContainer>
          <Seperator color="black" text="10초만에 로그인하기" />
          <LoginGroup>
            <MainButton
              name="Kakao"
              icon={KakaoLogo}
              href="#"
              text="카카오 계정으로 로그인"
            />
            <MainButton
              name="Facebook"
              icon={FacebookLogo}
              href="#"
              text="페이스북 계정으로 로그인"
            />
          </LoginGroup>
          <Seperator color="ligtGrey" text="직접 로그인하기" />
          <Cafe114Login>
            <Input
              placeholder={"이메일 아이디"}
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              placeholder={"비밀번호"}
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <MainButton
              onClick={handleSubmit}
              icon={Cafe114Logo}
              href="#"
              text="카페114 로그인"
            />
            <TextButton href="/auth/find" text="비밀번호 찾기" />
            <Seperator color="ligtGrey" text="카페114가 처음이세요?" />
            <GhostButton
              href="/signup"
              text="카페114 회원가입"
              onClick={toggleSignupModal}
            />
          </Cafe114Login>
        </ContentContainer>
        <CloseButton onClick={toggleModal} />
      </DimmedLayerSceneAuth>
    </Container>
  </DimmedLayerCantainer>
);

export default LoginPresenter;
