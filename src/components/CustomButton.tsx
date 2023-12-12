import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { ColorPalette } from "../styles/ColorPalette";

export type HKButtonProps = {
  variant: "primary" | "secondary";
  title: string;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
};

const HKButton: React.FC<PressableProps & ViewProps & HKButtonProps> = ({
  variant,
  title,
  LeftIcon,
  RightIcon,
  ...props
}) => {
  //#region Dynamic Styles
  const container: ViewStyle =
    variant === "primary" ? styles.primaryContainer : styles.secondaryContainer;
  const titleStyle: TextStyle =
    variant === "primary" ? styles.primaryTitle : styles.secondaryTitle;
  //#endregion

  return (
    <Pressable style={container} {...props}>
      {LeftIcon && <LeftIcon />}
      <Text style={titleStyle}>{title}</Text>
      {RightIcon && <RightIcon />}
    </Pressable>
  );
};
1;

const styles = StyleSheet.create({
  primaryContainer: {
    borderWidth: 1,
    borderColor: ColorPalette.Primary500,
    padding: 10,
    rowGap: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  secondaryContainer: {
    backgroundColor: ColorPalette.Primary500,
    padding: 10,
    rowGap: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  primaryTitle: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "center",
    color: ColorPalette.Primary500,
  },

  secondaryTitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
    color: ColorPalette.GenericWhite,
  },
});

export default HKButton;
