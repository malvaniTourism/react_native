import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import SmallCard from '../Components/Customs/SmallCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';
import { comnGet } from '../Services/Api/CommonServices';
import { connect } from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook from your navigation library

const ExploreList = ({ navigation, ...props }) => {
    const [cities, setCities] = useState([]); // State to store cities
    const [error, setError] = useState(null); // State to store error message

    useEffect(() => {
        comnGet('v1/cities', props.access_token)
            .then(res => {
                setCities(res.data.data.data); // Update cities state with response data
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // Update error state with error message
            });
    }, []);

    // Function to handle SmallCard click
    const handleSmallCardClick = () => {
        // Navigate to CityScreen component
        navigation.navigate('CityDetails'); // Replace 'CityScreen' with the name of your CityScreen component in your navigation stack
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {cities.map(city => (
                        <TouchableOpacity onPress={handleSmallCardClick}>
                            <SmallCard
                                Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />}
                                title={city.name}
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

export default connect(mapStateToProps)(ExploreList);
