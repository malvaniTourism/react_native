import { useState } from "react"
import { View, Text } from "react-native"
import TextField from "../Components/Customs/TextField"
import { SignInFields } from "../Services/Constants/FIELDS"

const HomeScreen = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const setChild = (val, isVal, index) => {
        switch (index) {
            case 0:
                setUserName(val);
                break;
            case 1:
                setPassword(val);
                break;
        }
    }

    const getInputValue = (index) => {
        switch (index) {
            case 0:
                return username;
            case 1:
                return password;
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                SignInFields.map((field, index) => {
                    return (
                        <TextField
                            name={field.name}
                            label={field.name}
                            fieldType={field.type}
                            length={field.length}
                            required={field.required}
                            disabled={field.disabled}
                            setChild={(v, i) => setChild(v, i, index)}
                            value={getInputValue(index)}
                        />
                    )
                })
            }
        </View>
    )
}

export default HomeScreen
