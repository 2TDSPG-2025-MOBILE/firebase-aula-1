import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { AntDesign } from "@expo/vector-icons";


import Home from "screens/safe/Home";
import { StyleSheet } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          margin: 16,
          borderRadius: 16
        },
        tabBarActiveTintColor: '#000'
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => <AntDesign size={size} color={color} name="home" />,
        }}
      />

      <Screen
        name="History"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => <AntDesign size={size} color={color} name="home" />,
        }}
      />

      <Screen
        name="Inventory"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => <AntDesign size={size} color={color} name="home" />,
        }}
      />

      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => <AntDesign size={size} color={color} name="home" />,
        }}
      />
    </Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})