import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ColorPalette } from "../../../../styles/ColorPalette";

const HousingIcon = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 20h-5.333v8H16v-8z"
        stroke={ColorPalette.Secondary500}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28 28H4m17.333 0h-16V10.293A1.333 1.333 0 016.24 8.96L21.333 4v24zm5.334-14.667A1.333 1.333 0 0025.333 12h-4v16h5.334V13.333z"
        stroke={ColorPalette.Primary500}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HousingIcon;
