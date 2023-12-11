import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
import { TabBarIconProps } from ".";
import { ColorPalette } from "../../../styles/ColorPalette";

const CampaignsIcon = (props: SvgProps & TabBarIconProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <Path
        d="M12.5 6v16m0-16H8.964c-.52 0-1.02-.21-1.389-.586A2.019 2.019 0 017 4c0-.53.207-1.04.575-1.414A1.947 1.947 0 018.965 2c2.75 0 3.535 4 3.535 4zm0 0h3.536c.52 0 1.02-.21 1.389-.586C17.793 5.04 18 4.53 18 4c0-.53-.207-1.04-.575-1.414A1.947 1.947 0 0016.035 2C13.286 2 12.5 6 12.5 6zm8 5v7.8c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C18.98 22 18.42 22 17.3 22H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C4.5 20.48 4.5 19.92 4.5 18.8V11m-2-3.4v1.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C3.26 11 3.54 11 4.1 11h16.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437c.109-.214.109-.494.109-1.054V7.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C21.74 6 21.46 6 20.9 6H4.1c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C2.5 6.76 2.5 7.04 2.5 7.6z"
        stroke={props.iconColor ?? ColorPalette.Primary700}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CampaignsIcon;
