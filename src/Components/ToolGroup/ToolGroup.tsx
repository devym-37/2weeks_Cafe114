import React from "react";
import styled from "styled-components";
import {
  ZoomIn,
  ZoomOut,
  Update,
  CurrentLocation,
  Filter
} from "../../Components/ToolGroup/MapControl";
import { Mypage } from "../../Components/ToolGroup/Mypage";

const Container = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  z-index: 2;
`;

const ToolGroupContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: flex-end;
`;

const ToolGroup: React.SFC = () => (
  <Container>
    <ToolGroupContainer>
      <Mypage />
      <ZoomIn />
      <ZoomOut />
      <CurrentLocation />
      <Update />
      <Filter />
    </ToolGroupContainer>
  </Container>
);

export default ToolGroup;