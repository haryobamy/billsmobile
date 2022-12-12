import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Home, Scan, Signup } from "./screens";

import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRoutName={"Signup"}
      >
        <Stack.Screen name="Signup" component={Signup} />

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* <Stack.Screen name="Scan" component={Scan}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
