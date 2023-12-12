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
  variant: "primary" | "secondary" | "text-only";
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
  //TODO: Write a mapper function to enhance readability.
  const containerStyle: ViewStyle =
    variant === "primary"
      ? styles.primaryContainer
      : variant === "secondary"
      ? styles.secondaryContainer
      : styles.textOnlyContainer;

  const titleStyle: TextStyle =
    variant === "primary"
      ? styles.primaryTitle
      : variant === "secondary"
      ? styles.secondaryTitle
      : styles.textOnlyTitle;
  //#endregion

  return (
    <Pressable style={containerStyle} {...props}>
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
  textOnlyContainer: {
    backgroundColor: "transparent",
    padding: 10,
    rowGap: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  textOnlyTitle: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: ColorPalette.Primary500,
  },
});

export default HKButton;
