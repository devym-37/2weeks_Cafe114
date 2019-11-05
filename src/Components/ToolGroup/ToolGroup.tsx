import React from "react";
import styled from "styled-components";
import {
  Update,
  CurrentLocation,
  Filter
} from "../../Components/ToolGroup/MapControl";
import { Mypage } from "../../Components/ToolGroup/Mypage";

const Container = styled.div`
  display: block;
  position: absolute;
  top: 227px;
  z-index: 2;
`;

const ToolGroupContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: flex-end;
`;

interface IProps {
  toggleLoginModal: any;
  toggleFilterModal: any;
  toggleLocation: any;
}

const ToolGroup: React.SFC<IProps> = ({
  toggleLoginModal,
  toggleFilterModal,
  toggleLocation
}) => (
  <Container>
    <ToolGroupContainer>
      <Mypage toggleLoginModal={toggleLoginModal} />
      <CurrentLocation toggleLocation={toggleLocation} />
      <Update />
      <Filter toggleFilterModal={toggleFilterModal} />
    </ToolGroupContainer>
  </Container>
);

export default ToolGroup;
