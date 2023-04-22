import React from 'react'
import { View } from 'react-native'
import Header from '../Components/Common/Header'
import COLOR from '../Services/Constants/COLORS'
import DIMENSIONS from '../Services/Constants/DIMENSIONS'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation, route }) => {

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Header name={'Profile'}
        startIcon={<Ionicons name="chevron-back-outline" color={COLOR.black} size={DIMENSIONS.userIconSize} onPress={() => goBack()} />}
      />
    </View>
  )
}

export default Profile
