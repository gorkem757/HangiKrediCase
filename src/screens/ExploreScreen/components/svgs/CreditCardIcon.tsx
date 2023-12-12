import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ColorPalette } from "../../../../styles/ColorPalette";

const CreditCardIcon = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M20.593 19.333h-.148m3.11 0h-.148.149z"
        stroke={ColorPalette.Secondary500}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28 12H4"
        stroke={ColorPalette.Secondary500}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.852 7.111H4.148c-.818 0-1.481.597-1.481 1.333v16c0 .737.663 1.334 1.481 1.334h23.704c.818 0 1.481-.597 1.481-1.334v-16c0-.736-.663-1.333-1.481-1.333z"
        stroke={ColorPalette.Primary500}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CreditCardIcon;
