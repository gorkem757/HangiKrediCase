import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import GridButtons, { FinancialButton } from "./components/GridButtons";
import {
  CalculationToolsIconSvg,
  CreditCardIconSvg,
  CreditIconSvg,
  HousingIconSvg,
} from "./components/svgs";

type ExploreScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
  //#region Data
  const ButtonData: FinancialButton[] = [
    {
      icon: <CreditIconSvg />,
      title: "Finansal Rapor", //@ts-ignore
      onPress: () => navigation.navigate("FinancialReportsScreen"),
    },
    {
      icon: <CreditCardIconSvg />,
      title: "Eski Raporlarım",
      onPress: () => {},
    },
    {
      icon: <HousingIconSvg />,
      title: "Hesabım",
      onPress: () => {},
    },
    {
      icon: <CalculationToolsIconSvg />,
      title: "İşlemler",
      onPress: () => {},
    },
  ];
  //#endregion

  //#region Hooks

  //#endregion

  //#region States

  //#endregion

  //#region Functions

  //#endregion

  return (
    <View style={styles.container}>
      <GridButtons data={ButtonData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 13,
    paddingRight: 19,
    paddingTop: 72,
  },
});

export default ExploreScreen;
