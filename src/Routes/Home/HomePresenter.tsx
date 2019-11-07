import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { Input, Form } from "../../Components/SearchInput";
import Map from "../../Components/MapScreen/index";
import TestMap from "../../Routes/Map";
const Container = styled.div``;

interface IProps {
  error: string;
  loading: boolean;
  toggleFilterModal: () => void;
  toggleLocation: () => void;
  showLocation: any;
  term: string;
  centerY: number;
  centerX: number;
  navigatorBoolean: boolean;
  address: string;
  handleSearchSubmit: any;
  updateTerm: any;
}

const HomePresenter: React.FC<IProps> = ({
  error,
  loading,
  toggleFilterModal,
  showLocation,
  toggleLocation,
  updateTerm,
  handleSearchSubmit,
  term,
  centerX,
  centerY,
  navigatorBoolean
}) => {
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
          <Map
            toggleFilterModal={toggleFilterModal}
            toggleLocation={toggleLocation}
            showLocation={showLocation}
            centerY={centerY}
            centerX={centerX}
            navigatorBoolean={navigatorBoolean}
            address={term}
          />
          <Form onSubmit={handleSearchSubmit}>
            <Input value={term} onChange={updateTerm} />
          </Form>
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
