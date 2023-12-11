import React from "react";
import { StyleSheet, View } from "react-native";
import { HKIconSvg, NotificationIconSvg, UserSvg } from "../components/Svgs";
import { ColorPalette } from "../styles/ColorPalette";

const TabBarHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <UserSvg />
      <HKIconSvg />
      <NotificationIconSvg />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: ColorPalette.GenericWhite,
  },
});

export default TabBarHeader;
