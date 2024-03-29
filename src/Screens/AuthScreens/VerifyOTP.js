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
import OtpInputs from 'react-native-otp-inputs';
import { getHash, startOtpListener, useOtpVerify } from 'react-native-otp-verify';

const VerifyOTP = ({ navigation, route, ...props }) => {
    const [otp, setOtp] = useState('');
    const [mobile, setMobile] = useState(route.params.mobile);
    const [sec, setSec] = useState(30);
    const [fillOtp, setFillOtp] = useState('0000')

    useEffect(() => {
        setInterval(() => timer(), 1000);
        startListeningForOtp();
    }, [])

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

    const resend = () => {
        var mob = '+91' + mobile;
        setSec(30)
        comnPost('auth/sendotp' + mob)
            .then((res) => {
            })
    }

    const timer = () => {
        if (sec > 0) {
            setSec(sec - 1)
        }
    }

    const startListeningForOtp = () => {
        try {
            RNOtpVerify.getOtp()
                .then(p => RNOtpVerify.addListener(otpHandler))
                .catch(p => console.log(p));
        }
        catch (e) {
            console.log(e)
        }
    }

    const otpHandler = (message) => {
        try {
            if (message) {
                console.log('msg', message);
                const otp = /(\d{4})/g.exec(message)[1];
                if (otp !== null && otp !== undefined) {
                    setOtp(otp)
                    setFillOtp(otp)
                }
                RNOtpVerify.removeListener();
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Header name={'Verify OTP'} style={{ marginBottom: 50 }} />
            <Loader />
            <FontIcons name="user-circle" color={COLOR.black} size={DIMENSIONS.userIconSize} style={styles.appLogo} />
            <View>
                <View style={{ marginTop: '5%', marginLeft: '10%' }}>
                    <Text style={styles.otpHead}>OTP Verification</Text>
                    <Text style={styles.otpSubHead}>We have sent an OTP to verify your phone number.</Text>
                    <Text style={styles.otpMobile}>Sent to +91 {route.params.mobile}</Text>
                </View>
                <OtpInputs
                    style={{ flexDirection: 'row' }}
                    numberOfInputs={4}
                    inputStyles={{
                        height: 64,
                        width: 64,
                        margin: 10,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#26AE60',
                        textAlign: 'center',
                        fontSize: 24,
                        color: '#26AE60'
                    }}
                    inputContainerStyles={{ marginVertical: 45 }}
                    // autofillFromClipboard={true}
                    defaultValue={otp}
                    // code={this.state.fillOtp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onChangeText={code => { this.setState({ otp: code }) }}
                    handleChange={code => { setOtp(code) }}
                // onCodeChanged={code => { this.setState({ otp: code }) }}
                // autoFocusOnLoad
                // codeInputFieldStyle={styles.underlineStyleBase}
                // codeInputHighlightStyle={styles.underlineStyleHighLighted}
                // onCodeFilled = {(code => this.setState({otp: code}))}
                />
            </View>
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
            {
                sec > 1 ?
                    <Text style={styles.countertext}>You can resend your OTP within
                        (00:{sec > 9 ? sec : '0' + sec})</Text>
                    :
                    <View>
                        <Text>I didn't receive a code</Text>
                        <TouchableOpacity onPress={() => resend()}>
                            <Text style={styles.counterText1}>Resend</Text>
                        </TouchableOpacity>
                    </View>
            }
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
