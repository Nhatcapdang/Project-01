import React, { useRef, useState } from "react"
import "./style.scss";
import Login123 from "../../img/login.jpeg"
// import firebase from "../../ConfigFirabase"
import { Link, useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
// import { History } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthContext"
import { useSelector } from "react-redux";
import SignInFB from "../SignInFB";



export default function Login() {

    const { login } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const history = useHistory()
    const CartTMDT = useSelector(state => state.CartTMDT)




    async function handleSubmit(e) {
        e.preventDefault()
        if (CartTMDT.productCustomerChoose.length === 0) {
            try {
                await login(emailRef.current.value, passwordRef.current.value)
                history.push('/')
            } catch {
                setError("Failed to log in")
            }
        } else {
            try {
                await login(emailRef.current.value, passwordRef.current.value)
                history.push('/checkout')
            } catch {
                setError("Failed to log in")
            }
        }
    }

    return (
        <section>
            <div className="form-contact">
                <div className="contactinfo">
                    <div>
                        <h2>Login</h2>
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
                    <h2>Login</h2>
                    <form className="formBox" onSubmit={handleSubmit}>
                        <div className="inputBox w100">
                            <input
                                required
                                type="email"
                                name="txtEmail"
                                ref={emailRef}
                            ></input>
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w100">
                            <input
                                required
                                type="password"
                                name="txtPassword"
                                ref={passwordRef}
                            ></input>
                            <span>Password</span>
                            <p>{error}</p>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Login" name="" ></input>
                        </div>
                    </form>
                    <p ><Link style={{ color: "tomato" }} to="/resetpassword">Forgot password ?</Link> <Link to="/register">Create an account</Link></p>
                    <SignInFB />
                </div>
            </div>
        </section>
    );
}
