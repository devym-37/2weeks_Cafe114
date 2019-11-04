import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Input from "../../Components/Input";
import MainButton from "../../Components/MainButton";
import TextButton from "../../Components/TextButton";

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

const SignupPresenter: React.SFC = () => <Dimmed></Dimmed>;

export default SignupPresenter;
