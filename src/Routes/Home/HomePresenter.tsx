import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import BackArrow from "../../Components/BackArrow";
import {
  ZoomIn,
  ZoomOut,
  Update,
  CurrentLocation,
  Filter
} from "../../Components/ToolGroup/MapControl";
import { Mypage } from "../../Components/ToolGroup/Mypage";

const Container = styled.div``;

const BackArrowExtended = styled(BackArrow)`
  margin-top: 30px;
  padding: 50px 20px;
`;
interface IProps {
  map: object;
  error: string;
  loading: boolean;
}

const HomePresenter: React.FC<IProps> = ({ map, error, loading }) => {
  return loading ? (
    <Container>
      <Mypage />
      <ZoomIn />
      <ZoomOut />
      <CurrentLocation />
      <Update />
      <Filter />
      <Loader />
    </Container>
  ) : (
    map && (
      <Container>
        <Helmet>
          <title>카페114 | Home</title>
        </Helmet>
        Home
      </Container>
    )
  );
};

export default HomePresenter;
