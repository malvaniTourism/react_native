import { useState } from "react"
import { View, Text } from "react-native"
import TopComponent from "../Components/Common/TopComponent"
import Banner from "../Components/Customs/Banner"
import SearchBar from "../Components/Customs/Search"
import SmallCard from "../Components/Customs/SmallCard"
import styles from "./Styles"

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TopComponent />
            <SearchBar style={styles.homeSearchBar} placeholder={'Search by Name'} />
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
