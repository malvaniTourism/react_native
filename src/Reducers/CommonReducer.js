import {
    SaveLoginUser,
} from './Types';

const initialState = {
    loginUser: []
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SaveLoginUser:
            return {
                ...state,
                loginUser: action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;