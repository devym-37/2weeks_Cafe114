import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const Container = styled.div``;

interface IProps {
  error: string;
  loading: boolean;
}

const HomePresenter: React.FC<IProps> = ({ error, loading }) => {
  return loading ? (
    <Container>
      <Loader />
    </Container>
  ) : (
    <>
      {error && (
        <Container>
          <Helmet>
            <title>Error | 카페114</title>
          </Helmet>
          <Error />
        </Container>
      )}
      {!error && (
        <Container>
          <Helmet>
            <title>Home | 카페114</title>
          </Helmet>
          {}
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
