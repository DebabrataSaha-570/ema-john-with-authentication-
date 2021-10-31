import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import useAuth from '../../Context/UseAuth'
import { useLocation, useHistory } from 'react-router-dom'
const Login = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/'
    console.log('came from ', location.state?.from);

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirectUri)
            })
    }
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
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;