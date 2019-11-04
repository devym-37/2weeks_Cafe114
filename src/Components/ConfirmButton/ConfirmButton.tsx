import React from "react";
import styled from "styled-components";

const Linkbtn = styled.a`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 12px 0;
  height: 44px;
  line-height: 42px;
  background-color: ${props => props.theme.colors.main};
  color: white;
  letter-spacing: 0;
  text-decoration: none;
  text-indent: 0;
  cursor: pointer;
`;

interface IProps {
  text: string;
  onClick: any;
}

const ConfirmButton: React.SFC<IProps> = ({ text, onClick }) => (
  <Linkbtn onClick={onClick}>{text}</Linkbtn>
);
export default ConfirmButton;
