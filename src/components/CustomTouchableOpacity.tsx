import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type CustomTouchableOpacityProps = TouchableOpacityProps;

const CustomTouchableOpacity: React.FC<CustomTouchableOpacityProps> = (
  props: CustomTouchableOpacityProps
) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

export default CustomTouchableOpacity;