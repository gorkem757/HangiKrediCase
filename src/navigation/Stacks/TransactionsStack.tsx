import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransactionsScreen } from "../../screens";

const Stack = createStackNavigator();

const TransactionsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
