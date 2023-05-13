import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import { ListItem } from '@rneui/themed'
import Header from '../Components/Common/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';
import RouteLine from '../Components/Customs/RouteLine';
import { connect } from 'react-redux';
import { comnPost } from '../Services/Api/CommonServices';

const SearchList = ({ navigation, ...props }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    searchRoute()
  }, [])

  const getRoutes = (item) => {
    navigation.navigate('RoutesList', { item })
  }

  const searchRoute = () => {
    const data = {
        source_place_id: props.source.id,
        destination_place_id: props.destination.id
    }
    comnPost('v1/routes', data)
    .then(res => {
        if (res.data.success) {
          console.log('--00--00 -- ', res.data.data);
            setList(res.data.data)
        } else {
            
        }
    })
    .catch(err => console.log(err))
}

  const renderItem = ({ item }) => {
    return (
      <ListItem bottomDivider onPress={() => getRoutes(item)}>
        {/* <Avatar source={{ uri: item.avatar_url }} /> */}
        <RouteLine />
        <Text>{item.id}</Text>
        <ListItem.Content>
          {/* <ListItem.Title>{item.number}</ListItem.Title> */}
          <ListItem.Title>{item.name}</ListItem.Title>
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
        {list[0] ?
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderItem}
        /> : 
          <Text>No Routes Available</Text>
        }
      </SafeAreaView>
    </View>
  )
}

const mapStateToProps = state => {
  return {
      source: state.commonState.source,
      destination: state.commonState.destination
  }
}

export default connect(mapStateToProps) (SearchList)

