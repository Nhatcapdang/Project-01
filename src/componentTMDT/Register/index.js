import React, { Component } from 'react';
import "./style.scss";
import Login123 from "../../img/123.jpg"
import firebase from "../../ConfigFirabase"
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtFristName: "",
            txtLastName: "",
            txtEmail: "",
            txtPhone: "",
            txtPassword: "",
            txtPasswordAgain: "",

            FristNameError: "",
            LastNameError: "",
            emailError: "",
            phoneError: "",
            passwordError: "",
            accountExist: null,
            textarea: "",
            dataUser: []
        }
    }
    validate = () => {
        // let emailError = "";
        // if (!this.state.emailError.includes("@")) {
        //     emailError = "invalid email"
        //     this.setState({
        //         emailError
        //     })
        //     return false
        // }
        // return true
        let checkingFristName = this.state.txtFristName;
        let checkingLastName = this.state.txtLastName;
        let checkingEmail = this.state.txtEmail;
        let checkingPhone = this.state.txtPhone;
        let password = this.state.txtPassword;
        let passwordAgain = this.state.txtPasswordAgain;
        //eslint-disable-next-line
        const regexpFristName = /[a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/g;
        //eslint-disable-next-line
        const regexpLastName = /[a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/g;
        //eslint-disable-next-line
        const regexpEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //eslint-disable-next-line
        const regexpPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        const checkingResultFristName = regexpFristName.exec(checkingFristName);
        if (checkingResultFristName !== null) {
            this.setState({
                FristNameError: ""
            })
        }
        const checkingResultLastName = regexpLastName.exec(checkingLastName);
        if (checkingResultLastName !== null) {
            this.setState({
                LastNameError: ""
            })
        }
        const checkingResultEmail = regexpEmail.exec(checkingEmail);
        if (checkingResultEmail != null) {
            this.setState({
                emailError: ""
            })
        }
        const checkingResultPhone = regexpPhone.exec(checkingPhone);
        if (checkingResultEmail != null) {
            this.setState({
                phoneError: ""
            })
        }
        if (password === passwordAgain) {
            this.setState({
                passwordError: ""
            })
        }
        if (checkingResultEmail !== null && checkingResultFristName !== null && checkingResultLastName !== null && checkingResultPhone !== null && this.state.rlSex !== "  " && password === passwordAgain) {
            return true    //ko hop le thi tra ve null
        } else {
            if (checkingResultFristName === null) {
                this.setState({
                    FristNameError: " Frist name it nhat 3-15 ky tu",
                })
            }
            if (checkingResultLastName === null) {
                this.setState({
                    LastNameError: " Last name it nhat 3-15 ky tu",
                })
            }
            if (checkingResultEmail === null) {
                this.setState({
                    emailError: "invaild email",
                })
            }
            if (checkingResultPhone === null) {
                this.setState({
                    phoneError: "Bat dau la 0 va toi da 10 so",
                })
            }
            if (password !== passwordAgain) {
                this.setState({
                    passwordError: "Not match"
                })
            }
            return false
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //vaild nhap dung het thi tra ve true
        const isVaild = this.validate();
        if (isVaild) {
            //du form xuong localstorage
            // let dataUser = this.state.dataUser;
            // const data = {
            //     id: this.guidGenerator(),
            //     fristName: this.state.txtFristName,
            //     LastName: this.state.txtLastName,
            //     email: this.state.txtEmail,
            //     phone: this.state.txtPhone
            // }
            // dataUser.push(data)
            // localStorage.setItem("user", JSON.stringify(dataUser))

            // dua len firebase
            firebase.auth().createUserWithEmailAndPassword(this.state.txtEmail, this.state.txtPassword).catch(error => {
                // Handle Errors here.
                this.setState({
                    accountExist: error.message
                })
                // ...
            });

            //clear form
            // this.setState({
            //     txtFristName: "",
            //     txtLastName: "",
            //     txtEmail: "",
            //     txtPhone: "",
            //     txtPassword: "",
            //     txtPasswordAgain: "",
            //     FristNameError: "",
            //     LastNameError: "",
            //     emailError: "",
            //     phoneError: "",
            //     passwordError: "",
            //     textarea: ""
            // })
            alert("Success")
        }
    }
    render() {
        return (
            <section>
                <div className="form-contact">
                    <div className="contactinfo">
                        <div>
                            <h2>Register</h2>
                            <img src={Login123} style={{ width: "100%", height: '100%' }} alt="" />
                        </div>
                        <ul className="sci">
                            <li><a href="/"><i className="fab fa-facebook-square" style={{ fontSize: '30px' }}></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter-square" style={{ fontSize: '30px' }}></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram-square" style={{ fontSize: '30px' }}></i></a></li>
                            <li><a href="/"><i className="fab fa-github-square" style={{ fontSize: '30px' }}></i></a></li>
                            <li><a href="/"><i className="fab fa-linkedin" style={{ fontSize: '30px' }}></i></a></li>
                        </ul>

                    </div>
                    <div className="contactform">
                        <h2>Register</h2>
                        <h5 style={{ color: 'red' }}>{this.state.accountExist}</h5>
                        <form className="formBox" onSubmit={this.handleSubmit}>
                            <div className="inputBox w50">
                                <input
                                    required
                                    type="text"
                                    name="txtFristName"
                                    value={this.state.txtFristName}
                                    onChange={this.handleChange}
                                ></input>
                                <span>First Name</span>
                                <p>{this.state.FristNameError}</p>
                            </div>
                            <div className="inputBox w50">
                                <input
                                    required
                                    type="text"
                                    name="txtLastName"
                                    value={this.state.txtLastName}
                                    onChange={this.handleChange}
                                ></input>
                                <span>Last Name</span>
                                <p>{this.state.LastNameError}</p>
                            </div>
                            <div className="inputBox w50">
                                <input
                                    required
                                    type="text"
                                    name="txtEmail"
                                    value={this.state.txtEmail}
                                    onChange={this.handleChange}
                                ></input>
                                <span>Email Address</span>
                                <p>{this.state.emailError}</p>
                            </div>
                            <div className="inputBox w50">
                                <input
                                    required
                                    type="text"
                                    name="txtPhone"
                                    value={this.state.txtPhone}
                                    onChange={this.handleChange} ></input>
                                <span>Phone</span>
                                <p>{this.state.phoneError}</p>
                            </div>
                            <div className="inputBox w50">
                                <input
                                    required
                                    type="password"
                                    name="txtPassword"
                                    value={this.state.txtPassword}
                                    onChange={this.handleChange} ></input>
                                <span>Password</span>
                                <p>{this.state.passwordError}</p>
                            </div>
                            <div className="inputBox w50">
                                <input
                                    required
                                    type="password"
                                    name="txtPasswordAgain"
                                    value={this.state.txtPasswordAgain}
                                    onChange={this.handleChange} ></input>
                                <span>Conform Password</span>
                                <p>{this.state.passwordError}</p>
                            </div>
                            {/* <div className="inputBox w100">
                                <textarea value={this.state.textarea} name="textarea" required onChange={this.handleChange} ></textarea>
                                <span>Wirte a message here...</span>
                            </div> */}
                            <div className="inputBox w100">
                                <input type="submit" value="Register" name="" ></input>
                            </div>
                        </form>
                        <p><Link to="/login">Go to login</Link></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;