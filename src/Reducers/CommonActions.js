import {
    SaveLoginUser,
} from './Types';

const saveLoginUser = data => {
    return {
        type: SaveLoginUser,
        payload: data
    }
}

export { saveLoginUser }