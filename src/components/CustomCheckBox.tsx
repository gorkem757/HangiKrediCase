import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Checkbox, CheckboxProps } from "expo-checkbox";
import { ColorPalette } from "../styles/ColorPalette";

interface CustomCheckboxProps extends CheckboxProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  containerStyle,
  labelStyle,
  ...checkboxProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Checkbox {...checkboxProps} />
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    color: ColorPalette.Neutral600,
    marginLeft: 12,
  },
});

export default CustomCheckbox;
