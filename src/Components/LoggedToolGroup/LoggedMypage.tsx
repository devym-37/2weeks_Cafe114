import React from "react";
import { PngButton } from "../ButtonMaker";

interface IProps {
  toggleMypageSlider: any;
  url: string;
}
export const Mypage: React.SFC<IProps> = ({ toggleMypageSlider, url }) => (
  <PngButton url={url} onClick={toggleMypageSlider} />
);
