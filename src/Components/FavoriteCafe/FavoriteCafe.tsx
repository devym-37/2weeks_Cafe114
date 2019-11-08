import React from "react";
import styled from "styled-components";
import likeImg from "../../assets/likeicon.png";

const Container = styled.div`
  position: relative;
  background-color: #eef0f3;
  width: 365px;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  height: 50px;
`;

const InnerContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const SubTextbtn = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  position: relative;
  text-align: right;
  top: 11px;
  left: 10px;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  font-weight: 400;
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

const Like = styled.span`
  position: absolute;
  right: 5px;
`;

interface IProps {
  cafeName: string;
}

const FavoriteCafe: React.SFC<IProps> = ({ cafeName }) => {
  return (
    <Container>
      <InnerContainer>
        <SubTextbtn>{cafeName}</SubTextbtn>
        <Like>
          <img src={likeImg} width="40" height="50" alt="" />
        </Like>
      </InnerContainer>
    </Container>
  );
};

export default FavoriteCafe;
