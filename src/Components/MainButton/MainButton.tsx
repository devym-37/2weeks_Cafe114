import React from "react";
import styled from "styled-components";

const Linkbtn = styled.a<{ name: string }>`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 12px 0;
  padding-left: 48px;
  height: 44px;
  line-height: 42px;
  background-color: ${props =>
    props.name === "Kakao"
      ? props.theme.colors.kakaoYellow
      : props.name === "Facebook"
      ? props.theme.colors.facebook
      : props.theme.colors.main};
  color: ${props =>
    props.name === "Kakao"
      ? props.theme.colors.kakaoBrown
      : props.theme.colors.white};
  letter-spacing: 0;
  text-decoration: none;
  text-indent: 0;
  cursor: pointer;
`;

const Divider = styled.span<{ name: string }>`
  background-color: ${props =>
    props.name === "Kakao"
      ? props.theme.colors.black
      : props.theme.colors.white};
  position: absolute;
  left: 54px;
  top: 50%;
  margin-top: -12px;
  width: 1px;
  height: 25px;
  content: "";
  opacity: 0.15;
`;

const Icon = styled.div<{ icon: any }>`
  left: 16px;
  top: 50%;
  position: absolute;
  margin-top: -10px;
  display: inline-block;
  overflow: hidden;
  width: 23px;
  height: 20px;
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  line-height: 999em;
  vertical-align: top;
`;

interface IProps {
  name?: string;
  text: string;
  href: string;
  icon: any;
  onClick?: any;
}

const MainButton: React.SFC<IProps> = ({
  icon,
  name = "Cafe114",
  href,
  text,
  onClick
}) => (
  <Linkbtn name={name} href={href} onClick={onClick}>
    <Icon icon={icon} />
    <Divider name={name} />
    {text}
  </Linkbtn>
);
export default MainButton;
