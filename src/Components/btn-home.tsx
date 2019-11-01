import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Container = styled.div``;

const HomeLink = styled(Link)``;

const LogoContainer = styled.div`
  background-image: ${logo};
  background-size: contain;
  position: absolute;
  top: 15px;
  left: 16px;
  display: inline-block;
  overflow: hidden;
  width: 21px;
  height: 17px;
  background-position: center;
  /* background-position: -239px -291px; */
  line-height: 999em;
  vertical-align: top;
`;

const HomeNew = styled.span`
  position: absolute;
  left: 36px;
  top: 11px;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 3px;
`;

const BtnHome: React.SFC = () => (
  <Container>
    <LogoContainer />
    <HomeNew />
  </Container>
);

export default BtnHome;
