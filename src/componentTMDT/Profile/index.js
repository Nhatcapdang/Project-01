import React, { useEffect, useState } from "react"
import firebase from "../../ConfigFirabase/index"
import { useAuth } from "../../Contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



export default function Profile() {
    const { currentUser, logout } = useAuth();
    const history = useHistory()

    async function handleLogout() {

        try {
            await logout()
            history.push("/login")
        } catch {
            alert("Failed to log out")
        }
    }
    return (
        <div style={{ marginTop: "52px", display: "flex", justifyContent: "center" }}>
            <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src="https://i.pinimg.com/originals/d3/fe/d9/d3fed9b8d3b38f39c34b65a6d9989a5c.jpg" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{currentUser.email}</h4>
                    <p className="card-text">Some example text.</p>
                    <button className="btn btn-warning mr-5"><Link to="/update-profile">Change passwrod</Link></button>
                    <button className="btn btn-success" onClick={handleLogout}>Log out</button>
                </div>
            </div>
        </div>
    )

}