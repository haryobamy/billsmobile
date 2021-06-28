import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  Home,
  Scan,
  Signup,
  TopUp,
  Transfer,
  Transaction,
  Internet,
  Login,
} from "./screens";

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
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Internet" component={Internet} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Login" component={Login} />

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* <Stack.Screen name="Scan" component={Scan}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
