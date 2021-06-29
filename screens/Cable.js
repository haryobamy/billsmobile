import React from "react";
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  SectionList,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
} from "react-native";
import { BuyButton, HeaderBar } from "../components";

import { SIZES, FONTS, COLORS, images, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Cable = ({ navigation, route }) => {
  const data = [
    {
      id: 1,
      img: images.dstv,
      title: "dstv",

      amount: 480,
      backgroundColor: COLORS.white,
    },
    {
      id: 2,
      img: images.gotv,
      title: "gotv",
      amount: 2000,
      backgroundColor: COLORS.white,
    },
    {
      id: 3,
      img: images.startimes,
      title: "startimes",
      amount: 3080,

      backgroundColor: COLORS.white,
    },
  ];

  const featuresData = [
    {
      id: 1,
      icon: icons.phone,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "Top Up",
    },
    {
      id: 2,
      icon: icons.send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Transfer",
    },
    {
      id: 3,
      icon: icons.internet,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: "Internet",
    },
    {
      id: 4,
      icon: icons.wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "Cable",
    },
    {
      id: 5,
      icon: icons.bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "Bill",
    },
    {
      id: 6,
      icon: icons.game,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: "Education",
    },
    {
      id: 7,
      icon: icons.reload,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "Mobile Prepaid",
    },
    {
      id: 8,
      icon: icons.more,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "More",
    },
  ];
  const [product, setProduct] = React.useState(null);
  const [network, setNetwork] = React.useState(data);
  const [features, setFeatures] = React.useState(featuresData);

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

  function renderNetwork() {
    const Header = () => (
      <View style={{ marginBottom: SIZES.base, marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>
          Select Service Provider
        </Text>
      </View>
    );
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          width: 60,
          alignItems: "center",
          marginLeft: 60,
        }}
        // onPress={() => console.log(item.description)}
        // onPress={() => navigation.navigate("TopUp", { item })}
        onPress={() => console.log(item)}
      >
        <View
          style={{
            height: 50,
            width: 50,
            // marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            border: "3px solid white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
              borderRadius: 45,

              tintColor: item.color,
            }}
          />
        </View>
        {/* <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body5 }}>
          {item.description}
        </Text> */}
      </TouchableOpacity>
    );

    return (
      <View>
        <Header />

        <FlatList
          // ListHeaderComponent={Header}
          data={network}
          horizontal
          // numRows={5}
          // columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          style={{ marginTop: SIZES.padding }}
          contentContainerStyle={{
            alignItems: "center",
            // marginHorizontal: SIZES.padding * 6,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
        {/* meter number */}
        {/* userName */}
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text style={{ color: COLORS.lightGray, ...FONTS.body3 }}>
            Smart Card Number
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
            placeholder="Enter Smart Card number"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            textContentType="telephoneNumber"
            keyboardType="numeric"
          />
        </View>
        {/* network logo for network selection */}
        {renderNetwork()}
        {renderPlans()}
        {/* phone number */}
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
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              width: 30,
              height: 30,
              bottom: 10,
            }}
            // onPress={getContact}
          >
            <Image
              source={icons.user}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.green,
                // backgroundColor: COLORS.lightGreen,
                // borderRadius: 45,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View>
        <BuyButton
          label="Buy"
          onPress={() => console.log("top up data")}
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

  function renderPlans() {
    const Header = () => (
      <View style={{ marginBottom: SIZES.padding }}>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>Plans</Text>
      </View>
    );
    const renderItem = ({ item }) => (
      <View>
        <TouchableOpacity
          style={{
            // marginBottom: SIZES.padding * 2,
            width: 60,
            alignItems: "center",
            marginHorizontal: SIZES.radius,
          }}
          // onPress={() => console.log(item.description)}
          // onPress={() => navigation.navigate("TopUp", { item })}
          onPress={() => console.log(item)}
        >
          <View
            style={{
              height: 120,
              width: 120,

              marginBottom: 20,
              borderRadius: 20,
              backgroundColor: COLORS.gray,
              border: "3px solid white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  ...FONTS.h5,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: COLORS.black,
                }}
              >
                DSTv Compact + French Touch
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  textAlign: "center",
                  color: COLORS.lightGray,
                }}
              ></Text>
              <Text
                style={{
                  ...FONTS.body4,
                  textAlign: "center",
                  flexWrap: "wrap",
                  color: COLORS.lightGray,
                }}
              >
                pay ₦25000
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* view all section */}
      </View>
    );

    const Footer = () => {
      return (
        <View
          style={{
            flexDirection: "row",
            marginBottom: SIZES.padding,
            marginHorizontal: SIZES.radius,
          }}
        >
          <View style={{ flex: 1 }}></View>
          <TouchableOpacity onPress={() => console.log("View All")}>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>View All</Text>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
        ListFooterComponent={Footer}
      />
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
        {renderHeader()}

        <ScrollView showsVerticalScrollIndicator={false}>
          {renderForm()}

          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Cable;
