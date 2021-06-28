import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const HeaderBar = ({ right, label, labelColor }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>

      {/* Product Name Section */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 3,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: labelColor,
            }}
          >
            {label}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        {right && (
          <Image
            source={icons.info}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              backgroundColor: COLORS.emerald,

              tintColor: COLORS.white,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
