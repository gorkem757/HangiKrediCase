import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { ColorPalette } from "../styles/ColorPalette";

interface CardProps extends ViewProps {}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <View style={[styles.container, props.style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "row",
    rowGap: 16,
    backgroundColor: ColorPalette.GenericWhite,
    borderRadius: 12,
  },
});

export default Card;
