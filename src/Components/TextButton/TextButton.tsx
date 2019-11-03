import React from "react";
import styled from "styled-components";

const Textbtn = styled.a`
  display: block;
  text-align: right;
  color: #999;
  text-decoration: underline;
  font-size: 13px;
  margin-bottom: 10px;
`;

interface IProps {
  href: string;
  text: string;
}

const TextButton: React.SFC<IProps> = ({ href, text }) => (
  <Textbtn href={href}>{text}</Textbtn>
);

export default TextButton;
