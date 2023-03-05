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
            <Banner />
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
