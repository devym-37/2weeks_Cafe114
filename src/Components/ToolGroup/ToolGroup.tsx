import React from "react";
import styled from "styled-components";
import {
  Update,
  CurrentLocation,
  Filter
} from "../../Components/ToolGroup/MapControl";
import { Mypage } from "../../Components/ToolGroup/Mypage";

// const Container = styled.div`
//   display: block;
//   position: absolute;
//   top: 225px;
//   left: 0px;
//   z-index: 2;
// `;

const ToolGroupContainer = styled.div`
  position: absolute;
  right: 4px;
  top: 230px;
  z-index: 2;
  display: block;
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
  // <Container>
  <ToolGroupContainer>
    <Mypage toggleLoginModal={toggleLoginModal} />
    <CurrentLocation toggleLocation={toggleLocation} />
    <Update />
    <Filter toggleFilterModal={toggleFilterModal} />
  </ToolGroupContainer>
  // </Container>
);

export default ToolGroup;
