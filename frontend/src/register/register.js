import { React, Component } from "react";
import { Link } from 'react-router-dom';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { RegisterModel } from './registerModel';
import { ServiceRegister } from './registerService';
import Toaster from './../common/toast';

class Register extends Component {
    constructor() {
        super();
        this.genderData = ["Male", "Female"];
        this.state = {
            RegisterModel: new RegisterModel(null, null, null, null),
            formError: {
                name: '',
                email: '',
                gender: '',
                password: ''
            }
        }
        this.ServiceRegister = new ServiceRegister();
    }
    handleChangeInput(args) {
        let updatedFormError = { name: '', email: '', gender: '', password: '' };
        this.setState({ formError: updatedFormError });

        let updatedRegisterModel = { ...this.state.RegisterModel };
        let parameter = args.target.name;
        switch (parameter) {
            case "name":
                updatedRegisterModel.name = args.target.value;
                break;
            case "email":
                updatedRegisterModel.email = args.target.value;
                break;
            case "password":
                updatedRegisterModel.password = args.target.value;
                break;

        }
        this.setState({ RegisterModel: updatedRegisterModel });
    }
    handleChangeDropdown(args) {
        let updatedFormError = { name: '', email: '', gender: '', password: '' };
        this.setState({ formError: updatedFormError });

        let updatedRegisterModel = { ...this.state.RegisterModel };
        updatedRegisterModel.gender = args.value;

        this.setState({ RegisterModel: updatedRegisterModel });
    }
    submitData = () => {
        let updatedRegisterModel = { ...this.state.RegisterModel };
        let updatedFormError = { ...this.state.formError };
        let errorCount = 0;
        if (updatedRegisterModel.name === '' || updatedRegisterModel.name === null) {
            errorCount++;
            updatedFormError.name = "Name is required";
        }
        if (updatedRegisterModel.email === '' || updatedRegisterModel.email === null) {
            errorCount++;
            updatedFormError.email = "Email is required";
        }
        if (updatedRegisterModel.gender === '' || updatedRegisterModel.gender === null) {
            errorCount++;
            updatedFormError.gender = "Gender is required";
        }
        if (updatedRegisterModel.password === '' || updatedRegisterModel.password === null) {
            errorCount++;
            updatedFormError.password = "Password is required";
        }
        this.setState({ formError: updatedFormError });
        if (errorCount === 0) {
            this.ServiceRegister.registerUser(updatedRegisterModel).then(response => {
                if (response.data.success) {
                    this.toasterInstance.showToast(1, response.data.message);
                }
                else {
                    this.toasterInstance.showToast(0, response.data.message);
                }
            });
        }
    }
    render() {
        return (<div className="e-card register-card">
            <div className="e-card-content">
                <div className='control-pane container'>
                    <div className='control-section col-lg-12'>
                        <h2 className="form-title">Register</h2>
                        <div className='validation_wrapper'>
                            <div className="control_wrapper" id="control_wrapper">
                                <form id="form1" method="post">
                                    <div className="form-group">
                                        <div className="e-float-input">
                                            <input type="text" id="name" name="name" onChange={this.handleChangeInput.bind(this)} />
                                            <span className="e-float-line" />
                                            <label className="e-float-text e-label-top" htmlFor="name">Name</label>
                                        </div>
                                        <div className="inputError">{this.state.formError.name}</div>
                                    </div>
                                    <div className="form-group margin-top-2">
                                        <div className="e-float-input">
                                            <input type="email" id="Email" name="email" onChange={this.handleChangeInput.bind(this)} />
                                            <span className="e-float-line" />
                                            <label className="e-float-text e-label-top" htmlFor="email">Email</label>
                                        </div>
                                        <div className="inputError">{this.state.formError.email}</div>
                                    </div>
                                    <div className="form-group margin-top-2">
                                        <DropDownListComponent dataSource={this.genderData} placeholder="Select a gender" name="gender" change={this.handleChangeDropdown.bind(this)} />
                                        <div className="inputError">{this.state.formError.gender}</div>
                                    </div>
                                    <div className="form-group margin-top-2">
                                        <div className="e-float-input">
                                            <input type="password" id="Password" name="password" onChange={this.handleChangeInput.bind(this)} />
                                            <span className="e-float-line" />
                                            <label className="e-float-text e-label-top" htmlFor="password">Password</label>
                                        </div>
                                        <div className="inputError">{this.state.formError.password}</div>
                                    </div>
                                </form>
                                <br />
                                <br />
                                <div className="DataBtn">
                                    <button className="submit-btn e-btn" id="register-btn" onClick={this.submitData}>Register</button>
                                    <span className="margin-left-5">If already registered, Please  <Link to="/">login</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster ref={toaster => this.toasterInstance = toaster} />
        </div>);
    }
}

export default Register;