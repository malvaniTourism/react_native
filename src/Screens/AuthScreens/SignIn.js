import React from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import TextField from '../../Components/Customs/TextField'
import { SignInFields } from '../../Services/Constants/FIELDS'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setValue = (val, isVal, index) => {
    switch (index) {
      case 0:
        setUsername(val)
        break;
      case 1:
        setPassword(val)
        break;
    }
  }

  const getValue = (i) => {
    switch (i) {
      case 0:
        return username
      case 1:
        return password
    }
  }

  return (
    <View>
      {SignInFields.map((field, index) => {
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
            setChild={(v, i) => setValue(v, i, index)}
          />
        )
      })}
    </View>
  )
}

export default SignIn
