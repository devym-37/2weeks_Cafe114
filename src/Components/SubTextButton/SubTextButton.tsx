import React from "react";
import styled from "styled-components";

const SubTextbtn = styled.a`
  text-align: right;
  color: ${props => props.color};
  margin-bottom: 10px;
  padding-left: 22px;
  font-size: 16px;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  text-decoration: none;
  letter-spacing: 0;
  text-indent: 0;
  color: #fff;
`;

interface IProps {
  href?: string;
  text: string;
  onClick?: any;
  color?: string;
  className?: string;
}

const SubTextButton: React.SFC<IProps> = ({
  className,
  onClick,
  href,
  text,
  color = "#999"
}) => (
  <SubTextbtn className={className} color={color} href={href} onClick={onClick}>
    {text}
  </SubTextbtn>
);

export default SubTextButton;
