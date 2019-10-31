import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;

interface IProps {
  map: object;
  error: string;
  loading: boolean;
}
const SearchPresenter: React.FC<IProps> = ({ map, error, loading }) => {
  return loading ? <Loader /> : map && <Container>Search</Container>;
};

export default SearchPresenter;
