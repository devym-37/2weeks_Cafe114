import React from "react";
import styled from "styled-components";
import { Update, CurrentLocation, Filter } from "../ToolGroup/MapControl";
import { Mypage } from "../LoggedToolGroup/LoggedMypage";
import user from "../../assets/profile-placeholder.png";

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
  <ToolGroupContainer>
    <Mypage toggleMypageSlider={toggleMypageSlider} url={user} />
    <CurrentLocation toggleLocation={toggleLocation} />
    <Update />
    <Filter toggleFilterModal={toggleFilterModal} />
  </ToolGroupContainer>
);

export default ToolGroup;
