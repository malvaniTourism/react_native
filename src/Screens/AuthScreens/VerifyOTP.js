import React, { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TextField from '../../Components/Customs/TextField'
import { OTP, SignInFields } from '../../Services/Constants/FIELDS'
import Header from '../../Components/Common/Header'
import CustomButton from '../../Components/Customs/Button'
import styles from './Styles'
import { comnPost } from '../../Services/Api/CommonServices'
import { connect } from 'react-redux'
import { saveAccess_token, setLoader } from '../../Reducers/CommonActions'
import Loader from '../../Components/Customs/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontIcons from 'react-native-vector-icons/FontAwesome5';
import COLOR from '../../Services/Constants/COLORS'
import DIMENSIONS from '../../Services/Constants/DIMENSIONS'

const VerifyOTP = ({ navigation, route, ...props }) => {
    const [otp, setOtp] = useState('');
    const [mobile, setMobile] = useState(route.params.mobile);

    const setValue = (val, isVal, index) => {
        switch (index) {
            case 0:
                setOtp(val)
                break;
        }
    }

    const getValue = (i) => {
        switch (i) {
            case 0:
                return otp
        }
    }

    const verifyOtp = () => {
        const data = {
            mobile,
            otp
        }
        comnPost('auth/verifyOtp', data)
            .then(res => {
                if (res.data.success) {
                    props.setLoader(true)
                    AsyncStorage.setItem('access_token', res.data.data.access_token)
                    props.saveAccess_token(res.data.data.access_token)
                    navigation.navigate('Home')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Header name={'Verify OTP'} style={{ marginBottom: 50 }} />
            <Loader />
            <FontIcons name="user-circle" color={COLOR.black} size={DIMENSIONS.userIconSize} style={styles.appLogo} />
            {OTP.map((field, index) => {
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
                title={'Verify'}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.buttonTitle}
                disabled={false}
                raised={true}
                type={'Submit'}
                onPress={() => verifyOtp()}
            />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        access_token: state.commonState.access_token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveAccess_token: data => {
            dispatch(saveAccess_token(data))
        },
        setLoader: data => {
            dispatch(setLoader(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP)
