import React from "react";
import styled from "styled-components";
import BtnHome from "../Components/btn-home";

const SearchGroup = styled.fieldset`
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
`;

const TextInput = styled.input`
  all: unset;
  /* font-size: 16px; */
  box-sizing: border-box;
  padding: 10px 70px 10px 48px;
  margin: 0;
  width: 100%;
  height: 51px;
  text-shadow: "#000000";
  /* border: solid 1px black; */
  background-color: "#ffffff";
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  display: inline-block;
  cursor: text;
  font: 400 16px system-ui;
  border-radius: ${props => props.theme.borderRadius};
`;

const FormPresenter = styled.form``;

interface IInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IFormProps {
  onSubmit: (event: React.FormEvent) => void;
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) => {
  return (
    <>
      <BtnHome />
      <TextInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="장소, 지하철, 주소 검색"
        // data-ga-event="search,input"
      />
    </>
  );
};

export const Form: React.FC<IFormProps> = ({ children, onSubmit }) => {
  return <FormPresenter onSubmit={onSubmit}>{children}</FormPresenter>;
};
