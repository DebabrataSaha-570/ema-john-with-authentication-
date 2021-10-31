import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../hooks/useFirebase'
import useAuth from '../../Context/UseAuth'
import { useLocation } from 'react-router-dom'
const Login = () => {
    // const { googleSignIn, logOut, user, error } = useFirebase()
    const { googleSignIn } = useAuth()
    const location = useLocation();
    console.log('came from ', location.state?.from)
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="your email" name="" id="" />
                    <br />
                    <input type="password" placeholder="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link> </p>
                <div>-------or-----------</div>
                <button onClick={googleSignIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;