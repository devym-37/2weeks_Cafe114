import React from "react";
import styled from "styled-components";

const Link = styled.a``;
const Linkbtn = styled.button<{ width: string }>`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 12px 0;
  width: ${props => props.width};
  height: 44px;
  line-height: 42px;

  background-color: ${props => props.theme.colors.main};
  color: white;
  letter-spacing: 0;
  text-decoration: none;
  text-indent: 0;

  cursor: pointer;
  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    cursor: default;
  }
`;
interface IProps {
  text: string;
  onClick: any;
  disabled: boolean;
  width?: string;
}

const ConfirmButton: React.SFC<IProps> = ({
  disabled,
  text,
  onClick,
  width = "340px"
}) => (
  <Link href="#">
    <Linkbtn disabled={!disabled} onClick={onClick} width={width}>
      {text}
    </Linkbtn>
  </Link>
);
export default ConfirmButton;
