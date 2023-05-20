import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import SmallCard from "../Components/Customs/SmallCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLOR from "../Services/Constants/COLORS";
import DIMENSIONS from "../Services/Constants/DIMENSIONS";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook from your navigation library
import Loader from "../Components/Customs/Loader";
import TopComponent from "../Components/Common/TopComponent";

const Explore = () => {
  const navigation = useNavigation(); // Get the navigation object using the useNavigation hook

  // Function to handle SmallCard click
  const handleSmallCardClick = (title) => {
    console.log(title);
    // Navigate to CityScreen or PlaceList component based on title parameter
    if (title === "Cities") {
      navigation.navigate("ExploreList"); // Replace 'CityScreen' with the name of your CityScreen component in your navigation stack
    } else if (title === "Places") {
      navigation.navigate("PlaceList"); // Replace 'PlaceList' with the name of your PlaceList component in your navigation stack
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Loader />
        <TopComponent navigation={navigation} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => handleSmallCardClick("Cities")}>
            <SmallCard
              Icon={
                <Ionicons
                  name="bus"
                  color={COLOR.yellow}
                  size={DIMENSIONS.iconSize}
                />
              }
              title="Cities"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSmallCardClick("Places")}>
            <SmallCard
              Icon={
                <Ionicons
                  name="bus"
                  color={COLOR.yellow}
                  size={DIMENSIONS.iconSize}
                />
              }
              title="Places"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Explore;
