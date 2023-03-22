import React from 'react'
import { Text, View } from 'react-native'
import COLOR from '../../Services/Constants/COLORS';
import DIMENSIONS from '../../Services/Constants/DIMENSIONS';

import styles from './Styles'

const Header = ({ startIcon, name, endIcon }) => {
    return (
        <View style={styles.headerMain}>
            <View style={{ flex: 1, marginLeft: 7 }}>
                {startIcon}
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.headerText}>{name}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 7 }}>
                {endIcon}
            </View>
        </View>
    )
}

export default Header
