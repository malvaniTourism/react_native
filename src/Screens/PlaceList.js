import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import SmallCard from '../Components/Customs/SmallCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';
import { comnGet } from '../Services/Api/CommonServices';
import { connect } from "react-redux";

const PlaceList = ({ navigation, ...props }) => {
    const [places, setPlaces] = useState([]); // State to store places
    const [error, setError] = useState(null); // State to store error message

    useEffect(() => {
        comnGet('v1/places', props.access_token)
            .then(res => {
                setPlaces(res.data.data.data); // Update places state with response data
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // Update error state with error message
            });
    }, []);

    // Function to handle SmallCard click
    const handleSmallCardClick = (id) => {
        console.log('click');
        navigation.navigate('PlaceDetails', { id }); // Replace 'CityScreen' with the name of your CityScreen component in your navigation stack
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View>
                    {places.map(place => (
                        <TouchableOpacity onPress={() => handleSmallCardClick(place.id)}>
                            <SmallCard
                                Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />}
                                title={place.name} // Update the title prop to reference the appropriate property from the city object
                            />
                        </TouchableOpacity>
                    ))}
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

export default connect(mapStateToProps)(PlaceList);
