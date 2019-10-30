import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

interface IProps {
  map: object;
  error: string;
  loading: boolean;
}
const HomePresenter: React.FC<IProps> = ({ map, error, loading }) => {
  return loading ? (
    <Container>Loading...</Container>
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
