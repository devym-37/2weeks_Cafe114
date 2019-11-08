import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-color: #eef0f3;
  width: 270px;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  height: 50px;
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 10px;
  margin: 0;
  padding: 0;
`;

const SubTextbtn = styled.span`
  text-align: right;
  margin-bottom: 10px;
  padding-left: 22px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  text-decoration: none;
  letter-spacing: 0;
  text-indent: 0;
  color: black;
`;

interface IProps {}

const FavoriteCafe: React.SFC<IProps> = () => (
  <Container>
    <InnerContainer>
      <SubTextbtn>like cafe</SubTextbtn>
    </InnerContainer>
  </Container>
);

export default FavoriteCafe;
