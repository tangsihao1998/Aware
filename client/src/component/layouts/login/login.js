import React, { Component } from 'react'
import './login.scss'
// import { Modal } from 'react-bootstrap'

class loginform extends Component {
    constructor(props,context) {
        super(props);

        this.state={
            forgotshow: 'none',
            resshow: 'none',
            loginshow: 'none',
            username:'',
            password:'',
        };
    }
    
    // Handle Login Modal
    handleLoginClose = () =>{
        this.setState({ loginshow: 'none' });
    }
    handleLoginShow = ()=>{
        this.setState({ loginshow: 'block' });
    }
    //------------------------------------------------------------------------------
    // Handle Register Modal
    handleResShow = ()=>{
        this.setState({ resshow: 'block' });
    }
    handleResClose = () =>{
        this.setState({ resshow: 'none' });
    }
    //------------------------------------------------------------------------------
    //Handle ForgotPassword Modal
    handleForgotClose = () =>{
        this.setState({ forgotshow: 'none' });
    }
    //------------------------------------------------------------------------------
    // Change Modal With Button 
    LogtoRes = () =>{
        this.setState({
            resshow:'block',
            loginshow:'none'
        });
    }
    RestoLog = () =>{
        this.setState({
            resshow:'none',
            loginshow:'block'
        });
    }
    LogtoForgot = () =>{
        this.setState({
            loginshow:'none',
            forgotshow:'block'
        });
    }
    ForgottoLog = () =>{
        this.setState({
            loginshow:'block',
            forgotshow:'none'
        });
    }
    //-----------------------------------------------------------------------------------------------------

    render(){
        return(
            <div>
                <div className="LoginForm">
                    <button className="Register" onClick={this.handleResShow}>Register</button>
                    <button className="Login" onClick={this.handleLoginShow}>Log In</button>
                </div>
                {/* ______________________________________________________________________________________________________ */}
                {/*  Login The Modal  */}
                <div className="modal" style={{display:this.state.loginshow}} onClick={this.handleLoginClose}></div>
                {/*  Modal content */}
                <div id="LoginModal" className="modal-content" style={{display:this.state.loginshow}}>
                    <div className="close" onClick={this.handleLoginClose}>&times;</div>
                    <div className="title">Log In</div>
                    {/* Content Here */}
                    <div className="box-content">
                        <div className="Alert">Your e-mail/password is invalid!</div>
                        <div className="inputform">
                            <div for="email">E-MAIL</div>
                            <input type="text" placeholder="Enter your email..." name="email" required className="email"/>
                        </div>
                        <div className="inputform">
                            <div for="password">PASSWORD</div>
                            <input type="password" placeholder="Enter your password..." name="password" required />
                        </div>
                        <div className="otherform">
                            <input type="checkbox" name="remember" value="remember" className="remembercheckbox"/>
                            <label for="remembercheckbox">Remember password</label>
                            <div onClick={this.LogtoForgot}>Forgot your password?</div>
                        </div>
                    </div>
                    <button>Log In</button>
                    <hr/>
                    <div className="alert">
                        <div>Don't have an account?</div>
                        <div className="alert-button" onClick={this.LogtoRes}>Register</div>
                    </div>
                </div>
                {/* ______________________________________________________________________________________________________ */}
                {/*  Register The Modal  */}
                <div className="modal" style={{display:this.state.resshow}} onClick={this.handleResClose}></div>
                {/*  Modal content */}
                <div>
                    <div id="RegisterModal" className="modal-content" style={{display:this.state.resshow}}>
                        <div className="close" onClick={this.handleResClose}>&times;</div>
                        <div className="title">Register</div>
                        {/* Content Here */}
                        <div className="box-content">
                            <div className="inputform">
                                <div for="email">NAME</div>
                                <input type="text" placeholder="Enter your name..." name="name" required className="name"/>
                                <p className="Alert">Please enter a valid name</p>
                            </div>
                            <div className="inputform">
                                <div for="email">E-MAIL</div>
                                <input type="text" placeholder="Enter your email..." name="email" required className="email"/>
                                <p className="Alert">Please enter a valid e-mail</p>
                            </div>
                            <div className="inputform">
                                <div for="password">PASSWORD</div>
                                <input type="password" placeholder="Enter your password..." name="password" required />
                                <p className="Alert">Your password must be more than 6 characters!</p>
                            </div>
                        </div>
                        <div className="term">
                                By creating an account you agree to the <br/>
                                <span>Terms of Service</span> and <span>Privacy Policy</span>
                        </div>
                        <button>Register</button>
                        <hr/>
                        <div className="alert">
                            <div>Do you have an account?</div>
                            <div className="alert-button" onClick={this.RestoLog}>Login</div>
                        </div>
                    </div>
                </div>
                {/* ______________________________________________________________________________________________________ */}
                {/*  Forgot Password The Modal  */}
                <div className="modal" style={{display:this.state.forgotshow}}></div>
                {/*  Modal content */}
                <div>
                    <div id="ForgotModal" className="modal-content" style={{display:this.state.forgotshow}}>
                        <div className="close" onClick={this.handleForgotClose}>&times;</div>
                        <div className="title">Forgot Password</div>
                        <div className="instructor">Enter your e-mail address below and we’ll get you back on track.</div>
                        {/* Content Here */}
                        <div className="box-content">
                            <div className="inputform">
                                <div for="email">E-MAIL</div>
                                <input type="text" placeholder="Enter your email..." name="email" required className="email"/>
                            </div>
                        </div>
                        <button>Submit</button>
                        <hr/>
                        <div className="alert">
                            <div>I remember my password now</div>
                            <div className="alert-button" onClick={this.ForgottoLog}>Login</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default loginform;