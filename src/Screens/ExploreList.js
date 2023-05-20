import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import SmallCard from "../Components/Customs/SmallCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLOR from "../Services/Constants/COLORS";
import DIMENSIONS from "../Services/Constants/DIMENSIONS";
import { comnGet } from "../Services/Api/CommonServices";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook from your navigation library
import Loader from "../Components/Customs/Loader";
import TopComponent from "../Components/Common/TopComponent";
import { setLoader } from "../Reducers/CommonActions";

const ExploreList = ({ navigation, ...props }) => {
  const [cities, setCities] = useState([]); // State to store cities
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    props.setLoader(true);

    comnGet("v1/cities", props.access_token)
      .then((res) => {
        console.log(res);
        setCities(res.data.data.data); // Update cities state with response data
        props.setLoader(false);
      })
      .catch((error) => {
        props.setLoader(false);
        setError(error.message); // Update error state with error message
      });
  }, []);

  // Function to handle SmallCard click
  const handleSmallCardClick = (id) => {
    console.log("click");
    // Navigate to CityScreen component
    navigation.navigate("CityDetails", { id }); // Replace 'CityScreen' with the name of your CityScreen component in your navigation stack
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Loader />
        <TopComponent navigation={navigation} />
        <View style={{ flexDirection: "row" }}>
          {cities.map((city) => (
            <TouchableOpacity onPress={() => handleSmallCardClick(city.id)}>
              <SmallCard
                Icon={
                  <Ionicons
                    name="bus"
                    color={COLOR.yellow}
                    size={DIMENSIONS.iconSize}
                  />
                }
                title={city.name}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    access_token: state.commonState.access_token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoader: (data) => {
      dispatch(setLoader(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreList);
