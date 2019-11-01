import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { Input, Form } from "../../Components/Input";
import ToolGroup from "../../Components/ToolGroup";
import Map from "../../Components/Map";
const Container = styled.div``;

interface IProps {
  map: object;
  error: string;
  loading: boolean;
  term: string;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const HomePresenter: React.FC<IProps> = ({
  handleSubmit,
  updateTerm,
  term,
  map,
  error,
  loading
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
      {!error && map && (
        <Container>
          <Helmet>
            <title>Home | 카페114</title>
          </Helmet>
          <Map />
          <Form onSubmit={handleSubmit}>
            <Input value={term} onChange={updateTerm} />
          </Form>
          <ToolGroup />
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
