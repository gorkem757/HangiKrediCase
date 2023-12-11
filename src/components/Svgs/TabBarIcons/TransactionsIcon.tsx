import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
import { TabBarIconProps } from ".";
import { ColorPalette } from "../../../styles/ColorPalette";

const TransactionsIcon = (props: SvgProps & TabBarIconProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M17 14h.01M3.5 5v14a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-14a2 2 0 01-2-2zm0 0a2 2 0 012-2h12m0 11a.5.5 0 11-1 0 .5.5 0 011 0z"
        stroke={props.iconColor ?? ColorPalette.Primary700}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TransactionsIcon;
