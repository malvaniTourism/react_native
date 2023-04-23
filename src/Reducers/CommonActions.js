import {
    SaveAccess_token,
    SaveLoginUser,
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

export { saveLoginUser, saveAccess_token }