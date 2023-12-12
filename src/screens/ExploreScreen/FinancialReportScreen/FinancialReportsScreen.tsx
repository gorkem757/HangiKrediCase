import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MainCard } from "./components";

const FinancialReportsScreen: React.FC = () => {
  //#region Hooks

  //#endregion

  //#region States

  //#endregion

  //#region Functions

  //#endregion

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default FinancialReportsScreen;
