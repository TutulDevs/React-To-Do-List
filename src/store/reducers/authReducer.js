import { updatedObj } from '../../shared/utility';

const initState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
}



const authReducer = (state = initState, action) => {
    switch(action.type) {

        case 'AUTH_START': 
            return updatedObj(state, {
                error: null, 
                loading: true,
            });
        case 'AUTH_SUCCESS':
            return updatedObj(state, {
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false,
            });
        case 'AUTH_FAIL':
            return updatedObj(state, {
                error: action.error,
                loading: false,
            });
        case 'AUTH_LOGOUT': 
            return updatedObj(state, {
                token: null,
                userId: null,
            })

        default: 
            return state;
    }
}

export default authReducer;