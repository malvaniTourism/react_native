import {
    SaveAccess_token,
    SaveLoginUser,
} from './Types';

const initialState = {
    loginUser: [],
    access_token: ''
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SaveLoginUser:
            return {
                ...state,
                loginUser: action.payload
            }
        case SaveAccess_token:
            return {
                ...state,
                access_token: action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;