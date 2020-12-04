import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setCartDefault } from '../../Actions'
import './styleSuccess.scss'

export default function Success() {
    const history = useHistory()
    const dispatch = useDispatch()
    const setCartTMDTReducer = () => {
        dispatch(setCartDefault())
        history.push("/specialoffers")
    }
    return (
        <div style={{ marginTop: "52px" }}>
            <div className="container success">
                <h1>YOUR ORDER HAS BEEN PLACED!</h1>
                <p>Your order has been successfully processed!</p>
                <p>You can view your order history by going to the My Account page and by clicking on History.</p>
                <p>If your purchase has an associated download, you can go to the account Downloads page to view them.</p>
                <p>Please direct any questions you have to the Store Owner.</p>
                <p>Thanks for shopping with us online!</p>
                <div className="text-right">
                    <button onClick={() => setCartTMDTReducer()} className="btn btn-primary btn_update" >CONTINUE</button>
                </div>
            </div>
        </div>
    )
}
