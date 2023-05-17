import { useEffect, useState } from "react"
import { View, Text, ScrollView, LogBox, Icon } from "react-native"
import SearchPanel from "../Components/Common/SearchPanel"
import TopComponent from "../Components/Common/TopComponent"
import Banner from "../Components/Customs/Banner"
import SearchBar from "../Components/Customs/Search"
import SmallCard from "../Components/Customs/SmallCard"
import { BusNo } from "../Services/Constants/FIELDS"
import styles from "./Styles"
import COLOR from "../Services/Constants/COLORS"
import DIMENSIONS from "../Services/Constants/DIMENSIONS"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { comnGet, comnPost, login } from '../Services/Api/CommonServices'
import { connect } from "react-redux";
import { saveAccess_token, setLoader } from "../Reducers/CommonActions"
import Loader from "../Components/Customs/Loader"
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation, ...props }) => {
    const [searchValue, setSearchValue] = useState('')
    const [bannerImages, setBannerImages] = useState(
        [
            'https://4kwallpapers.com/images/walls/thumbs_3t/912.jpg',
            'https://c4.wallpaperflare.com/wallpaper/977/138/381/tbilisi-georgia-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/766/970/409/cities-city-building-cityscape-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/631/683/713/nature-bridge-sky-city-wallpaper-preview.jpg'
        ]
    )
    const [categories, setCategories] = useState([])
    const [cities, setCities] = useState([])
    const [projects, setProjects] = useState([])
    const [stops, setStops] = useState([])
    const [place_category, setPlace_category] = useState([])
    const [places, setPlaces] = useState([])

    const [error, setError] = useState(null); // State to store error message

    // const categories = [
    //     { name: 'Category 1', icon: 'heart' },
    //     { name: 'Category 2', icon: 'book' },
    //     { name: 'Category 3', icon: 'camera' },
    // ];

    useEffect(() => {
        LogBox.ignoreAllLogs();
        saveToken()
        SplashScreen.hide();
        props.setLoader(false)
    }, [])

    useEffect(() => {
        if (props.access_token) {
            callLandingPageAPI();
        }
    }, [props.access_token]);

    const saveToken = async () => {
        console.log(await AsyncStorage.getItem('access_token'));
        props.saveAccess_token(await AsyncStorage.getItem('access_token'))
        if (await AsyncStorage.getItem('access_token') == null || await AsyncStorage.getItem('access_token') == '') {
            navigation.navigate('Login')
        }
    }

    const searchPlace = (val) => {
        setSearchValue(val)
        if (searchValue.length > 2) {
            comnPost('search', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err))
        }
    }

    const callLandingPageAPI = () => {
        // Make the API call here
        console.log(props.access_token);
        comnGet("v1/landingpage", props.access_token)
            .then(res => {
                setCategories(res.data.data.categories); 
                setCities(res.data.data.cities); 
                setProjects(res.data.data.projects); 
                setStops(res.data.data.stops); 
                setPlace_category(res.data.data.place_category); 
                setPlaces(res.data.data.places); 
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // Update error state with error message
            });
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Loader />
                <TopComponent navigation={navigation} />
                {
                    BusNo.map((field, index) => {
                        return (
                            <SearchBar
                                style={styles.homeSearchBar}
                                placeholder={field.placeholder}
                                value={searchValue}
                                onChangeText={(v) => searchPlace(v)}
                            />
                        )
                    })
                }
                <SearchPanel navigation={navigation} />
                <Banner bannerImages={bannerImages} />

                <View style={{ flexDirection: 'row' }}>
                    <SmallCard Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title="Chalo Bus" />
                    <SmallCard Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title="Card Recharge" />
                </View>
                <Text>=====================================================</Text>
                <Text>===================Categories========================</Text>
                <Text>=====================================================</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {categories.map((category, index) => (
                        // <Text>{category.name}</Text>
                        <SmallCard key={index} Icon={<Ionicons name={`https://tour.pranavkamble.in/${category.image_url}`} color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title={category.name} />
                    ))}
                </View>
                <Text>=====================================================</Text>
                <Text>===================Cities============================</Text>
                <Text>=====================================================</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {cities.map((city, index) => (
                        // <Text>{category.name}</Text>
                        <SmallCard key={index} Icon={<Ionicons name={`https://tour.pranavkamble.in/${city.image_url}`} color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title={city.name} />
                    ))}
                </View>
                <Text>=====================================================</Text>
                <Text>===================Projects==========================</Text>
                <Text>=====================================================</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {projects.map((project, index) => (
                        // <Text>{category.name}</Text>
                        <SmallCard key={index} Icon={<Ionicons name={`https://tour.pranavkamble.in/${project.image_url}`} color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title={project.name} />
                    ))}
                </View>
                <Text>=====================================================</Text>
                <Text>======================Stops==========================</Text>
                <Text>=====================================================</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {stops.map((stop, index) => (
                        // <Text>{category.name}</Text>
                        <SmallCard key={index} Icon={<Ionicons name={`https://tour.pranavkamble.in/${stop.icon}`} color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title={stop.name} />
                    ))}
                </View>
                <Text>=====================================================</Text>
                <Text>===================Place Category====================</Text>
                <Text>=====================================================</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {place_category.map((place_cate, index) => (
                        // <Text>{category.name}</Text>
                        <SmallCard key={index} Icon={<Ionicons name={`https://tour.pranavkamble.in/${place_cate.icon}`} color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title={place_cate.name} />
                    ))}
                </View>
                <Text>=====================================================</Text>
                <Text>=====================Places==========================</Text>
                <Text>=====================================================</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {places.map((place, index) => (
                        // <Text>{category.name}</Text>
                        <SmallCard key={index} Icon={<Ionicons name={`https://tour.pranavkamble.in/${place.icon}`} color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title={place.name} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        access_token: state.commonState.access_token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveAccess_token: data => {
            dispatch(saveAccess_token(data))
        },
        setLoader: data => {
            dispatch(setLoader(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);