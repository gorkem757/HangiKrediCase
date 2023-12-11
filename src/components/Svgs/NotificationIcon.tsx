import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { ColorPalette } from "../../styles/ColorPalette";

const NotificationIcon = (props:SvgProps)=> {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <Path
        d="M7.354 20c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1M16 7A6 6 0 004 7c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H16.61c1.196 0 1.794 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936C16.78 12.206 16 10.09 16 7z"
        stroke={ColorPalette.Primary700}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotificationIcon;
