import { Button } from '@rneui/themed'
import React from 'react'

const SubmitButton = (props) => {
    return (
        <Button
            title={props.title}
            style={props.style}
            disabled={props.isDisabled}
            raised={props.raised}
            type={props.type}
            onPress={props.onPress}
        />
    )
}

export default SubmitButton
