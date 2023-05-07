import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import SmallCard from '../Components/Customs/SmallCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';
import { comnGet } from '../Services/Api/CommonServices';
import { connect } from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlaceDetails = ({ navigation, route, ...props }) => {
    const [place, setPlace] = useState([]); // State to store city
    const [error, setError] = useState(null); // State to store error message

    useEffect(() => {
        console.log(route.params.id);
        comnGet(`v1/place/${route.params.id}`, props.access_token)
            .then(res => {
                setPlace(res.data.data); // Update city state with response data
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // Update error state with error message
            });
    }, []);
    
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{place.name}</Text>
                    {/* <Text> {place.tag_line}</Text> */}
                    {/* <Text>{city.description}</Text>
                    <Text>{city.projects_count}</Text>
                    <Text>{city.places_count}</Text>              */}
                </View>
            </View>
        </ScrollView>
    );
};


const mapStateToProps = state => {
    return {
        access_token: state.commonState.access_token,
    }
}

export default connect(mapStateToProps)(PlaceDetails);
