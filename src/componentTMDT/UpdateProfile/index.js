import React, { useRef, useState } from "react"
import "./style.scss";
import Dang from "../../img/dang.jpeg"
import { useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
// import { History } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthContext"



export default function Login() {

    const { updatePassword } = useAuth()
    const passwordConfirmRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const history = useHistory()




    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            await updatePassword(passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to change password")
        }

    }


    return (
        <section>
            <div className="form-contact">
                <div className="contactinfo">
                    <div>
                        <h2>Change Password</h2>
                        <img src={Dang} style={{ width: "100%", height: '100%', objectFit: "cover" }} alt="" />
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
                    <h2>Change Password</h2>
                    <form className="formBox" onSubmit={handleSubmit}>
                        <div className="inputBox w100">
                            <input
                                required
                                type="password"
                                name="txtEmail"
                                ref={passwordRef}
                            ></input>
                            <span>New password</span>
                        </div>
                        <div className="inputBox w100">
                            <input
                                required
                                type="password"
                                name="txtPassword"
                                ref={passwordConfirmRef}
                            ></input>
                            <span>Conform password</span>
                            <p>{error}</p>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Update" name="" ></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
