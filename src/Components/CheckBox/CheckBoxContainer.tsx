import CheckBoxPresenter from "./CheckBoxPresenter";

// interface IProps {
//   name: string;
//   value: boolean;
//   onChange: any;
//   text: string;
//   highlight?: string;
//   checked: boolean;
// }

// interface IState {
//   checked: boolean;
// }
// class CheckBoxContainer extends Component<IProps, IState> {
//   state = {
//     checked: this.props.checked
//   };

//   toggleChecked = () => this.setState({ checked: !this.state.checked });

//   render() {
//     const { name, value, onChange, text, highlight } = this.props;
//     const { checked } = this.state;
//     // console.log(checked);
//     return (
//       <CheckBoxPresenter
//         checked={checked}
//         toggleChecked={this.toggleChecked}
//         name={name}
//         value={`${value}`}
//         text={text}
//         highlight={highlight}
//       ></CheckBoxPresenter>
//     );
//   }
// }

export default CheckBoxPresenter;
