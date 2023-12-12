import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import {
  CreateFinancialReportScreen,
  FinancialReportsScreen,
} from "../screens";
import { useNavigationState } from "@react-navigation/native";

const StackNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  const [currentScreen, setCurrentScreen] = useState("BottomTabs");
  const navigationState = useNavigationState((state) => state);

  // Update the currentHomeScreen whenever the navigation state changes
  React.useEffect(() => {
    if (!navigationState) {
      return;
    }
    const currentRoute = navigationState.routes[navigationState.index];
    const currentScreen = currentRoute ? currentRoute.name : "BottomTabs";
    setCurrentScreen(currentScreen);
  }, [navigationState]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: currentScreen !== "BottomTabs" }}
    >
      <Stack.Screen name="BottomTabs" component={TabNavigator} />
      <Stack.Screen
        options={{ headerTitle: "Finansal Rapor" }}
        name="FinancialReportsScreen"
        component={FinancialReportsScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "Finansal Rapor" }}
        name="CreateFinancialReportScreen"
        component={CreateFinancialReportScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
