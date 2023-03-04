import React, { useState } from 'react'
import { View } from 'react-native'
import { SearchBar } from '@rneui/themed';
import styles from './Styles';

const Search = ({style, placeholder}) => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View>
            <SearchBar
                placeholder={placeholder}
                onChangeText={updateSearch}
                value={search}
                lightTheme
                round
                showCancel
                containerStyle={[styles.searchContainer, style]}
                inputContainerStyle={styles.searchInputContainer}
            />
        </View>
    )
}

export default Search
