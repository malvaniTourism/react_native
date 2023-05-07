import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Header from '../Components/Common/Header'
import COLOR from '../Services/Constants/COLORS'
import DIMENSIONS from '../Services/Constants/DIMENSIONS'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { comnGet, comnPost } from '../Services/Api/CommonServices';
import { connect } from "react-redux";
import Loader from "../Components/Customs/Loader"
import TopComponent from "../Components/Common/TopComponent"

const Profile = ({ navigation, ...props }) => {
  const [profile, setProfile] = useState([]); // State to store places
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    comnGet('v1/user-profile', props.access_token)
      .then(res => {
        setProfile(res.data.data); // Update places state with response data
      })
      .catch(error => {
        console.log(error);

        setError(error.message); // Update error state with error message
      });
  }, []);

  const goBack = () => {
    navigation.goBack();
  }

  const handleLogout = () => {
    // Call your logout API here
    // For example:
    console.log("ads", props.access_token);
    comnPost('v1/logout')
      .then(res => {
        console.log(res);
        if (res.data.success) {
          navigation.navigate('Login')
        }
        // Do something after successful logout, such as clearing your access_token from state
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Name: {profile.name}</Text>
        <Text>Email: {profile.email}</Text>
        <Text>Profile: {profile.profile}</Text>
        <Text>Profile Picture: {profile.profile_picture}</Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    access_token: state.commonState.access_token,
  }
}

export default connect(mapStateToProps)(Profile)