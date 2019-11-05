import React, { Component } from "react";
import styled, { AnyStyledComponent } from "styled-components";

// const Container = styled.div`
//   margin: 0;
//   padding: 0;
// `;
// const CheckBtn = styled.input.attrs({ type: "checkbox" })`
//   cursor: pointer;
//   color: #000;
//   :checked {
//   }
//   /* margin-left: 12px; */
// `;

// const Label = styled.label`
//   margin-left: 4px;
//   color: #555;
//   /* height: 10px; */
// `;

// interface IProps {
//   name: string;
//   value: string;
//   checked?: boolean;
//   onClick: any;
// }

// const CheckBox: React.SFC<IProps> = ({
//   name,
//   value,
//   onClick,
//   checked = false
// }) => (
//   <Container>
//     <CheckBtn
//       defaultChecked={checked}
//       type="checkbox"
//       name={name}
//       value={value}
//       onClick={onClick}
//     ></CheckBtn>
//     <Label>{name + "  "} </Label>
//   </Container>
// );

// export default CheckBox;

const CheckBoxSelect = styled.a`
  border: 0;
  width: 17px;
  height: 17px;
  position: relative;
  border-radius: 8.5px;
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
  -webkit-appearance: none;
  text-shadow: 0 0 0 #000;
  background-color: transparent;
`;

const Checkbox_1 = styled.input`
  width: 17px;
  height: 17px;
  position: relative;
  border-radius: 8.5px;
  border: 1px solid #bec0ff;
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
  text-shadow: 0 0 0 #000;
  background-color: transparent;
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
  onChange: any;
  text: string;
  highlight?: string;
  defaultChecked?: boolean;
}
const CheckBox: React.SFC<IProps> = ({
  name,
  value,
  onChange,
  text,
  highlight = "",
  defaultChecked = false
}) => (
  <CheckBoxContainer>
    <CheckBoxSelect>
      <Checkbox_1
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <CheckBoxLabel>
        {text} <Highlight>{highlight}</Highlight>
      </CheckBoxLabel>
    </CheckBoxSelect>
  </CheckBoxContainer>
);

export default CheckBox;
