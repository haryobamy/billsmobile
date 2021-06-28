import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
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

  const specialPromoData = [
    {
      id: 1,
      img: images.promoBanner,
      title: "Bonus Cashback1",
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 2,
      img: images.promoBanner,
      title: "Bonus Cashback2",
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 3,
      img: images.promoBanner,
      title: "Bonus Cashback3",
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 4,
      img: images.promoBanner,
      title: "Bonus Cashback4",
      description: "Don't miss it. Grab it now!",
    },
  ];

  const [features, setFeatures] = React.useState(featuresData);
  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);
  const [showBalance, setShowBalance] = React.useState(false);

  const handlePress = (item) => {
    console.log(item.description);
    if (item.description == "Top Up") {
      navigation.navigate("TopUp", { item });
    } else if (item.description == "Transfer") {
      navigation.navigate("Transfer", { item });
    } else if (item.description == "Internet") {
      navigation.navigate("Internet", { item });
    } else if (item.description == "Cable") {
      navigation.navigate("Cable", { item });
    } else if (item.description == "Cable") {
      navigation.navigate("Cable", { item });
    }
  };

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}>
        <Image
          source={images.user}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            borderRadius: 20,
            marginRight: SIZES.base * 2,
            marginTop: SIZES.base,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h1 }}>Hello!</Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.gray,
              textTransform: "capitalize",
            }}
          >
            Badmus ayo
          </Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.lightGray,
            }}
          >
            <Image
              source={icons.bell}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 150,
          borderRadius: 20,
        }}
      >
        <LinearGradient
          colors={[COLORS.darkBlue, COLORS.blue]} // needs attention lime or blue
          style={{ flex: 1, borderRadius: SIZES.base }}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: SIZES.padding,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                Account Balance
              </Text>
              {!showBalance ? (
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  ₦ 250,0000.34
                </Text>
              ) : (
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 8,
                  }}
                >
                  N XXXXXXXX
                </Text>
              )}
            </View>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Image
                source={showBalance ? icons.disable_eye : icons.eye}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.lightGray,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: SIZES.padding,
              marginHorizontal: SIZES.padding * 2,
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Transaction")}
            >
              <View>
                <Text style={{ ...FONTS.body3, color: COLORS.green }}>
                  Last Transaction
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body4,
                  }}
                >
                  2 days ago
                </Text>
              </View>
              <View>
                <Image
                  source={icons.right_arrow}
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.white,

                    marginLeft: SIZES.padding,
                    marginTop: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* <Image
          source={images.banner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        /> */}
      </View>
    );
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{ marginBottom: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h3 }}>Features</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: "center",
        }}
        // onPress={() => console.log(item.description)}
        // onPress={() => navigation.navigate("TopUp", { item })}
        onPress={() => handlePress(item)}
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              tintColor: item.color,
            }}
          />
        </View>
        <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body5 }}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
      />
    );
  }

  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.padding,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("View All")}>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
        </TouchableOpacity>
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}
        >
          <Image
            source={images.promoBanner}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
          <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default Home;
