import React from "react";
import styled from "styled-components";
import { Input, Form } from "../../Components/SearchInput";

const Map = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

// const Center = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   display: flex;
// `;

interface IProps {
  mapRef: any;
  address: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

class MapPresenter extends React.Component<IProps> {
  updateTerm = () => {};

  handleSearchSubmit = (event: React.FormEvent) => {};
  public render() {
    const { mapRef, address, onInputChange, onSubmit } = this.props;
    return (
      <div>
        <Map ref={mapRef} />
      </div>
    );
  }
}
export default MapPresenter;
