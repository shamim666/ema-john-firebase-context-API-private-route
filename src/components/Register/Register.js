import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="name"/>
                    <br />
                    <input type="email" name="" id="" placeholder="email" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <p>Aready have an Account  <Link to ="/login">Login</Link> </p>
                       <div>  ------------  or  -----------</div>
                       <br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;