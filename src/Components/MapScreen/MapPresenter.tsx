import React from "react";
import styled from "styled-components";

const Map = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
`;

interface IProps {
  mapRef: any;
}

class MapPresenter extends React.Component<IProps> {
  public render() {
    const { mapRef } = this.props;
    return (
      <div>
        <Map ref={mapRef} />
      </div>
    );
  }
}
export default MapPresenter;
