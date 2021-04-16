import './Form.css' ;

// for auth
function Form() {
    return (
        <form className='Form'>
            <input type='text' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            
            <button type='submit' className='SignIn'>Sign In</button>
            <button type='submit' className='SignUp'>Sign Up</button>
        </form>
    )
}

export default Form;