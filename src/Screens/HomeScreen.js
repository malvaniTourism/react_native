import { useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"
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
import { comnPost, login } from '../Services/Api/CommonServices'
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

    useEffect(() => {
        saveToken()
        SplashScreen.hide();
        navigation.navigate('Login')
        if (AsyncStorage.getItem('access_token') == '') {
        }
        props.setLoader(false)
    }, [])

    const saveToken = async () => {
        props.saveAccess_token(await AsyncStorage.getItem('access_token'))
    }

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
                                onChangeText={setSearchValue}
                            />
                        )
                    })
                }
                <SearchPanel />
                <Banner bannerImages={bannerImages} />
                <View style={{ flexDirection: 'row' }}>
                    <SmallCard Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title="One Way Ticket" />
                    <SmallCard Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title="Bus Pass" />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <SmallCard Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title="Chalo Bus" />
                    <SmallCard Icon={<Ionicons name="bus" color={COLOR.yellow} size={DIMENSIONS.iconSize} />} title="Card Recharge" />
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