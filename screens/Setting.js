import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Setting = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          marginTop: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Setting screen
      </Text>
    </TouchableOpacity>
  );
};

export default Setting;
