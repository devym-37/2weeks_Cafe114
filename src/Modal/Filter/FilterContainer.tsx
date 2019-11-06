import React, { Component } from "react";
import FilterPresenter from "./FilterPresenter";
import { string } from "prop-types";
import { tsSymbolKeyword } from "@babel/types";

// interface IProps {
//   toggleFilterModal: any;
// }

interface IState {
  hollys: boolean;
  tomtom: boolean;
  allDay: boolean;
  smoke: boolean;
  parking: boolean;
  quantity: boolean;
}
class FilterContainer extends Component<{}, IState> {
  state = {
    hollys: false,
    tomtom: false,
    allDay: false,
    smoke: false,
    parking: false,
    quantity: false
  };

  handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      hollys: false,
      tomtom: false,
      allDay: false,
      smoke: false,
      parking: false,
      quantity: false
    });
  };

  handleCheck = (event: any) => {
    const {
      target: { name }
    } = event;

    if (name === "hollys") {
      this.setState({ hollys: !this.state.hollys });
    } else if (name === "tomtom") {
      this.setState({ tomtom: !this.state.tomtom });
    } else if (name === "allDay") {
      this.setState({ allDay: !this.state.allDay });
    } else if (name === "smoke") {
      this.setState({ smoke: !this.state.smoke });
    } else if (name === "parking") {
      this.setState({ parking: !this.state.parking });
    }
  };

  render() {
    const { hollys, tomtom, allDay, smoke, parking, quantity } = this.state;
    console.log(`필터: `, this.state);
    return (
      <FilterPresenter
        hollys={hollys}
        tomtom={tomtom}
        allDay={allDay}
        smoke={smoke}
        parking={parking}
        quantity={quantity}
        handleCheck={this.handleCheck}
        handleReset={this.handleReset}
      />
    );
  }
}

export default FilterContainer;
