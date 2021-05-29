import './Auth.css' ;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth, setAuthRedirectPath } from '../store/actions/authAction';
import Spinner from '../Spinner/Spinner';


// for auth
class Auth extends Component {

    state = {
        email: '',
        password: '',
        isSignup: false,
    }

    componentDidMount() {
        if(this.props.authRedirectPath === '/') {
            this.props.onSetAuthRedirectPath('/dashboard');
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        // send to store
        this.props.onAuth(
            this.state.email,
            this.state.password,
            this.state.isSignup,
        );
    }

    switchLoginLogout = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup,
            }
        })
    }

    render() {

        let errorMessage = null; 
        if(this.props.loading) errorMessage = <Spinner />;
        if(this.props.error) errorMessage = <p className='errorMessage'>
            Firebase says: <span> {this.props.error.message} </span>
        </p>;

        return (
            <form className='Form' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Email' id='email' name='email' required onChange={this.handleChange} />
                <input type='password' placeholder='Password' id='password' name='password' required onChange={this.handleChange} />
        
                { errorMessage }
                    
                <button type='submit' className='SignIn'>
                    {this.state.isSignup ? 'Sign Up' : 'Sign In'}
                </button>

                <button type='button' onClick={this.switchLoginLogout} className='Toggler'>
                    Switch to {this.state.isSignup ? 'Sign In' : 'Sign Up'}
                </button>
            </form>
        )
    }

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath('/dashboard')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
