import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import { ColorPalette } from "../../../styles/ColorPalette";
import { HKButton } from "../../../components";

const CreateFinancialReportScreen: React.FC = () => {
  //#region Hooks
  //#endregion

  //#region Effects

  //#endregion

  //#region Functions
  const renderFooter = () => {
    return (
      <View>
        <></>
      </View>
    );
  };
  //#endregion

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <Text>Create FinancialReports Screen</Text>
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 36,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  
  footer: {
    height: 92,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingBottom: 24,
    alignSelf: "center",
    borderTopWidth: 1,
    borderColor: ColorPalette.Neutral300,
    backgroundColor: ColorPalette.GenericWhite,
    width: Dimensions.get("window").width,
  },
  ctaButton: {
    paddingVertical: 14,
    width: "100%",
  },
});

export default CreateFinancialReportScreen;
