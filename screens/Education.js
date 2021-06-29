import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Education = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          marginTop: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        Education screen
      </Text>
    </TouchableOpacity>
  );
};

export default Education;
