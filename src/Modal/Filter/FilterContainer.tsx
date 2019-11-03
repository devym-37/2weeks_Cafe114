import React, { Component } from "react";
import FilterPresenter from "./FilterPresenter";
import { string } from "prop-types";

// interface IProps {
//   toggleFilterModal: any;
// }

interface IState {
  hollys: number;
  tomtom: number;
  allDay: number;
  smoke: number;
  parking: number;
  quantity: number;
}
class FilterContainer extends Component<{}, IState> {
  state = {
    hollys: 1,
    tomtom: 1,
    allDay: 1,
    smoke: 0,
    parking: 0,
    quantity: 0
  };

  handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };

  handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value, checked }
    } = event;

    if (checked) {
    }
    if (name === "hollys") {
      this.setState(prevState => ({ hollys: prevState.hollys ? 0 : 1 }));
    } else if (name === "tomtom") {
      this.setState(prevState => ({ tomtom: prevState.tomtom ? 0 : 1 }));
    }
    console.log(event.target.name);
  };

  render() {
    console.log(`hollys: `, this.state.hollys);
    return (
      <FilterPresenter
        handleCheck={this.handleCheck}
        handleReset={this.handleReset}
      />
    );
  }
}

export default FilterContainer;
