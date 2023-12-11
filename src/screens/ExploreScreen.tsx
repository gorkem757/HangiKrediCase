import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HKIconSvg, NotificationIconSvg } from "../components/Svgs";
import { HKTouchableOpacity } from "../components";
import { StackNavigationProp } from "@react-navigation/stack";

interface FinancialButton {
  title: string;
  icon: ReactNode;
  onPress: () => void;
}
type ExploreScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
  const ButtonData: FinancialButton[] = [
    { icon: <HKIconSvg />, title: "asd1", onPress: () => {} },
    { icon: <NotificationIconSvg />, title: "asd2", onPress: () => {} },
    { icon: <NotificationIconSvg />, title: "asd3", onPress: () => {} },

    {
      icon: <HKIconSvg />,
      title: "asd4",
      //@ts-ignore
      onPress: () => navigation.navigate("Finansal Rapor"),
    },
  ];
  //#region Hooks

  //#endregion

  //#region States

  //#endregion

  //#region Functions

  //#endregion

  return (
    <View style={styles.container}>
      {ButtonData.map((item) => {
        return (
          <HKTouchableOpacity onPress={item.onPress}>
            {item.icon}
            <Text>{item.title}</Text>
          </HKTouchableOpacity>
        );
      })}
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
