import React, { Component } from "react";
import styled from "styled-components";
import { tsPropertySignature } from "@babel/types";

const CheckBoxSelect = styled.a`
  border: 0;
  width: 17px;
  height: 17px;
  position: relative;
  border-radius: 8.5px;
  vertical-align: middle;
  margin-right: 5px;
  -webkit-appearance: none;
  text-shadow: 0 0 0 #000;
  background-color: transparent;
`;

const Checkbox_1 = styled.input`
   position: absolute; // take it out of document flow
  opacity: 0; // hide it
  cursor:pointer;

  & label {
    position: relative;
    cursor: pointer;
    padding: 0;
    /* margin-top: 5px; */
  }

  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-bottom;
    width: 20px;
    height: 20px;
    background: white;
    top: 60%;
  width: 16px;
  height: 16px;
  
  border: 1px solid ${props => props.theme.colors.lightGrey};
  text-align: center;
  }

  /* // Box focus
  &:focus + label:before {
    box-shadow: ${props => props.theme.colors.disabled};
  } */

  
  &:checked + label:before {
    background: ${props => props.theme.colors.main};
  }
  
  
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 12px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white; 
    transform: rotate(45deg); 
  }

`;

const CheckBoxLabel = styled.label`
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1.3;
`;

const CheckBoxContainer = styled.div`
  line-height: 1.3;
  margin-top: 10px;
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
`;
const Highlight = styled.span`
  margin-left: 5px;
  color: ${props => props.theme.colors.main};
`;

interface IProps {
  name: string;
  value: string;
  text: string;
  highlight?: string;
  onClick: any;
  checked: boolean;
}
const CheckBoxPresenter: React.SFC<IProps> = ({
  name,
  value,
  onClick,
  text,
  highlight = "",
  checked
}) => (
  <CheckBoxContainer>
    <CheckBoxSelect onClick={onClick}>
      <Checkbox_1
        readOnly
        id={name}
        type="checkbox"
        checked={checked}
        name={name}
        value={value}
      />
      <CheckBoxLabel htmlFor={name} onClick={onClick}>
        {text} <Highlight>{highlight}</Highlight>
      </CheckBoxLabel>
    </CheckBoxSelect>
  </CheckBoxContainer>
);

export default CheckBoxPresenter;
