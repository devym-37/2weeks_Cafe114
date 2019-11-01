import React from "react";
import styled from "styled-components";
import BtnHome from "../Components/btn-home";

const SearchGroup = styled.fieldset`
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  min-inline-size: min-content;
`;
const InputContainer = styled.div`
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  position: absolute;
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
  z-index: 2;
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

const Legend = styled.legend`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  font-size: 0;
  line-height: 0;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  display: block;
  padding-inline-start: 2px;
  padding-inline-end: 2px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

const TextInput = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 70px 10px 48px;
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
  text-align: center;
  align-items: flex-start;
  box-sizing: border-box;
  position: absolute;
  top: 18px;
  left: 267px;
  display: inline-block;
`;

const RealtimeContainer = styled.div`
  position: relative;
  height: 52px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: block;
`;

const SingleMode = styled.div`
  position: relative;
  height: 52px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: block;
  font-size: 16px;
`;

const RollingContainer = styled.div`
  transform: translate(0px, 0px);
  position: absolute;
  top: 0;
  left: 100px;
  right: 45px;
  height: 52px;
  margin: 0;
  padding: 0;
`;

const FormPresenter = styled.form`
  all: unset;
`;

interface IInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IFormProps {
  onSubmit: (event: React.FormEvent) => void;
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) => {
  return (
    <SearchGroup>
      <Legend>검색</Legend>
      <KewordGroup>
        <InputContainer>
          <BtnHome />
          <TextInput
            type="text"
            value={value}
            onChange={onChange}
            placeholder="장소, 지하철, 주소 검색"
            // data-ga-event="search,input"
          />
          <Button type="submit">검색하기</Button>
        </InputContainer>
        {/* <Divider />
        <RealtimeContainer>
          <SingleMode>
            실시간 제보
            <RollingContainer>하이</RollingContainer>
          </SingleMode>
        </RealtimeContainer> */}
      </KewordGroup>
    </SearchGroup>
  );
};

export const Form: React.FC<IFormProps> = ({ children, onSubmit }) => {
  return <FormPresenter onSubmit={onSubmit}>{children}</FormPresenter>;
};
