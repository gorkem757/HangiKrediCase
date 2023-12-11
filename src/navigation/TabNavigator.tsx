import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExploreStack, CategoriesStack, StatusStack, CampaignsStack, TransactionsStack } from "./Stacks";
import { CategoriesTabIcon, ExploreTabIcon, TabIcon } from "../components/Svgs/TabBarIcons";
import { ColorPalette } from "../styles/ColorPalette";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: ColorPalette.Secondary500,
        tabBarInactiveTintColor: ColorPalette.Primary700,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="Keşfet"
        component={ExploreStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={CategoriesTabIcon} focused={focused} />
          ),
        }}
        name="Kategoriler"
        component={CategoriesStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="Durum"
        component={StatusStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="Kampanyalar"
        component={CampaignsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="İşlemler"
        component={TransactionsStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
