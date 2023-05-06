import {
    SaveAccess_token,
    SaveLoginUser,
    SetLoader,
} from './Types';

const initialState = {
    loginUser: [],
    access_token: '',
    isLoading: false
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
        case SetLoader:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;