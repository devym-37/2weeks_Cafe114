import React from "react";
import styled from "styled-components";
import errorImage from "../assets/Error-Background-Img.png";
import { Link } from "react-router-dom";
// "%s%/Error-Background-Img.png"
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${errorImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 28px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 1;
`;

const TitleContainer = styled.div`
  width: 580px;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 430px;
  display: flex;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  width: 430px;
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  color: white;
  z-index: 2;
  margin-bottom: 24px;
`;

const SubTitle = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.6);
  z-index: 2;
  line-height: 1.4;
  margin-bottom: 30px;
`;

const Button = styled.div`
  width: 285px;
  height: 100px;
  background-color: white;
  color: #666666;
  font-weight: 800;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  text-indent: 0px;
  line-height: 1.4;
  letter-spacing: 0;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  border: 1px solid #cecece;
  text-shadow: #000000;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #e9e9e9;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075), -1px 1px 1px rgba(0, 0, 0, 0.03),
    1px 1px 1px rgba(0, 0, 0, 0.03);
  z-index: 4;
`;

export default () => (
  <Container>
    <TitleContainer>
      <Title>앗!</Title>
    </TitleContainer>
    <TextContainer>
      <SubTitle>
        일시적인 오류가 발생했어요. <br />
        잠시 후 다시 시도해주세요.
      </SubTitle>
    </TextContainer>
    <ButtonContainer>
      {" "}
      <Link to="/">
        <Button>홈으로 돌아가기</Button>
      </Link>
    </ButtonContainer>
  </Container>
);
