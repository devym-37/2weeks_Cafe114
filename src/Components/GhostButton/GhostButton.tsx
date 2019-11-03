import React from "react";
import styled from "styled-components";

const Ghostbtn = styled.a`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075), -1px 1px 1px rgba(0, 0, 0, 0.03),
    1px 1px 1px rgba(0, 0, 0, 0.03);
  text-align: center;
  font-size: 15px;
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 12px 0;
  height: 44px;
  line-height: 42px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: ${props => props.theme.colors.main};
    border: 1px solid ${props => props.theme.colors.main};
  }
  letter-spacing: 0;
  text-decoration: none;
  text-indent: 0;
  cursor: pointer;
`;

interface IProps {
  text: string;
  href: string;
}

const GhostButton: React.SFC<IProps> = ({ href, text }) => (
  <Ghostbtn href={href}>{text}</Ghostbtn>
);
export default GhostButton;
