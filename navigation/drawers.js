import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Home, Scan, Profile, Setting } from "../screens";
import { COLORS, icons } from "../constants";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Drawer from "react-native-drawer";

const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({ focused }) => (
            <Image
              source={icons.more}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.white : COLORS.blue,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Setting}
        options={{
          drawerIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.white : COLORS.blue,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawers;
