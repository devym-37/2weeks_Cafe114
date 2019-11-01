import React from "react";
import styled from "styled-components";
import errorImage from "../assets/Error-Background-Img.png";
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
  margin-top: 20px;
`;

const Title = styled.h1`
  color: white;
  z-index: 2;
`;

export default () => (
  <Container>
    <Title>앗!</Title>
  </Container>
);
