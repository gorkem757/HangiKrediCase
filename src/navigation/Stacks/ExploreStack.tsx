import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ExploreScreen } from "../../screens";

const Stack = createStackNavigator();

const ExploreStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
