import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Input from "../../Components/Input";
import ConfirmButton from "../../Components/ConfirmButton";
import TextButton from "../../Components/TextButton";
import ModalContainer from "../../Components/ModalLayout";
import Seperator from "../../Components/Seperator";
import CheckBox from "../../Components/CheckBox";

const Label = styled.label`
  cursor: default;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0;
  font-weight: normal;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  padding: 9px 0px;
  height: 44px;
`;

const Highlight = styled.span`
  margin-left: 5px;
  color: ${props => props.theme.colors.main};
`;

const LabelContainer = styled.span`
  display: flex;
  align-content: center;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: inline;
  position: relative;
  left: 10.5%;
  top: 50%;
  margin: 4px 0;
  padding: 0;
  line-height: 1.3;
  font-size: 16px;
  font-weight: normal;
  color: #000;
  letter-spacing: 0;
`;

const SelectButton = styled.button<{ selected: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin: 5px 0 0;
  padding: 10px 22px;
  width: 70px;
  border:  1px solid ;
  border-color: ${props =>
    props.selected ? props.theme.colors.main : "#e7e7e7"};
  height: 44px;
  font-size: 15px;
  color: ${props => (props.selected ? props.theme.colors.main : "#999999")};
  -webkit-appearance: button;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;
  line-height: 1.3;
  font-weight: normal;
  letter-spacing: 0;
  border-radius: 3px;
  
  &:focus {
    border: 1px solid ${props => props.theme.colors.main};
    outline: none;
  }
  /* &:checked {
    border: 1px solid ${props => props.theme.colors.main};
    outline: none;
  } */
`;

const Agreement = styled.div`
  margin-top: 20px;
  padding: 0;
`;

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

const CheckBoxGroup = styled.div`
  margin-top: 10px;
  padding: 15px 15px 15px;
  border: 1px solid #c8c6e6;
`;

const CheckBoxContainer = styled.div`
  line-height: 1.3;
  margin-top: 10px;
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
`;

interface IProps {
  email: string;
  name: string;
  password: string;
  password2: string;
  gender: string;
  agreement_all: boolean;
  agreement_privacy: boolean;
  agreement_lbs: boolean;
  agreement_ad: boolean;
  birth: string;
  toggleSignupModal: any;
  handleInputChange: any;
  handleSubmit: any;
  handleSelectGender: any;
  handleCheck: any;
}
const SignupPresenter: React.SFC<IProps> = ({
  email,
  name,
  password,
  password2,
  gender,
  agreement_all,
  agreement_privacy,
  agreement_lbs,
  agreement_ad,
  birth,
  toggleSignupModal,
  handleInputChange,
  handleSubmit,
  handleSelectGender,
  handleCheck
}) => (
  <ModalContainer size="medium" onClick={toggleSignupModal}>
    <Seperator text="회원가입" />
    <Input
      type="email"
      placeholder={"아이디(이메일)"}
      name="email"
      value={email}
      onChange={handleInputChange}
    />
    <Input
      type="name"
      placeholder={"성함(실명)"}
      name="name"
      value={name}
      onChange={handleInputChange}
    />
    <Input
      type="password"
      placeholder={"비밀번호(6자리 이상)"}
      name="password"
      value={password}
      onChange={handleInputChange}
    />
    <Input
      type="password"
      placeholder={"확인을 위해 비밀번호를 한번 더 입력해주세요"}
      name="password2"
      value={password2}
      onChange={handleInputChange}
    />
    <LabelContainer>
      <Input
        type="text"
        required={false}
        width="80px"
        placeholder={"****"}
        name="birth"
        value={birth}
        onChange={handleInputChange}
      />
      <Label>
        년생<Highlight>(선택)</Highlight>
      </Label>
      <ButtonGroup>
        {gender === "0" && (
          <>
            <SelectButton
              value="0"
              onClick={handleSelectGender}
              selected={true}
            >
              남자
            </SelectButton>
            <SelectButton
              value="1"
              onClick={handleSelectGender}
              selected={false}
            >
              여자
            </SelectButton>
          </>
        )}
        {gender === "1" && (
          <>
            <SelectButton
              value="0"
              onClick={handleSelectGender}
              selected={false}
            >
              남자
            </SelectButton>
            <SelectButton
              value="1"
              onClick={handleSelectGender}
              selected={true}
            >
              여자
            </SelectButton>
          </>
        )}
        {gender === "" && (
          <>
            <SelectButton
              value="0"
              onClick={handleSelectGender}
              selected={false}
            >
              남자
            </SelectButton>
            <SelectButton
              value="1"
              onClick={handleSelectGender}
              selected={false}
            >
              여자
            </SelectButton>
          </>
        )}
      </ButtonGroup>
    </LabelContainer>
    <Agreement>
      <CheckBox
        name="agreement_all"
        value="agreement_all"
        text="전체 동의"
        checked={agreement_all}
        onClick={handleCheck}
      />
    </Agreement>
    <CheckBoxGroup>
      <CheckBox
        name="agreement_privacy"
        value="agreement_privacy"
        text="개인정보 수집 및 이용 동의"
        highlight="(필수)"
        checked={agreement_privacy}
        onClick={handleCheck}
      />
      <CheckBox
        name="agreement_lbs"
        value="agreement_lbs"
        text="위치기반서비스 이용약관 동의"
        highlight="(필수)"
        checked={agreement_lbs}
        onClick={handleCheck}
      />

      <CheckBox
        name="agreement_ad"
        value="agreement_ad"
        text="마케팅 정보 수신 동의"
        highlight="(선택)"
        checked={agreement_ad}
        onClick={handleCheck}
      />
    </CheckBoxGroup>
    <ConfirmButton
      disabled={[
        agreement_privacy,
        agreement_lbs,
        name,
        email,
        password,
        password2,
        gender
      ].every(n => Boolean(n))}
      text="확인"
      onClick={handleSubmit}
    />
  </ModalContainer>
);

export default SignupPresenter;
