import { updatedObj } from '../../shared/utility';

const initState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
}



const authReducer = (state = initState, action) => {
    switch(action.type) {

        case 'AUTH_START': 
            return updatedObj(state, {
                error: null, 
                loading: true,
            })

        default: 
            return state;
    }
}

export default authReducer;