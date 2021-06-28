import React from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
} from "react-native";

import { BuyButton, HeaderBar } from "../components";

import { SIZES, FONTS, COLORS, images, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const TopUp = ({ navigation, route }) => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    let { item } = route.params;
    setProduct(item);
  }, []);

  function renderHeader() {
    return (
      <HeaderBar
        label={product?.description}
        right={false}
        labelColor={product?.color}
      />
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}
      >
        {/* network logo for network selection */}

        {/* phonenumber*/}
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text style={{ color: COLORS.lightGray, ...FONTS.body3 }}>
            Phone Number
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Enter phone number"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            textContentType="telephoneNumber"
            keyboardType="numeric"
          />
        </View>

        {/* Amount */}

        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Amount
          </Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 50,
                // marginHorizontal: 0,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: "row",
                ...FONTS.body2,
              }}
            >
              <View style={{ justifyContent: "center" }}></View>
              <View
                style={{
                  justifyContent: "center",
                  marginLeft: 4,
                  marginBottom: -12,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.gray,
                  }}
                >
                  ₦
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3,
              }}
              placeholder="Enter Amount"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View>
        <BuyButton
          label="Buy"
          onPress={() => console.log("top up buy")}
          customContainerStyle={
            {
              // height: 60,
              // backgroundColor: COLORS.black, loading state
              // borderRadius: SIZES.radius / 1.5,
              // alignItems: "center",
              // justifyContent: "center",
            }
          }
        />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.darkBlue, COLORS.blue]} // needs attention lime or blue
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default TopUp;
