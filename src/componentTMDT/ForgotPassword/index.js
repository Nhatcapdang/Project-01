import React, { useRef, useState } from "react"
import "./style.scss";
import H3 from "../../img/h3.JPG"
import { Link, useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
// import { History } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthContext"



export default function Login() {

    const { resetPassword } = useAuth()
    const emailRef = useRef()
    const [success, setSuccess] = useState("")




    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setSuccess("")
            await resetPassword(emailRef.current.value)
            // history.push('/login')
            setSuccess("checking email again")
        } catch {
            setSuccess("Email not exactly")
        }
    }

    return (
        <section>
            <div className="form-contact">
                <div className="contactinfo">
                    <div>
                        <h2>Reset Password</h2>
                        <img src={H3} style={{ width: "100%", height: '100%', objectFit: "cover" }} alt="" />
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
                    <h2>Reset Password</h2>
                    <p>{success}</p>
                    <form className="formBox" onSubmit={handleSubmit}>
                        <div className="inputBox w100">
                            <input
                                required
                                type="email"
                                name="txtEmail"
                                ref={emailRef}
                            ></input>
                            <span>Typer email here</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send" name="" ></input>
                        </div>
                    </form>
                    <p><Link to="/login">Go to login</Link></p>
                </div>
            </div>
        </section>
    );
}
