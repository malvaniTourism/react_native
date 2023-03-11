import { useState } from "react"
import { View, Text } from "react-native"
import SearchPanel from "../Components/Common/SearchPanel"
import TopComponent from "../Components/Common/TopComponent"
import Banner from "../Components/Customs/Banner"
import SearchBar from "../Components/Customs/Search"
import SmallCard from "../Components/Customs/SmallCard"
import { BusNo } from "../Services/Constants/FIELDS"
import styles from "./Styles"

const HomeScreen = () => {
    const [searchValue, setSearchValue] = useState('')
    const [bannerImages, setBannerImages] = useState(
        [
            'https://4kwallpapers.com/images/walls/thumbs_3t/912.jpg',
            'https://c4.wallpaperflare.com/wallpaper/977/138/381/tbilisi-georgia-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/766/970/409/cities-city-building-cityscape-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/631/683/713/nature-bridge-sky-city-wallpaper-preview.jpg'
        ]
    )

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TopComponent />
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
                <SmallCard />
                <SmallCard />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <SmallCard />
                <SmallCard />
            </View>
        </View>
    )
}

export default HomeScreen
