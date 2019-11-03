import React from "react";
import { SvgIcon } from "../../Components/ButtonMaker";
import styled from "styled-components";
import closeIcon from "../../assets/x-mark.png";

const CloseBtn = styled.a`
  display: block;
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 20px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

const IconContainer = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 16px;
  height: 16px;
  line-height: 999em;
  vertical-align: top;
  background-image: url(${closeIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

interface IProps {
  onClick: any;
}
const CloseButton: React.FC<IProps> = ({ onClick }) => (
  <CloseBtn onClick={onClick}>
    <IconContainer />
  </CloseBtn>
);

export default CloseButton;
