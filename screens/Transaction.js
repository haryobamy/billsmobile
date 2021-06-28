import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Transaction = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          marginTop: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        transaction screen
      </Text>
    </TouchableOpacity>
  );
};

export default Transaction;
