import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'

const SmallCard = ({ style, Icon, title }) => {
  return (
    <View style={[styles.smallCard, style]}>
      <View style={styles.smallCardIcon}>{Icon}</View>
      <Text>{title}</Text>
    </View>
  )
}

export default SmallCard
