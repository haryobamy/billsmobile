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
  Cable,
  Profile,
  Education,
  Electricity,
} from "./screens";

import Tabs from "./navigation/tabs";
import Drawers from "./navigation/drawers";

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
        <Stack.Screen name="Cable" component={Cable} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Electricity" component={Electricity} />
        <Stack.Screen name="Education" component={Education} />

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* <Stack.Screen name="Scan" component={Scan}/> */}
        {/* Drawer */}
        <Stack.Screen name="Scan" component={Drawers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
