import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CampaignsScreen } from "../../screens";

const Stack = createStackNavigator();

const CampaignsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Campaigns" component={CampaignsScreen} />
    </Stack.Navigator>
  );
};

export default CampaignsStack;
