import { Button } from '@rneui/themed'
import React from 'react'

const SubmitButton = ({ title, style, isDisabled, raised, type, onPress }) => {
    return (
        <Button
            title={title}
            style={style}
            disabled={isDisabled}
            raised={raised}
            type={type}
            onPress={onPress}
        />
    )
}

export default SubmitButton
