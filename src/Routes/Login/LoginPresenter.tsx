import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import BackArrow from "../../Components/BackArrow";
import Input from "../../Components/Input";
import countries from "../../country";

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;

const CountrySelect = styled.select`
  font-size: 20px;
  color: "#2c3e50";
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  border: 0;
  font-family: "Maven Pro";
  margin-bottom: 20px;
  width: 90%;
`;

const CountryOption = styled.option``;

const Form = styled.form``;

const Button = styled.button`
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;

interface IProps {
  countryCode: string;
  phoneNumber: string;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const LoginPresenter: React.SFC<IProps> = ({
  countryCode,
  phoneNumber,
  handleInputChange,
  handleSubmit
}) => (
  //   handleInputChange
  <Container>
    <Helmet>
      <title> Login | Cafe114 </title>
    </Helmet>
    <BackArrowExtended backTo={"/"} />
    <Title>휴대폰 번호를 입력해주세요</Title>
    <CountrySelect
      name={"countryCode"}
      value={countryCode}
      onChange={handleInputChange}
    >
      {countries.map((country, index) => (
        <CountryOption key={index} value={country.dial_code}>
          {country.flag} {country.name} ({country.dial_code})
        </CountryOption>
      ))}
    </CountrySelect>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder={"010 1234 5678"}
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleInputChange}
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </Button>
    </Form>
  </Container>
);

export default LoginPresenter;
