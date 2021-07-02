import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Toaster from './../common/toast';
import { LoginModel } from './loginModel';
import { LoginService } from './loginService';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginModel: new LoginModel(null, null),
            formError: {
                email: '',
                password: ''
            }
        }
        this.loginService = new LoginService();
    }
    handleChange = (args) => {
        let updatedFormError = { name: '', email: '', gender: '', password: '' };
        this.setState({ formError: updatedFormError });

        let updatedLoginModel = { ...this.state.loginModel };
        let parameter = args.target.name;
        switch (parameter) {
            case "email":
                updatedLoginModel.email = args.target.value;
                break;
            case "password":
                updatedLoginModel.password = args.target.value;
                break;
        }
        this.setState({ loginModel: updatedLoginModel });
    }
    submitData = () => {
        let updatedLoginModel = { ...this.state.loginModel };
        let updatedFormError = { ...this.state.formError };
        let errorCount = 0;
        if (updatedLoginModel.email === '' || updatedLoginModel.email === null) {
            errorCount++;
            updatedFormError.email = "Email is required";
        }
        if (updatedLoginModel.password === '' || updatedLoginModel.password === null) {
            errorCount++;
            updatedFormError.password = "Password is required";
        }
        this.setState({ formError: updatedFormError });
        if (errorCount === 0) {
            this.loginService.loginUser(updatedLoginModel).then(response => {
                if (response.data.success) {
                    this.toastInstance.showToast(1, response.data.message);
                }
                else {
                    this.toastInstance.showToast(2, response.data.message);
                }
            })
        }
    }
    render() {
        return (<div className="e-card login-card">
            <div className="e-card-content">
                <div className='control-pane container'>
                    <div className='control-section col-lg-12'>
                        <h2 className="form-title">Login</h2>
                        <div className='validation_wrapper'>
                            <div className="control_wrapper" id="control_wrapper">
                                <form id="form1" method="post">
                                    <div className="form-group">
                                        <div className="e-float-input">
                                            <input type="email" id="Email" name="email" onChange={this.handleChange.bind(this)} />
                                            <span className="e-float-line" />
                                            <label className="e-float-text e-label-top" htmlFor="email" >Email</label>
                                        </div>
                                        <div className="inputError">{this.state.formError.email}</div>
                                    </div>
                                    <div className="form-group margin-top-2">
                                        <div className="e-float-input">
                                            <input type="password" id="password" name="password" onChange={this.handleChange.bind(this)} />
                                            <span className="e-float-line" />
                                            <label className="e-float-text e-label-top" htmlFor="password">Password</label>
                                        </div>
                                        <div className="inputError">{this.state.formError.password}</div>
                                    </div>
                                </form>
                                <br />
                                <br />
                                <div className="submitBtn">
                                    <button className="submit-btn e-btn" id="Login-btn" onClick={this.submitData}>Login</button>
                                    <span className="margin-left-5">If not registered, Please  <Link to="/register">register</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster ref={toast => this.toastInstance = toast} />
        </div>);
    }
}
export default Login;