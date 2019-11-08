import React from "react";
import styled from "styled-components";

const Textbtn = styled.a`
  display: block;
  text-align: right;
  color: ${props => props.color};
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 10px;
`;

interface IProps {
  href?: string;
  text: string;
  onClick?: any;
  color?: string;
  className?: string;
}

const TextButton: React.SFC<IProps> = ({
  className,
  onClick,
  href,
  text,
  color = "#999"
}) => (
  <Textbtn className={className} color={color} href={href} onClick={onClick}>
    {text}
  </Textbtn>
);

export default TextButton;
