import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import { ColorPalette } from "./src/styles/ColorPalette";
import Constants from "expo-constants";
import StackNavigator from "./src/navigation/StackNavigator";

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  const safeAreaStyle: ViewStyle = {
    paddingTop: Platform.OS === "ios" ? 0 : statusBarHeight + 12,
  };

  return (
    <SafeAreaView style={[styles.container, safeAreaStyle]}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalette.GenericWhite,
  },
});
