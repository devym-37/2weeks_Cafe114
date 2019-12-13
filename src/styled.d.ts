import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      disabled: string;
      secondary: string;
      grey: string;
      blue: string;
      lightGrey: string;
      black: string;
      white: string;
      kakaoBrown: string;
      kakaoYellow: string;
      facebook: string;
    };
    modal: {
      size: { small: string; medium: string };

      margin: { small: string; medium: string };
    };
  }
}
