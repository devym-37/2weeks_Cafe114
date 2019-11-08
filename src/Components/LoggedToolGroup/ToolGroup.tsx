import React from "react";
import styled from "styled-components";
import { Update, CurrentLocation, Filter } from "../ToolGroup/MapControl";
import { Mypage } from "../LoggedToolGroup/LoggedMypage";

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
  top: 150px;
  z-index: 2;
  display: block;
`;

interface IProps {
  toggleFilterModal: any;
  toggleLocation: any;
  toggleMypageSlider: any;
}

const ToolGroup: React.SFC<IProps> = ({
  toggleFilterModal,
  toggleLocation,
  toggleMypageSlider
}) => (
  // <Container>
  <ToolGroupContainer>
    <Mypage toggleMypageSlider={toggleMypageSlider} />
    <CurrentLocation toggleLocation={toggleLocation} />
    <Update />
    <Filter toggleFilterModal={toggleFilterModal} />
  </ToolGroupContainer>
  // </Container>
);

export default ToolGroup;
