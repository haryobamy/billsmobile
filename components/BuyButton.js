import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const BuyButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius / 1.5,
        backgroundColor: COLORS.green,

        margin: SIZES.padding * 3,

        ...customContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...customLabelStyle, ...FONTS.h3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default BuyButton;
