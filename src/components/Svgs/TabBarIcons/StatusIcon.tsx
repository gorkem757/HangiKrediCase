import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { TabBarIconProps } from ".";
import { ColorPalette } from "../../../styles/ColorPalette";

const StatusIcon = (props: SvgProps & TabBarIconProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M22.5 12c0 5.523-4.477 10-10 10s-10-4.477-10-10m20 0c0-5.523-4.477-10-10-10m10 10H20M2.5 12c0-5.523 4.477-10 10-10m-10 10H5m7.5-10v2.5m7.078.5L14 10.5m5.578 8.578l-.203-.203c-.692-.692-1.038-1.038-1.442-1.286a3.999 3.999 0 00-1.156-.479c-.46-.11-.95-.11-1.928-.11h-4.698c-.978 0-1.468 0-1.928.11a4 4 0 00-1.156.48c-.404.247-.75.593-1.442 1.285l-.203.203M5.422 5l1.736 1.736M14.5 12a2 2 0 11-4 0 2 2 0 014 0z"
        stroke={props.iconColor ?? ColorPalette.Primary700}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default StatusIcon;
