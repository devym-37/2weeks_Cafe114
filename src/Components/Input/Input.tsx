import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  margin-top: 0;
  display: block;
  box-sizing: border-box;
  margin: 10px 0 0;
  padding: 0 15px;
  width: 100%;
  border: 1px solid #c8c6e6;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  font-size: 15px;
  border-radius: 3px;
  height: 44px;
  -webkit-appearance: none;
  text-shadow: 0 0 0 #000;
  background-color: transparent;
  &::placeholder {
    color: ${props => props.theme.colors.lightGrey};
    font-weight: 400;
  }
  &:focus {
    border-color: ${props => props.theme.colors.blue};
    outline: none;
  }
`;

interface IProps {
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  name: string;
  onChange: any;
}
const Input: React.SFC<IProps> = ({
  placeholder,
  type = "text",
  required = true,
  value,
  name,
  onChange
}) => (
  <TextInput
    type={type}
    name={name}
    required={required}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
