import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import History from "screens/safe/History";

import Home from "screens/safe/Home";
import Inventory from "screens/safe/Inventory";
import Profile from "screens/safe/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="History" component={History} />
      <Screen name="Inventory" component={Inventory} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}