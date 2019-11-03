import React from "react";
import styled from "styled-components";
import CheckBox from "../../Components/CheckBox";
import reset from "styled-reset";
import refresh from "../../assets/refresh.png";

const FilterLayer = styled.div`
  font-size: 13px;
  color: #000;
  line-height: 32px;
  z-index: 10;
  border-radius: 3px;
  border: 1px solid #cecece;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #e9e9e9;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075), -1px 1px 1px rgba(0, 0, 0, 0.03),
    1px 1px 1px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  top: 20px;
  right: 80px;
  position: absolute;
  width: 242px;
  display: block;
  white-space: nowrap;
  text-align: left;
  padding-left: 10px;
`;

const FilterTitle = styled.h4`
  font-weight: normal;
  line-height: 1.3;
  padding: 10px 10px 0;
  margin-top: 13px;
  margin-bottom: 6px;
  font-size: 13px;
  color: #000;
  white-space: nowrap;
  text-align: left;
`;

const Divider = styled.div`
  position: relative;
  padding: 0 20px;
  height: 20px;
  border-bottom: 1px solid #eee;
  margin: 0;
  white-space: nowrap;
  text-align: left;
`;

const CheckBoxContainer = styled.div`
  position: relative;
  padding: 0 10px;
  height: 32px;
  /* border-bottom: 1px solid #eee; */
  margin: 0;
  white-space: nowrap;
  text-align: left;
`;

const BtnResetAll = styled.button`
  line-height: 44px;
  width: 100%;
  height: 44px;
  text-align: center;
  display: block;
  color: #777;
  border-top: 1px solid #eee;
  -webkit-appearance: button;
  border-radius: 0;
  overflow: visible;
  border: 0 none;
  font-size: 100%;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;
  text-rendering: auto;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  font: 400 11px system-ui;
`;

const ResetIcon = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url(${refresh});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 6px;
  vertical-align: top;
`;

interface IProps {
  handleReset: any;
  handleCheck: any;
}

const FilterPresenter: React.SFC<IProps> = ({ handleReset, handleCheck }) => (
  <FilterLayer>
    <FilterTitle>카페</FilterTitle>
    <CheckBoxContainer>
      <CheckBox name="할리스" value="hollys" onClick={handleCheck}></CheckBox>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <CheckBox name="탐앤탐스" value="tomtom" onClick={handleCheck}></CheckBox>
    </CheckBoxContainer>
    <Divider />
    <FilterTitle>서비스 옵션</FilterTitle>
    <CheckBoxContainer>
      <CheckBox name="24시간" value="allDay" onClick={handleCheck}></CheckBox>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <CheckBox name="흡연실" value="smoke" onClick={handleCheck}></CheckBox>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <CheckBox
        name="주차가능"
        value="parking"
        onClick={handleCheck}
      ></CheckBox>
    </CheckBoxContainer>
    <Divider />
    <BtnResetAll onClick={handleReset}>
      모두 초기화
      <ResetIcon />
    </BtnResetAll>
  </FilterLayer>
);

// const FilterPresenter: React.SFC<IProps> = ({ handleReset, handleCheck }) => (
//   <FilterLayer>
//     <FilterTitle>카페</FilterTitle>
//     <CheckBoxContainer>
//       <CheckBox onClick={handleCheck} checked={true} label="탐앤탐스" />
//     </CheckBoxContainer>
//     {/* <CheckBoxContainer>
//         <CheckBox name="탐앤탐스" value="tomtom" onClick={handleCheck}></CheckBox>
//       </CheckBoxContainer>
//       <Divider />
//       <FilterTitle>서비스 옵션</FilterTitle>
//       <CheckBoxContainer>
//         <CheckBox name="24시간" value="allDay" onClick={handleCheck}></CheckBox>
//       </CheckBoxContainer>
//       <CheckBoxContainer>
//         <CheckBox name="흡연실" value="smoke" onClick={handleCheck}></CheckBox>
//       </CheckBoxContainer>
//       <CheckBoxContainer>
//         <CheckBox
//           name="주차가능"
//           value="parking"
//           onClick={handleCheck}
//         ></CheckBox>
//       </CheckBoxContainer>
//       <Divider /> */}
//     <BtnResetAll onClick={handleReset}>
//       모두 초기화
//       <ResetIcon />
//     </BtnResetAll>
//   </FilterLayer>
// );

export default FilterPresenter;
