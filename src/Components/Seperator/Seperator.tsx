import React from "react";
import styled from "styled-components";

interface IProps {
  color: string;
  text: string;
  className?: string;
}

const TextContainer = styled.div<{ color: string }>`
  margin: 14px 0 4px;
  display: block;
  position: relative;
  text-align: center;
  padding: 10px 0;
  margin-top: 0;
  font-size: 15px;
  line-height: 1.3;
  text-indent: 0;
  text-justify: center;
  color: ${props =>
    props.color === "black"
      ? props.theme.colors.black
      : props.theme.colors.lightGrey};
`;

const LeftContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 1px;
  top: 50%;
  margin-top: -1px;
  left: 0;
  background-color: #efefef;
  content: "";
`;

const RightContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 1px;
  top: 50%;
  margin-top: -1px;
  background-color: #efefef;
  content: "";
  left: auto;
  right: 0;
`;

export const Seperator: React.SFC<IProps> = ({
  color = "black",
  text,
  className
}) => (
  <>
    <TextContainer color={color}>
      <LeftContainer />
      {text}
      <RightContainer />
    </TextContainer>
  </>
);
