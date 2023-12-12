import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ColorPalette } from "../../../../styles/ColorPalette";

const CalculationToolsIcon = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M25.333 13.333V4M6.667 4v18.667V4zM16 9.333V28 9.333zm9.333 9.334V28v-9.333z"
        stroke={ColorPalette.Primary500}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.667 22.667a2.667 2.667 0 100 5.333 2.667 2.667 0 000-5.333zM16 4a2.667 2.667 0 100 5.333A2.667 2.667 0 0016 4zm9.333 9.333a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334z"
        stroke={ColorPalette.Secondary500}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CalculationToolsIcon;
