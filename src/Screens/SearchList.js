import React, { useState } from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import { ListItem } from '@rneui/themed'
import Header from '../Components/Common/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';
import RouteLine from '../Components/Customs/RouteLine';

const SearchList = ({ navigation }) => {
  const [list, setList] = useState([
    {
      id: 1,
      number: 101,
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      name: 'Sion - Dombivli'
    },
    {
      id: 2,
      number: 165,
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      name: 'Dombivli - Sion'
    },
  ])

  const getRoutes = (name) => {
    navigation.navigate('RoutesList', { name })
  }

  const renderItem = ({ item }) => {
    return (
      <ListItem bottomDivider onPress={() => getRoutes(item.name)}>
        {/* <Avatar source={{ uri: item.avatar_url }} /> */}
        <RouteLine />
        <Text>{item.id}</Text>
        <ListItem.Content>
          <ListItem.Title>{item.number}</ListItem.Title>
          <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Header name={'Search List'} goBack={goBack}
        startIcon={<Ionicons name="chevron-back-outline" color={COLOR.black} size={DIMENSIONS.userIconSize} onPress={() => goBack()} />}
      />
      <SafeAreaView>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  )
}

export default SearchList
