import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface IProps {
  map: object;
  error: string;
  loading: boolean;
}
const DetailPresenter: React.FC<IProps> = ({ map, error, loading }) => {
  return loading ? (
    <Container>Loading...</Container>
  ) : (
    map && <Container>Detail</Container>
  );
};

export default DetailPresenter;
