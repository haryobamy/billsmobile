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
  VirtualizedList,
} from "react-native";
import { BuyButton, HeaderBar } from "../components";
import * as Contacts from "expo-contacts";

import { SIZES, FONTS, COLORS, images, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Internet = ({ navigation, route }) => {
  const data = [
    {
      id: 1,
      img: icons.etisalat,
      title: "9MOBILE",

      amount: 480,
      backgroundColor: COLORS.black,
    },
    {
      id: 2,
      img: icons.airtel,
      title: "AIRTEL",
      amount: 2000,
      backgroundColor: COLORS.white,
    },
    {
      id: 3,
      img: icons.glo,
      title: "GLO",
      amount: 3080,

      backgroundColor: COLORS.white,
    },
    {
      id: 4,
      img: icons.mtn,
      title: "MTN",
      amount: 4648,
      backgroundColor: COLORS.white,
    },
    {
      id: 5,
      img: icons.smile,
      title: "SMILE",
      amount: 460,
      backgroundColor: COLORS.black,
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [Plans, setPlans] = React.useState([]);
  const [selectedPlan, setSelectedPlan] = React.useState(null);
  const [network, setNetwork] = React.useState(data);

  const [features, setFeatures] = React.useState(featuresData);

  const [contacts, setContacts] = React.useState([]);

  const getContact = () => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  };

  React.useEffect(() => {
    // setDummy(data);
    // let planData = dummy.map((item) => {
    //   return {
    //     id: item.id,
    //     network: item.title,
    //     image: item.img,
    //   };
    // });
    // setPlans(planData);
    // console.log(planData);
    // if (planData.length > 0) {
    //   let defaultData = planData.filter((a) => a.network == "MTN");
    // }
    // if (defaultData.length > 0) {
    //   setSelectedPlan(defaultData[0]);
    // }
  }, []);

  React.useEffect(() => {
    let { item } = route.params;
    setProduct(item);
  }, []);

  // function renderContact() {
  //   return (
  //     <Modal animationType="slide" transparent={true} visible={modalVisible}>
  //       <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
  //         <View
  //           style={{
  //             flex: 1,
  //             backgroundColor: "#fff",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <FlatList
  //             data={contacts}
  //             renderItem={({ item }) => {
  //               return (
  //                 <Text>{`${item.name} (${
  //                   item.phoneNumbers ? item.phoneNumbers[0].number : ""
  //                 })`}</Text>
  //               );
  //             }}
  //           />
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </Modal>
  //   );
  // }

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
          Select network provider
        </Text>
      </View>
    );
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          width: 60,
          alignItems: "center",
          marginLeft: 30,
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
        <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body5 }}>
          {item.description}
        </Text>
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
            marginLeft: -30,
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
            onPress={getContact}
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
        {/* network logo for network selection */}
        {renderNetwork()}
        {renderPlans()}
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
            height: 90,
            width: 90,

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
                ...FONTS.h2,
                fontWeight: "bold",
                textAlign: "center",
                color: COLORS.black,
              }}
            >
              100MB
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                textAlign: "center",
                color: COLORS.lightGray,
              }}
            >
              2 days
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                textAlign: "center",
                flexWrap: "wrap",
                color: COLORS.lightGray,
              }}
            >
              pay ???25000
            </Text>
          </View>
          {/* <Image
            source={item.icons}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
              borderRadius: 45,

              // tintColor: item.color,
            }}
          /> */}
        </View>
        {/* <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body5 }}>
          {item.description}
        </Text> */}
      </TouchableOpacity>
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
        pagingEnabled={true}
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
        {renderForm()}

        {renderButton()}

        {/* <ScrollView>
          

          

          
        </ScrollView> */}
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Internet;
