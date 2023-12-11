import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoriesScreen } from "../../screens";

const Stack = createStackNavigator();

const CategoriesStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
