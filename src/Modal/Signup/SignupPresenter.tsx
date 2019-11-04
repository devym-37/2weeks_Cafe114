import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Input from "../../Components/Input";
import ConfirmButton from "../../Components/ConfirmButton";
import TextButton from "../../Components/TextButton";
import ModalContainer from "../../Components/ModalLayout";
import Seperator from "../../Components/Seperator";

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

const SelectButton = styled.button`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin: 5px 0 0;
  padding: 10px 22px;
  width: 70px;
  border: 1px solid #e7e7e7;
  height: 44px;
  font-size: 15px;
  color: #717485;
  -webkit-appearance: button;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;
  line-height: 1.3;
  font-weight: normal;
  letter-spacing: 0;
  border-radius: 3px;
  &:focus {
    /* border-color: ${props => props.theme.colors.main}; */
    border: 1px solid ${props => props.theme.colors.main};
    outline: none;
  }
`;

const Agreement = styled.div`
  margin-top: 20px;
  padding: 0;
`;

const CheckBoxContainer = styled.a`
  line-height: 1.3;
  margin-top: 10px;
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
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
}
`;
interface IProps {
  email: string;
  name: string;
  password: string;
  password2: string;
  gender: number;
  agreement_all: number;
  agreement_privacy: number;
  agreement_lbs: number;
  agreement_ad: number;
  birth: string;
  toggleSignupModal: any;
  handleInputChange: any;
  handleSubmit: any;
  handleSelectGender: any;
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
  handleSelectGender
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
      placeholder={"비밀번호(4자리 이상)"}
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
        <SelectButton value="0" onClick={handleSelectGender}>
          남자
        </SelectButton>
        <SelectButton value="1" onClick={handleSelectGender}>
          여자
        </SelectButton>
      </ButtonGroup>
    </LabelContainer>
    <Agreement>
      <Checkbox_1
        type="checkbox"
        name="agreement_all"
        value={agreement_all}
        onChange={handleInputChange}
      />
      <CheckBoxLabel>전체 동의</CheckBoxLabel>
    </Agreement>
    <ConfirmButton text="확인" onClick={handleSubmit} />
  </ModalContainer>
);

export default SignupPresenter;
