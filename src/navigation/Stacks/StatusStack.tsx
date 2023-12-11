import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusScreen } from "../../screens";

const Stack = createStackNavigator();

const StatusStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Status" component={StatusScreen} />
    </Stack.Navigator>
  );
};

export default StatusStack;
