import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          marginTop: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        profile screen
      </Text>
    </TouchableOpacity>
  );
};

export default Profile;
