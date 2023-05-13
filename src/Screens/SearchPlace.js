import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import Header from '../Components/Common/Header'
import SearchBar from "../Components/Customs/Search"
import styles from "./Styles"
import { comnPost } from '../Services/Api/CommonServices'
import { ListItem } from '@rneui/themed'
import { setDestination, setSource } from '../Reducers/CommonActions'

const SearchPlace = ({ navigation, route, ...props }) => {
    const [searchValue, setSearchValue] = useState('')
    const [placesList, setPlacesList] = useState([])

    useEffect(() => {
        searchPlace('')
    }, []);

    const searchPlace = (v) => {
        setSearchValue(v)
        let data = {
            search: searchValue
        }
        comnPost('v1/searchPlace', data)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.data);
                    setPlacesList(res.data.data)
                } else {

                }
            })
            .catch(err => console.log(err))
    }

    const setPlace = (place) => {
        if (route.params.type == 'Source') {
            props.setSource(place)
        } else {
            props.setDestination(place)
        }
        navigation.navigate('Home')
        setSearchValue('')
    }

    const renderItem = ({ item }) => {
        return (
            <ListItem bottomDivider onPress={() => setPlace(item)}>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <Header
                Component={
                    <SearchBar
                        style={styles.homeSearchBar}
                        placeholder={`Enter ${route.params.type}`}
                        value={searchValue}
                        onChangeText={(v) => searchPlace(v)}
                    />
                }
            />

            <SafeAreaView>
                <FlatList
                    keyExtractor={item => item.id}
                    data={placesList}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        source: state.commonState.source,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSource: data => {
            dispatch(setSource(data))
        },
        setDestination: data => {
            dispatch(setDestination(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlace)
