import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="your name" />
                    <br />
                    <input type="email" name="" id="" placeholder="email" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">login</Link></p>
                <div>-------or----------</div>
                <button className="btn-regular">Google SignIn </button>
            </div>
        </div>
    );
};

export default Register;