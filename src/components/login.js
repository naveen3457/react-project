import React from "react";
import "../styles/login.scss";


const Login =()=>{
    return(
        <div className="parent">
        <div className="login-container">
                <div className="login-body">
                    <h2>Login</h2>
                    <p>Doesn't have an account yet?Signup</p>
                    <h5>Email Address</h5>
                    <input type="text" className="inp" placeholder="you@example.com" />
                    <h5>Password</h5>
                    <input type="text" className="inp" placeholder="Enter 6 characters or more" />
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <button>LOGIN</button>
                </div>
                <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg"/>
        </div>
        </div>
    )
}
export default Login;