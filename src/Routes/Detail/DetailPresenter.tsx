import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

interface IProps {
  result: { name: string };
  error: string;
  loading: boolean;
}
const DetailPresenter: React.FC<IProps> = ({ result, error, loading }) => {
  return loading ? (
    <Container>Loading...</Container>
  ) : (
    result && (
      <Container>
        <Helmet>
          <title>카페114 | {result.name ? result.name : "Detail"} </title>
        </Helmet>
        Detail
      </Container>
    )
  );
};

export default DetailPresenter;
