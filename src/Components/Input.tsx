import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  all: unset;
  font-size: 16px;
  width: 354px;
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
    <TextInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="장소, 지하철, 주소 검색"
      // data-ga-event="search,input"
    />
  );
};

export const Form: React.FC<IFormProps> = ({ children, onSubmit }) => {
  return <FormPresenter onSubmit={onSubmit}>{children}</FormPresenter>;
};
