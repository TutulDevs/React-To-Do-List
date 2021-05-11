import { connect } from 'react-redux';

import './Form.css' ;


// for auth
function Form() {

    const onInputChange = e => {
        console.log(e.target[0].value);
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        console.log('submitted');
    }


    return (
        <form className='Form' onSubmit={onSubmitHandler}>
            <input type='text' placeholder='Email' name='email' required onChange={onInputChange} />
            <input type='password' placeholder='Password' required onChange={onInputChange} />

            <p className='errorMessage'>
                Firebase says: <span>ALREADY EXIST</span>
            </p>
            
            <button type='submit' className='SignIn'>Sign In</button>
            <button type='submit' className='SignUp'>Sign Up</button>
        </form>
    )
}



export default connect()(Form);