import React from "react";
import { SvgIcon } from "../../Components/ButtonMaker";
import styled from "styled-components";
import closeIcon from "../../assets/x-mark.png";
import closeIconWhite from "../../assets/x-mark-white.png";
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

const IconContainer = styled.span<{ color: string }>`
  display: inline-block;
  overflow: hidden;
  width: 16px;
  height: 16px;
  line-height: 999em;
  vertical-align: top;
  background-image: ${props =>
    props.color === "black" ? `url(${closeIcon})` : `url(${closeIconWhite})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

interface IProps {
  onClick: any;
  color?: string;
  className?: string;
}
const CloseButton: React.FC<IProps> = ({
  className,
  onClick,
  color = "black"
}) => (
  <CloseBtn className={className} onClick={onClick}>
    <IconContainer color={color} />
  </CloseBtn>
);

export default CloseButton;
