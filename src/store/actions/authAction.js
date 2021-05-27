import axios from "axios"

export const authStart = () => {
    return {
        type: 'AUTH_START',
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: 'AUTH_SUCCESS',
        idToken: token,
        userId: userId,
    }
}

export const authFail = error => {
    return {
        type: 'AUTH_FAIL',
        error: error,
    }
}


export const auth = (email, password, isSignup) => {
    return dispatch => {
        // Start the process
        dispatch( authStart() );

        // Obj for sending in FB
        const authData = {
            email,
            password,
            returnSecureToken: true,
        }

        // FB link for Sign Up
        const key = 'AIzaSyAlBJojs8XOnH6FVAe6zEcLeA9cehdgTvk';
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

        // for Sign In
        if(!isSignup) url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

        // Now send it
        axios.post(url, authData)
        .then(res => {
            console.log(res);

            // local
            // dispatch success 
            // dispatch logout
        })
        .catch(err => dispatch(authFail(err.response.data.error)))
    }
}


/*

medha@gmail.com
Medha234

*/