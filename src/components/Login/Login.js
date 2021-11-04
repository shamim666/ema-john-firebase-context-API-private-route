import React from 'react';
import { useState } from 'react';
import { Link , useLocation , useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {

const { user , signInUsingGoogle } = useAuth();
const [error , setError] = useState('');

const location = useLocation();

// here history hook is used to send user from where he came
const history = useHistory();
// if a user click a private route like placeOrder then 
// he will go log in page and after login
// he will go placeOrder page (location.state?.from ) or 
// if  a user direct click log in then he will go shop page
const redirect_url = location.state?.from || '/shop'


const handleGoogleLogin = () =>{
    signInUsingGoogle()
    .then(result =>{
        history.push(redirect_url)
    })
    .catch(error => {
        setError(error.message)
    })
}

    return (
        <div className="login-form">
            <div >
            <h2>Login</h2>
             <form onSubmit="">
                 <input type="email" name="" placeholder="email" />
                 <br />
                 <input type="password" name="" placeholder="password" />
                 <br />
                 <input type="submit" value="Submit" />
            </form>
            <br />
                 <p>New user ? <Link to="/register">Create Account</Link></p>
                 <div>-----------  or  ------------</div>
                 <br />
                 <button className="btn-regular" onClick={handleGoogleLogin} >Google Sign In</button>
            </div>
             
        </div>
    );
};

export default Login;