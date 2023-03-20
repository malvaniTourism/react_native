import React, { useState } from 'react'
import { View } from 'react-native'
import { SrcDest } from '../../Services/Constants/FIELDS'
import CustomButton from '../Customs/Button'
import TextField from '../Customs/TextField'
import styles from './Styles'

const SearchPanel = () => {
    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')

    const setValue = (v, i, index) => {
        switch (index) {
            case 0:
                setSource(v)
                break;
            case 1:
                setDestination(v)
                break;
        }
    }

    const getValue = (i) => {
        switch (i) {
            case 0:
                return source;
            case 1:
                return destination;
        }
    }

    const onPress = () => {

    }

    return (
        <View style={{ marginVertical: 20 }}>
            <View style={styles.fieldsView}>
                {
                    SrcDest.map((field, index) => {
                        return (
                            <TextField
                                name={field.name}
                                label={field.name}
                                placeholder={field.placeholder}
                                fieldType={field.type}
                                length={field.length}
                                required={field.required}
                                disabled={field.disabled}
                                value={getValue(index)}
                                setChild={(val, i) => setValue(val, i, index)}
                                style={styles.searchPanelField}
                                containerStyle={styles.textContainerStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                            />
                        )
                    })
                }
            </View>
            <CustomButton
                title={'Search'}
                containerStyle={styles.searchButtonContainerStyle}
                buttonStyle={styles.searchButtonStyle}
                titleStyle={styles.buttonTitleStyle}
                disabled={false}
                raised={true}
                type={'Submit'}
                onPress={onPress}
            />
        </View>
    )
}

export default SearchPanel
