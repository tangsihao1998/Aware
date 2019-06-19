import React, { Component } from 'react'
import './login.scss'
class loginform extends Component {
    render(){
        return(
            <div>
                <div className="LoginForm">
                    <button className="Register">Register</button>
                    <button className="Login">Log In</button>
                </div>
            </div>
        )
    }
}

export default loginform;