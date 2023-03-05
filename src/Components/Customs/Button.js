import { Button } from '@rneui/themed'
import React from 'react'

const CustomButton = ({ title, containerStyle, buttonStyle, titleStyle, isDisabled, raised, type, onPress }) => {
    return (
        <Button
            title={title}
            containerStyle={containerStyle}
            buttonStyle={buttonStyle}
            titleStyle={titleStyle}
            disabled={isDisabled}
            raised={raised}
            type={type}
            onPress={onPress}
        />
    )
}

export default CustomButton
