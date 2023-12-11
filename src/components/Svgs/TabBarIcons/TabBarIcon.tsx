import React from "react";
import { ColorPalette } from "../../../styles/ColorPalette";


interface TabIconProps {
  IconComponent: React.FC<any>;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ IconComponent, focused }) => {
  return (
    <IconComponent
      width={24}
      height={24}
      iconColor={
        focused ? ColorPalette.Secondary500 : ColorPalette.Primary700
      }
    />
  );
};

export default TabIcon;
