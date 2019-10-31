import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Input, Form } from "../../Components/Input";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 12px;
`;

interface IProps {
  term: string;
  result: object;
  error: string;
  loading: boolean;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const SearchPresenter: React.FC<IProps> = ({
  term,
  result,
  updateTerm,
  handleSubmit,
  error,
  loading
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input value={term} onChange={updateTerm} />
    </Form>{" "}
    {loading ? (
      <Loader />
    ) : (
      <>
        {result && (
          <Container>
            <Helmet>
              <title>카페114 | 검색결과</title>
            </Helmet>
            Search
          </Container>
        )}
      </>
    )}
  </Container>
);

export default SearchPresenter;
