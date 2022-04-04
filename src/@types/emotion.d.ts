import { Colors } from "assets/styles/themeParts/colors";

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
  }
}
