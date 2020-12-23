import React, { useEffect, useState } from 'react'
import "./StyleCustomer.scss"
import firebase from '../../ConfigFirabase'
import { useDispatch } from 'react-redux'
import { isShowHidden } from '../../Actions'
import DetailOrder from '../DetailOrder'




export default function Customer() {
    const [valueSort, setvalueSorte] = useState("All")
    const [productCustomerOrder, setproductCustomerOrder] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.firestore().collection('customer').onSnapshot((snap) => {
            setproductCustomerOrder(snap.docs)//array chua co object
        });
    }, [])

    const isShowAndHidden = (obj) => {
        let data = {
            orderDetail: obj,
            isShowHidden: true
        }
        dispatch(isShowHidden(data))
    }

    if (productCustomerOrder) {
        let arrayDelivered = []
        switch (valueSort) {
            case "Waiting":
                productCustomerOrder.map((obj) => {
                    const data = obj.data();
                    if (data.status === false) {
                        arrayDelivered.push(obj)
                    }
                })
                break;
            case "Delivered":
                productCustomerOrder.map((obj) => {
                    const data = obj.data();
                    if (data.status === true) {
                        arrayDelivered.push(obj)
                    }
                })
                break;
            case "Cancel":
                productCustomerOrder.map((obj) => {
                    const data = obj.data();
                    if (data.status === "cancel") {
                        arrayDelivered.push(obj)
                    }
                })
                break;
            default:
                arrayDelivered = productCustomerOrder
                break
        }
        var element = arrayDelivered.map((obj, index) => {
            const data = obj.data();
            return <div className="col-md-3" key={index} onClick={() => isShowAndHidden(obj)}>
                <div className={data.status === true ? "profile-sidebar profile-sidebar-green" : (data.status === false ? "profile-sidebar " : "profile-sidebar profile-sidebar-orange")}>
                    {/* SIDEBAR USERPIC */}
                    <div className="profile-userpic text-center">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" className="img-responsive" alt="/" />
                    </div>
                    {/* END SIDEBAR USERPIC */}
                    {/* SIDEBAR USER TITLE */}
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            {data.email}
                        </div>
                        <div className="profile-usertitle-name">
                            Recipient: {data.recipient}
                        </div>
                        <div className="profile-usertitle-name">
                            Recipient's number: {data.phone}
                        </div>
                        <div className="profile-usertitle-job">
                            {data.day}
                        </div>
                        <div className="profile-usertitle-job">
                            Coupon: {data.coupon}%
                        </div>
                        <div className="profile-usertitle-job">
                            {data.pay}
                        </div>
                    </div>
                    {/* END SIDEBAR USER TITLE */}
                    {/* SIDEBAR BUTTONS */}
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-success btn-sm">Total: {data.total}</button>
                        <button type="button" className="btn btn-danger btn-sm">Subtotal: {data.subtotal}</button>
                    </div>
                    {/* END SIDEBAR BUTTONS */}
                    {/* SIDEBAR MENU */}
                    <div className="profile-usermenu ml-2">
                        <ul className="nav">
                            <li className="">
                                <b>Delivery to:</b> {data.addressCutomer}
                            </li>
                        </ul>
                    </div>
                    {/* END MENU */}
                </div>
            </div>
        })
    }
    return (
        <div style={{ marginTop: "70px" }}>
            <div className="text-center">
                <i class="fas fa-square text-danger">Waiting for delivery</i>
                <i class="fas fa-square text-success ml-5 mr-5">Delivered</i>
                <i class="fas fa-square text-warning">Cancel order</i>
                <span className="ml-5">Show: </span>
                <select
                    value={valueSort}
                    onChange={e => setvalueSorte(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Waiting">Waiting for delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancel">Cancel order</option>
                </select>
            </div>
            <div className="container customerr p-0">
                <div className="row profile">
                    {element}
                </div>
            </div>
            <DetailOrder />
        </div>
    )
}
