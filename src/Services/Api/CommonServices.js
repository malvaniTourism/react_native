import axios from "axios";
import Path from './BaseUrl'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const comnGet = async (url, apiToken) => {
    let myUrl = Path.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${apiToken}` }
    }

    return axios.get(myUrl, config)
        .then(res => res)
        .catch(err => err)
};

export const comnPost = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const token = await AsyncStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }

    return axios.post(myUrl, data, config)
        .then(res => res)
        .catch(err => err)
};

export const comnPut = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('apiToken')}` }
    }

    return axios.put(myUrl, data, config)
        .then(res => res)
        .catch(err => err)
};

export const ComnDel = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('apiToken')}` }
    }

    return axios.delete(myUrl, data, config)
        .then(res => res)
        .catch(err => err)
};

export const login = async () => {
    let data = {
        email: "test@gmail.com",
        password: "Test@123"
    }
    console.log('effect');
    
    return axios.post('/auth/login', data)
    .then(res => {
            console.log('effect---', res);
            return res.data.access_token
        })
        .catch(err => console.log('err - ', err))
}