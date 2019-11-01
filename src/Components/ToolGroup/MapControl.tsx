import React from "react";
import { IconButton, TextButton } from "../ButtonMaker";

export const ZoomIn: React.SFC = () => (
  <IconButton
    linkTo="/"
    viewBox="0 0 30 30"
    path="M 14.970703 2.9726562 A 2.0002 2.0002 0 0 0 13 5 L 13 13 L 5 13 A 2.0002 2.0002 0 1 0 5 17 L 13 17 L 13 25 A 2.0002 2.0002 0 1 0 17 25 L 17 17 L 25 17 A 2.0002 2.0002 0 1 0 25 13 L 17 13 L 17 5 A 2.0002 2.0002 0 0 0 14.970703 2.9726562 z"
  />
);

export const ZoomOut: React.SFC = () => (
  <IconButton
    linkTo="/"
    viewBox="0 0 120 120"
    path="M 20 52 C 17.113281 51.960938 14.429688 53.476562 12.976562 55.96875 C 11.523438 58.457031 11.523438 61.542969 12.976562 64.03125 C 14.429688 66.523438 17.113281 68.039062 20 68 L 100 68 C 102.886719 68.039062 105.570312 66.523438 107.023438 64.03125 C 108.476562 61.542969 108.476562 58.457031 107.023438 55.96875 C 105.570312 53.476562 102.886719 51.960938 100 52 Z M 20 52 "
  />
);

export const CurrentLocation: React.SFC = () => (
  <IconButton
    linkTo="/"
    viewBox="0 0 50 50"
    path="M 23 0 L 23 4.0957031 C 13.018702 5.0446992 5.046896 13.018494 4.0976562 23 L 0 23 L 0 27 L 4.0976562 27 C 5.046896 36.981506 13.018702 44.955301 23 45.904297 L 23 50 L 27 50 L 27 45.902344 C 36.981223 44.953131 44.953131 36.981223 45.902344 27 L 50 27 L 50 23 L 45.902344 23 C 44.953131 13.018777 36.981223 5.046869 27 4.0976562 L 27 0 L 23 0 z M 27 8.1269531 C 34.805997 9.0369175 40.963083 15.194003 41.873047 23 L 39 23 L 39 27 L 41.873047 27 C 40.963083 34.805997 34.805997 40.963083 27 41.873047 L 27 39 L 23 39 L 23 41.871094 C 15.196372 40.959902 9.0368425 34.805354 8.1269531 27 L 11 27 L 11 23 L 8.1269531 23 C 9.0368425 15.194646 15.196372 9.0400983 23 8.1289062 L 23 11 L 27 11 L 27 8.1269531 z M 20.978516 18.980469 A 2.0002 2.0002 0 0 0 19.585938 22.414062 L 22.171875 25 L 19.585938 27.585938 A 2.0002 2.0002 0 1 0 22.414062 30.414062 L 25 27.828125 L 27.585938 30.414062 A 2.0002 2.0002 0 1 0 30.414062 27.585938 L 27.828125 25 L 30.414062 22.414062 A 2.0002 2.0002 0 0 0 28.960938 18.980469 A 2.0002 2.0002 0 0 0 27.585938 19.585938 L 25 22.171875 L 22.414062 19.585938 A 2.0002 2.0002 0 0 0 20.978516 18.980469 z"
  />
);

export const Update: React.SFC = () => (
  <IconButton
    linkTo="/"
    viewBox="0 0 24 24"
    path="M 12 3 C 9.5110102 3 7.1735459 4.0349773 5.4980469 5.7910156 L 3.8535156 4.1464844 C 3.6585156 3.9514844 3.3414844 3.9514844 3.1464844 4.1464844 C 3.0494844 4.2444844 3 4.372 3 4.5 L 3 9 A 1 1 0 0 0 4 10 L 8.5 10 C 8.628 10 8.7565156 9.9515156 8.8535156 9.8535156 C 9.0485156 9.6585156 9.0485156 9.3414844 8.8535156 9.1464844 L 6.9140625 7.2070312 C 8.2196399 5.820863 10.049247 5 12 5 C 15.52 5 18.502453 7.6320469 18.939453 11.123047 C 19.002453 11.629047 19.432688 12 19.929688 12 C 19.970688 12 20.012687 11.998187 20.054688 11.992188 C 20.602688 11.924188 20.991828 11.424953 20.923828 10.876953 C 20.362828 6.3869531 16.526 3 12 3 z M 3.9453125 12.007812 C 3.3973125 12.075812 3.0071719 12.575047 3.0761719 13.123047 C 3.6371719 17.613047 7.474 21 12 21 C 14.48642 21 16.807752 19.987199 18.5 18.207031 L 20.146484 19.853516 C 20.341484 20.048516 20.658516 20.048516 20.853516 19.853516 C 20.950516 19.755516 21 19.628 21 19.5 L 21 15 A 1 1 0 0 0 20 14 L 15.5 14 C 15.372 14 15.243484 14.048484 15.146484 14.146484 C 14.951484 14.341484 14.951484 14.658516 15.146484 14.853516 L 17.085938 16.792969 C 15.766846 18.198726 13.949132 19 12 19 C 8.48 19 5.4975469 16.367953 5.0605469 12.876953 C 4.9925469 12.328953 4.4893125 11.936813 3.9453125 12.007812 z"
  />
);

export const Filter: React.SFC = () => <TextButton linkTo="/" text="필터" />;