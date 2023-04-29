import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SignUpFields } from '../../Services/Constants/FIELDS'
import TextField from '../../Components/Customs/TextField'
import Header from '../../Components/Common/Header'
import CustomButton from '../../Components/Customs/Button'
import styles from './Styles'
import { comnPost } from '../../Services/Api/CommonServices'

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [role, setRole] = useState('');

  const setValue = (val, isVal, index) => {
    switch (index) {
      case 0:
        setName(val)
        break;
      case 0:
        setEmail(val)
        break;
      case 0:
        setMobile(val)
        break;
      case 1:
        setPassword(val)
        break;
      case 1:
        setCpassword(val)
        break;
      case 1:
        setRole(val)
        break;
    }
  }

  const getValue = (i) => {
    switch (i) {
      case 0:
        return name
      case 0:
        return email
      case 0:
        return mobile
      case 1:
        return password
      case 1:
        return cpassword
      case 1:
        return role
    }
  }

  const Register = () => {
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      password_confirmation: cpassword,
      role_id: role
    }
    comnPost('auth/register', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  const signInScreen = () => {
    navigation.navigate('Login');
    console.log('clicked');
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Header name={'Register'} style={{ marginBottom: 50 }} />
      {SignUpFields.map((field, index) => {
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
      <CustomButton
        title={'Register'}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitle}
        disabled={false}
        raised={true}
        type={'Submit'}
        onPress={() => Register()}
      />
      <View style={styles.haveAcc}>
        <Text>Already have an Account? </Text>
        <TouchableOpacity onPress={() => signInScreen()}><Text> Sign In</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp
