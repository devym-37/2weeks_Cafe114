import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import BackArrow from "../../Components/BackArrow";

import { Form, Input } from "../../Components/Input";

const Container = styled.div``;

const BackArrowExtended = styled(BackArrow)`
  margin-top: 30px;
  padding: 50px 20px;
`;
interface IProps {
  term: string;
  map: object;
  error: string;
  loading: boolean;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const HomePresenter: React.FC<IProps> = ({
  term,
  map,
  error,
  handleSubmit,
  updateTerm,
  loading
}) => {
  return loading ? (
    <Container>
      <Loader />
    </Container>
  ) : (
    map && (
      <Container>
        <Helmet>
          <title>카페114 | Home</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
          <Input value={term} onChange={updateTerm} />
        </Form>
      </Container>
    )
  );
};

export default HomePresenter;
