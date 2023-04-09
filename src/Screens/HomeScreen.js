import { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import SearchPanel from "../Components/Common/SearchPanel"
import TopComponent from "../Components/Common/TopComponent"
import Banner from "../Components/Customs/Banner"
import SearchBar from "../Components/Customs/Search"
import SmallCard from "../Components/Customs/SmallCard"
import { BusNo } from "../Services/Constants/FIELDS"
import styles from "./Styles"
import FontIcons from 'react-native-vector-icons/FontAwesome5';
import COLOR from "../Services/Constants/COLORS"
import DIMENSIONS from "../Services/Constants/DIMENSIONS"
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('')
    const [bannerImages, setBannerImages] = useState(
        [
            'https://4kwallpapers.com/images/walls/thumbs_3t/912.jpg',
            'https://c4.wallpaperflare.com/wallpaper/977/138/381/tbilisi-georgia-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/766/970/409/cities-city-building-cityscape-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/631/683/713/nature-bridge-sky-city-wallpaper-preview.jpg'
        ]
    )

    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TopComponent />
                <FontIcons name="user-circle" color={COLOR.black} size={DIMENSIONS.userIconSize} style={styles.userIcon} onPress={() => openDrawer()} />
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

export default HomeScreen