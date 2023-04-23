import axios from "axios";
import Path from './BaseUrl'

export const comnGet = async (url) => {
    let myUrl = Path.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('apiToken')}` }
    }

    return axios.get(myUrl, config)
        .then(res => res)
        .catch(err => err)
};

export const comnPost = async (url, data) => {
    const myUrl = Path.API_PATH + url;
    const config = {
        headers: {
            // Authorization: `Bearer ${localStorage.getItem('apiToken')}`,
            "Content-Type": "multipart/form-data"
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