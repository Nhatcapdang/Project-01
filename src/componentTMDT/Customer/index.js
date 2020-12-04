import React, { useEffect, useState } from 'react'
import "./StyleCustomer.scss"
import firebase from '../../ConfigFirabase'
import { useDispatch } from 'react-redux'
import { isShowHidden } from '../../Actions'
import DetailOrder from '../DetailOrder'




export default function Customer() {
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
        var element = productCustomerOrder.map((obj, index) => {
            const data = obj.data();
            return <div className="col-md-3" key={index} onClick={() => isShowAndHidden(obj)}>
                <div className={data.status === true ? "profile-sidebar profile-sidebar-green" : "profile-sidebar "}>
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
