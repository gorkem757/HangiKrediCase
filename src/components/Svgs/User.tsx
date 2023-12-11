import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath, SvgProps } from "react-native-svg"
import { ColorPalette } from "../../styles/ColorPalette"

const User = (props: SvgProps)=> {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_35_541)">
        <Circle cx={16} cy={16} r={16} fill={ColorPalette.Primary50} />
        <Path
          d="M10 21.333c1.557-1.651 3.671-2.666 6-2.666s4.443 1.015 6 2.666M19 13a3 3 0 11-6 0 3 3 0 016 0z"
          stroke={ColorPalette.Primary700}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_35_541">
          <Path fill={ColorPalette.GenericWhite} d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default User;
