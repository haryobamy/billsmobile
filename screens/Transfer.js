import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Transfer = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text
        style={{
          justifyContent: "center",
          marginTop: 90,
        }}
      >
        transfer screen
      </Text>
    </TouchableOpacity>
  );
};

export default Transfer;
