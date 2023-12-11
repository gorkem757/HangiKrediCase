import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExploreStack } from "./Stacks";
import { ExploreTabIcon, TabIcon } from "../components/Svgs/TabBarIcons";
import { ColorPalette } from "../styles/ColorPalette";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor:ColorPalette.Secondary500,
        tabBarInactiveTintColor:ColorPalette.Primary700
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
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="Kategoriler"
        component={ExploreStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="Durum"
        component={ExploreStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="Kampanyalar"
        component={ExploreStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon IconComponent={ExploreTabIcon} focused={focused} />
          ),
        }}
        name="İşlemler"
        component={ExploreStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
