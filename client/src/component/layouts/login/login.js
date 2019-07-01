import React, { Component } from 'react'
import './login.scss'
// import { Modal } from 'react-bootstrap'

import { connect } from 'react-redux';
import { LogIn, Register, LogOut }  from '../../../actions/authentication';
import {CheckOut} from '../../../actions/cart-action';

class loginform extends Component {
    // Constructor of Component
    constructor(props) {
        super(props);
        this.state={
            forgotshow: false,
            resshow: false,
            loginshow: false,
            infoshow: false,
            username:'',
            email:'',
            password:'',
            errors:'',
        };
    }

    // Handle Input Text
    handleTextChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    //--------------------------------------------------------------------------
    // Handle Login Modal Show OR Close
    handleLoginShow = () =>{
        if(this.state.loginshow === true){
            this.setState({ 
                loginshow: false,
                email:'',
                password:'',
                errors:''
            });
        }
        else{
            this.setState({ 
                loginshow: true, 
                errors:''
            });
        }
    }
    //------------------------------------------------------------------------------
    // Handle Register Modal Show OR Close
    handleResShow = () => { 
        if(this.state.resshow === false){
            this.setState({ 
                resshow: true,
                errors:''
            });
        }
        else{
            this.setState({
                resshow: false,
                username:'',
                email:'',
                password:'',
                errors:''
            });
        }
    }
    //------------------------------------------------------------------------------
    //Handle Forgot Password Modal Show OR CLOSE
    handleForgotShow = () => {
        if(this.state.forgotshow === true){
            this.setState({ 
                forgotshow: false,
                errors:''
            });
        } 
    }
    //------------------------------------------------------------------------------
    // Change Modal With Button 
    HandleLogtoRes = () =>{
        this.setState({
            resshow:true,
            loginshow:false,
            email:'',
            password:'',
            errors:''
        });
    }
    HandleRestoLog = () =>{
        this.setState({
            resshow: false,
            loginshow:true,
            username:'',
            email:'',
            password:'',
            errors:''
        });
    }
    HandleLogtoForgot = () =>{
        this.setState({
            loginshow:false,
            forgotshow:true,
            email:'',
            password:'',
            errors:''
        });
    }
    HandleForgottoLog = () =>{
        this.setState({
            loginshow:true,
            forgotshow:false,
            email:'',
            errors:''
        });
    }
    //-----------------------------------------------------------------------------------------------------
    // USER-SETTINGS SHOW
    HandleUserSetting = () =>{
        if(this.state.infoshow === false){
            this.setState({
                infoshow:true,
            });
        }
        else{
            this.setState({
                infoshow:false,
            });
        }
    }

    // Handle EVENT 
    // Handle Register Event
    handleRegister = (e) =>{
        e.preventDefault();
        const user = { 
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.RegisterUser(user);       
    }

    // Handle Log In Event
    handleLogIn = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.Login(user);
    }

    // Handle Log Out Event
    handleLogoutEvent = (e) =>{
        e.preventDefault();
        this.setState({
            infoshow:false,
        });
        this.props.LogoutUser();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.isLogin !== prevProps.isLogin) {
            this.setState({
                username: '',
                email: '',
                password: '',
                loginshow: false,
                resshow: false
            })
        }
        if (this.props.checkout !== prevProps.checkout){
            this.setState({
                loginshow: this.props.checkout,
            })
        }
    }

    render(){
        console.log(this.props);

        // Declare Variables
        // Props
        const {isLogin} = this.props;
        const {user} = this.props;
        // State
        const {errors} = this.state;
        const {password} = this.state;
        const {email} = this.state;
        const {username} = this.state;
        const {loginshow}= this.state;
        const {resshow} = this.state;
        const {forgotshow} = this.state;
        const {infoshow} = this.state;
        //-----------------------------------------------------------
        return(
            <div>
                {/* Content In NAVBAR before LOGIN */}
                <div className={`LoginForm ${isLogin && 'disable'}`}>
                    <button className="Register" onClick={this.handleResShow}>Register</button>
                    <button className="Login" onClick={this.handleLoginShow}>Log In</button>
                </div>

                {/* Content In NAVBAR after LOGIN */}
                <div className={`User-form ${isLogin && 'enable'}`}>
                    {user && <img src={process.env.PUBLIC_URL + user.image} class="userIMG" alt="user-images" onClick={this.HandleUserSetting}/>}
                    <div id={`Info${(infoshow && 'Show')|| '' }`} className="User-Info">
                        <div>Account setting</div>
                        <div onClick={this.handleLogoutEvent}>Logout</div>
                    </div>
                </div>

                {/* ALL MODAL OF LOGIN FORM */}
                {/* ______________________________________________________________________________________________________ */}
                {/*  Login The Modal  */}
                <div id={`Modal${isLogin || ((loginshow && 'Login')||  '' ) }`} className="modal" onClick={this.handleLoginShow}></div>
                {/*  Modal content */}
                <div id={`LoginModal${isLogin || ((loginshow && 'enable') || '' ) }`} className="modal-content">
                    <div className="close" onClick={this.handleLoginShow}>&times;</div>
                    <div className="title">Log In</div>
                    {/* Content Here */}
                    <div className="box-content">
                        { errors && ((errors.email && <div className="Alert">Your e-mail/password is invalid!</div> )|| 
                            (errors.password && <div className="Alert">Your e-mail/password is invalid!</div>))}
                        <div className="inputform">
                            <div for="email">E-MAIL</div>
                            <input id={`${errors && errors.email && 'ErrorForm'}`} type="text" placeholder="Enter your email..." name="email" className="email" onChange={this.handleTextChange} value={email}/>
                        </div>
                        <div className="inputform">
                            <div for="password">PASSWORD</div>
                            <input id={`${errors && errors.password && 'ErrorForm'}`} type="password" placeholder="Enter your password..." name="password" onChange={this.handleTextChange} value={password}/>
                        </div>
                        <div className="otherform">
                            <input type="checkbox" name="remember" value="remember" className="remembercheckbox"/>
                            <label for="remembercheckbox">Remember password</label>
                            <div onClick={this.HandleLogtoForgot}>Forgot your password?</div>
                        </div>
                    </div>
                    <button onClick={this.handleLogIn}>Log In</button>
                    <hr/>
                    <div className="alert">
                        <div>Don't have an account?</div>
                        <div className="alert-button" onClick={this.HandleLogtoRes}>Register</div>
                    </div>
                </div>
                {/* ______________________________________________________________________________________________________ */}

                {/*  Register The Modal  */}
                <div id={`Modal${isLogin || ((resshow && 'Register')|| '' )}`} className="modal" onClick={this.handleResShow}></div>
                {/*  Modal content */}
                <div>
                    <div id={`RegisterModal${isLogin || ((resshow && 'enable') || '') }`} className="modal-content">
                        <div className="close" onClick={this.handleResShow}>&times;</div>
                        <div className="title">Register</div>
                        {/* Content Here */}
                        <div className="box-content">
                            <div className="inputform">
                                <div for="username">NAME</div>
                                <input id={`${errors && errors.name && 'ErrorForm'}`} type="text" placeholder="Enter your name..." name="username" required className="username" onChange={this.handleTextChange} value={username}/>
                                {errors && errors.name && <p className="Alert">{errors.name}</p>}
                            </div>
                            <div className="inputform">
                                <div for="email">E-MAIL</div>
                                <input id={`${errors && errors.email && 'ErrorForm'}`} type="text" placeholder="Enter your email..." name="email" required className="email" onChange={this.handleTextChange} value={email}/>
                                { errors && errors.email && <p className="Alert">{errors.email}</p>}
                            </div>
                            <div className="inputform">
                                <div for="password">PASSWORD</div>
                                <input id={`${errors && errors.password && 'ErrorForm'}`} type="password" placeholder="Enter your password..." name="password" required onChange={this.handleTextChange} value={password}/>
                                { errors && errors.password && <p className="Alert">{errors.password}</p> }
                            </div>
                        </div>
                        <div className="term">
                                By creating an account you agree to the <br/>
                                <span>Terms of Service</span> and <span>Privacy Policy</span>
                        </div>
                        <button onClick={this.handleRegister}>Register</button>
                        <hr/>
                        <div className="alert">
                            <div>Do you have an account?</div>
                            <div className="alert-button" onClick={this.HandleRestoLog}>Login</div>
                        </div>
                    </div>
                </div>
                {/* ______________________________________________________________________________________________________ */}

                {/*  Forgot Password The Modal  */}
                <div id={`Modal${(forgotshow && 'Forgot')|| '' }`} className="modal" onClick={this.handleForgotShow}></div>
                {/*  Modal content */}
                <div>
                    <div id={`ForgotModal${(forgotshow && 'enable') || '' }`} className="modal-content">
                        <div className="close" onClick={this.handleForgotShow}>&times;</div>
                        <div className="title">Forgot Password</div>
                        <div className="instructor">Enter your e-mail address below and we’ll get you back on track.</div>
                        {/* Content Here */}
                        <div className="box-content">
                            <div className="inputform">
                                <div for="email">E-MAIL</div>
                                <input type="text" placeholder="Enter your email..." name="email" required className="email" onChange={this.handleTextChange} value={email}/>
                            </div>
                        </div>
                        <button>Submit</button>
                        <hr/>
                        <div className="alert">
                            <div>I remember my password now</div>
                            <div className="alert-button" onClick={this.HandleForgottoLog}>Login</div>
                        </div>
                    </div>
                </div>
                {/* __________________________________________________________________________________________________________________________________ */}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.AuthReducer.error,
        isLogin: state.AuthReducer.isAuthenticated,
        user: state.AuthReducer.user,
        checkout: state.CartReducer.checkout,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        Login: (user) => {
            dispatch(LogIn(user));
        },
        RegisterUser: (user) => {
            dispatch(Register(user))
        },
        LogoutUser: () =>{
            dispatch(LogOut())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (loginform);