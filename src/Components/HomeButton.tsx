import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Container = styled.div``;

const HomeLink = styled.a``;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 18px;
  left: 15px;
  display: inline-block;
  overflow: hidden;
  width: 80px;
  height: 18px;
  background-position: center;
  /* background-position: -239px -291px; */
  line-height: 999em;
  vertical-align: top;
`;

const HomeNew = styled.span`
  position: absolute;
  left: 100px;
  top: 15px;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 3px;
`;

const BtnHome: React.SFC = () => (
  <Container>
    <HomeLink href="/">
      <Logo />
    </HomeLink>

    <HomeNew />
  </Container>
);

export default BtnHome;
