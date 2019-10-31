import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Input, Form } from "../../Components/Input";
import Helmet from "react-helmet";

const Container = styled.div`
  position: absolute;
  top: 12px;
  left: 11px;
  width: 354px;
  height: 152px;
  border-radius: 3px;
  border: 1px solid #cecece;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #e9e9e9;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075), -1px 1px 1px rgba(0, 0, 0, 0.03),
    1px 1px 1px rgba(0, 0, 0, 0.03);
  z-index: 2;
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
          <div>
            <Helmet>
              <title>카페114 | 검색결과</title>
            </Helmet>
            Search
          </div>
        )}
      </>
    )}
  </Container>
);

export default SearchPresenter;
