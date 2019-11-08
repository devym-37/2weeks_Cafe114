import React, { Component } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  position: fixed;
  top: 12px;
  left: 11px;
  width: 354px;
  height: 56px;
  border-radius: 3px;
  border: 1px solid #cecece;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #e9e9e9;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075), -1px 1px 1px rgba(0, 0, 0, 0.03),
    1px 1px 1px rgba(0, 0, 0, 0.03);
  z-index: 3;
`;
const Divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: #c0c0c0;
`;
const KewordGroup = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;

const TextInput = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 5px 40px 10px 110px;
  height: 48px;
  font-size: 16px;
  background-color: #ffffff;
  margin: 0;
  -webkit-appearance: none;
  -webkit-rtl-ordering: logical;
  text-rendering: auto;
  text-align: start;
  text-shadow: #000000;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  display: inline-block;
  line-height: 1.3;
  font-weight: normal;
  letter-spacing: 0;
  cursor: text;
`;

const Button = styled.button`
  border: 0 none;
  font-size: 100%;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  text-rendering: auto;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: right;
  align-items: flex-start;
  box-sizing: border-box;
  position: absolute;
  top: 19px;
  left: 320px;
  display: inline-block;
`;

const FormPresenter = styled.form`
  all: unset;
`;

interface IInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export const CommentInput: React.FC<IInputProps> = ({
  value,
  onChange,
  onSubmit
}) => {
  return (
    <FormPresenter onSubmit={onSubmit}>
      <KewordGroup>
        <InputContainer>
          <TextInput
            type="text"
            value={value}
            onChange={onChange}
            placeholder="카페 실시간 자리상황 이야기하기"
          />
          <Button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#666666"
            >
              <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
            </svg>
          </Button>
        </InputContainer>
      </KewordGroup>
    </FormPresenter>
  );
};

export default CommentInput;
