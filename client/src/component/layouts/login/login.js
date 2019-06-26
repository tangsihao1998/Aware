import React, { Component } from 'react'
import './login.scss'
// import { Modal } from 'react-bootstrap'
//import Axios
import axios from 'axios';
import { connect } from 'react-redux';
import { LogIn }  from '../../../actions/authentication';

class loginform extends Component {
    constructor(props) {
        super(props);

        this.state={
            isLogin: '',
            user:'',
            forgotshow: 'none',
            resshow: 'none',
            loginshow: 'none',
            username:'',
            email:'',
            password:'',
            errors: '',
            token:''
        };
    }
    // Handle Input Text
    handleTextChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    // Handle Login Modal
    handleLoginClose = () =>{
        this.setState({ 
            loginshow: 'none',
            email:'',
            password:'',
            errors: '',
        });
    }
    handleLoginShow = () => { this.setState({ loginshow: 'block' });}
    //------------------------------------------------------------------------------
    // Handle Register Modal
    handleResShow = () => { this.setState({ resshow: 'block' });}

    handleResClose = () =>{
        this.setState({
            resshow: 'none',
            username:'',
            email:'',
            password:'',
            errors: '',
        });
    }
    //------------------------------------------------------------------------------
    //Handle ForgotPassword Modal
    handleForgotClose = () => { this.setState({ forgotshow: 'none' });}
    //------------------------------------------------------------------------------
    // Change Modal With Button 
    LogtoRes = () =>{
        this.setState({
            resshow:'block',
            loginshow:'none',
            email:'',
            password:'',
            errors: '',
        });
    }
    RestoLog = () =>{
        this.setState({
            resshow:'none',
            loginshow:'block',
            username:'',
            email:'',
            password:'',
            errors:'',
        });
    }
    LogtoForgot = () =>{
        this.setState({
            loginshow:'none',
            forgotshow:'block',
            email:'',
            password:'',
            errors: '',
        });
    }
    ForgottoLog = () =>{
        this.setState({
            loginshow:'block',
            forgotshow:'none',
            email:'',
        });
    }
    //-----------------------------------------------------------------------------------------------------
    // Handle Submit Register
    handleRegister = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/register',{
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        }).then( res => {
            this.setState({
                errors: res.data.error,
                email: res.data.email,
                password: res.data.password,
                username: res.data.username,
            });
            console.log(this.state.errors);
            // Send State for Modal
            if(!this.state.errors){
               this.setState({
                   resshow:'none'
               });
           }
        }).catch(err => {
            this.setState({
                errors:err.response.data.error
            });
        });
       
    }

    // Handle Log In
    handleLogIn = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.Login(user);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps) {
            this.setState({
                errors: nextProps.errors,
                isLogin: nextProps.isLogin,
                user: nextProps.user,
            });
        }
    }

    render(){
        console.log('isLogin',this.state.isLogin);
        console.log('User',this.state.user);
        console.log('Error',this.state.errors);
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);
        return(
            <div>
                <div className="LoginForm">
                    <button className="Register" onClick={this.handleResShow}>Register</button>
                    <button className="Login" onClick={this.handleLoginShow}>Log In</button>
                </div>

                <div className="User-form">
                    <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} class="userIMG" alt="user-images"/>
                    <div className="User-Info">
                        <div>Account setting</div>
                        <div>Logout</div>
                    </div>
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
                        { this.state.errors && ((this.state.errors.email && <div className="Alert">Your e-mail/password is invalid!</div> )|| 
                            (this.state.errors.password && <div className="Alert">Your e-mail/password is invalid!</div>))}
                        <div className="inputform">
                            <div for="email">E-MAIL</div>
                            <input type="text" placeholder="Enter your email..." name="email" className="email" onChange={this.handleTextChange} value={this.state.email}/>
                        </div>
                        <div className="inputform">
                            <div for="password">PASSWORD</div>
                            <input type="password" placeholder="Enter your password..." name="password" onChange={this.handleTextChange} value={this.state.password}/>
                        </div>
                        <div className="otherform">
                            <input type="checkbox" name="remember" value="remember" className="remembercheckbox"/>
                            <label for="remembercheckbox">Remember password</label>
                            <div onClick={this.LogtoForgot}>Forgot your password?</div>
                        </div>
                    </div>
                    <button onClick={this.handleLogIn}>Log In</button>
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
                                <div for="username">NAME</div>
                                <input type="text" placeholder="Enter your name..." name="username" required className="username" onChange={this.handleTextChange} value={this.state.username}/>
                                { this.state.errors && this.state.errors.name && <p className="Alert">{this.state.errors.name}</p>}
                            </div>
                            <div className="inputform">
                                <div for="email">E-MAIL</div>
                                <input type="text" placeholder="Enter your email..." name="email" required className="email" onChange={this.handleTextChange} value={this.state.email}/>
                                { this.state.errors && this.state.errors.email && <p className="Alert">{this.state.errors.email}</p>}
                            </div>
                            <div className="inputform">
                                <div for="password">PASSWORD</div>
                                <input type="password" placeholder="Enter your password..." name="password" required onChange={this.handleTextChange} value={this.state.password}/>
                                { this.state.errors && this.state.errors.password && <p className="Alert">{this.state.errors.password}</p> }
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
                                <input type="text" placeholder="Enter your email..." name="email" required className="email" onChange={this.handleTextChange} value={this.state.email}/>
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

const mapStateToProps = (state) => {
    return {
        errors: state.AuthReducer.error,
        isLogin: state.AuthReducer.isAuthenticated,
        user: state.AuthReducer.user,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        Login: (user) => {
            dispatch(LogIn(user));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (loginform);