import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
<<<<<<< HEAD
import { Input, Form } from "../../Components/SearchInput";
import Map from "../../Components/MapScreen/index";
=======
import Map from "../../Components/Map";
>>>>>>> 5ff13e3e7e55bfacac58368f6420be9749d3ed2f
import TestMap from "../../Routes/Map";
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
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
