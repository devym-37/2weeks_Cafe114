import React from "react";
import styled from "styled-components";
import CloseButton from "../../Components/CloseButton";
import Helmet from "react-helmet";
const DimmedLayerCantainer = styled.div`
  height: 993px;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 100;
  opacity: 0.3;
`;

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const DimmedLayerScene = styled.div<{ size: string }>`
  opacity: 1;
  background-color: #ffffff;
  top: 219.5px;
  width: ${props =>
    props.size === "small"
      ? props.theme.modal.size.small
      : props.theme.modal.size.medium};
  left: 50%;
  margin: 20px auto;
  margin-left: ${props =>
    props.size === "small"
      ? props.theme.modal.margin.small
      : props.theme.modal.margin.medium};
  z-index: 100;
  position: relative;
  box-sizing: border-box;
  padding: 55px 20px 20px;
  border-radius: 3px;
  padding: 55px 20px 20px;
  color: #000000;
`;
const ContentContainer = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  line-height: 1.3;
`;

interface IProps {
  size: string;
  onClick: any;
}

const ModalLayout: React.SFC<IProps> = ({ size, children, onClick }) => (
  <DimmedLayerCantainer>
    <Helmet>
      <title> 회원가입 | Cafe114 </title>
    </Helmet>

    <Dimmed />
    <Container>
      <DimmedLayerScene size={size}>
        <ContentContainer>{children}</ContentContainer>

        <CloseButton onClick={onClick} />
      </DimmedLayerScene>
    </Container>
  </DimmedLayerCantainer>
);

export default ModalLayout;
