import React, { useState } from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import { ListItem } from '@rneui/themed'
import Header from '../Components/Common/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';

const RoutesList = ({ navigation, route }) => {
    const [list, setList] = useState([
        {
            id: 1,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            name: 'Sion Circle'
        },
        {
            id: 2,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            name: 'Sion Station'
        },
        {
            id: 3,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            name: 'Priyadarshini'
        },
        {
            id: 4,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            name: 'Chembur'
        },
        {
            id: 5,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            name: 'Dombivli'
        },
    ])

    const renderItem = ({ item }) => {
        return (
            <ListItem bottomDivider>
                {/* <Avatar source={{ uri: item.avatar_url }} /> */}
                <Text>{item.id}</Text>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    const goBack = () => {
        navigation.goBack();
    }

    const showTiming = () => {
        navigation.navigate('BusTimings')
    }

    return (
        <View>
            <Header name={route.params.name} goBack={goBack}
                startIcon={<Ionicons name="bus" color={COLOR.black} size={DIMENSIONS.userIconSize} onPress={() => goBack()} />}
                endIcon={<Feather name="clock" color={COLOR.black} size={DIMENSIONS.userIconSize} onPress={() => showTiming()} />}
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

export default RoutesList
