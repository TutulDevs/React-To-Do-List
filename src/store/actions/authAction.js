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

export const authLogout = () => {
    // remove from local 
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: 'AUTH_LOGOUT',
    }
}

// for dispatching expire time
export const checkAuthTimeout = expireTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch( authLogout() );
        }, expireTime * 1000);
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
            // local
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000); // = present time + 1 hour
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);

            // dispatch success 
            dispatch( authSuccess(res.data.idToken, res.data.localId) );

            // dispatch logout
            dispatch( checkAuthTimeout(res.data.expiresIn) );
        })
        .catch(err => dispatch(authFail(err.response.data.error)))
    }
}


// for checking to auth status and auto login/ logout
export const authCheckState = () => {
    return dispatch => {
        // IF no token = get out
        // ELSE 
            // IF the expirationDate is less than today = get out
            // ELSE 
                // get the userId 
                // success
                // checkAuthTimeout
        
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(authLogout());
        }else {
            const expirationDate = new Date(localStorage.getItem('expirationDate')); // from string to object
            if(expirationDate <= new Date()) {
                dispatch(authLogout());
            }else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                ))
            }

        }
    }
}





/*

medha@gmail.com
Medha234

*/