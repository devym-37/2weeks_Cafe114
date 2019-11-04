import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
const CheckBtn = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  color: #000;
  :checked {
  }
  /* margin-left: 12px; */
`;

const Label = styled.label`
  margin-left: 4px;
  color: #555;
  /* height: 10px; */
`;

interface IProps {
  name: string;
  value: string;
  checked?: any;
  onClick: any;
}

const CheckBox: React.SFC<IProps> = ({ name, value, onClick }) => (
  <Container>
    <CheckBtn
      //   checked={checked}
      type="checkbox"
      name={name}
      value={value}
      onClick={onClick}
    ></CheckBtn>
    <Label>{name + "  "} </Label>
  </Container>
);

export default CheckBox;
