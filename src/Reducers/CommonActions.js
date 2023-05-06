import {
    SaveAccess_token,
    SaveLoginUser,
    SetLoader
} from './Types';

const saveLoginUser = data => {
    return {
        type: SaveLoginUser,
        payload: data
    }
}

const saveAccess_token = data => {
    return {
        type: SaveAccess_token,
        payload: data
    }
}

const setLoader = data => {
    return {
        type: SetLoader,
        payload: data
    }
}

export { saveLoginUser, saveAccess_token, setLoader }