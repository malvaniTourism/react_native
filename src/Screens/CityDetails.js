import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import SmallCard from '../Components/Customs/SmallCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Services/Constants/COLORS';
import DIMENSIONS from '../Services/Constants/DIMENSIONS';
import { comnGet } from '../Services/Api/CommonServices';
import { connect } from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CityDetails = ({ navigation, ...props }) => {
    const [city, setCity] = useState([]); // State to store city
    const [error, setError] = useState(null); // State to store error message

    useEffect(() => {
        comnGet('v1/city', props.access_token)
            .then(res => {
                setCity(res.data.data); // Update city state with response data
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // Update error state with error message
            });
    }, []);

    // const navigation = useNavigation(); // Get the navigation object using the useNavigation hook

    // Function to handle SmallCard click
    const handleSmallCardClick = () => {
        // Navigate to CityScreen component
        // navigation.navigate('CityDetails'); // Replace 'CityScreen' with the name of your CityScreen component in your navigation stack
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {city}
                    {/* {city.map(city => (
                        <TouchableOpacity onPress={handleSmallCardClick}>
                            <SmallCard
                                Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />}
                                title={city.name}
                            />
                        </TouchableOpacity>
                    ))} */}
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

export default connect(mapStateToProps)(CityDetails);
