import React, { useEffect, useState } from "react"
import firebase from "../../ConfigFirabase/index"
import { useAuth } from "../../Contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "./StyleProfile.scss"
import { useDispatch } from "react-redux"
import { isShowHidden } from "../../Actions"
import DetailOrder from '../DetailOrder'



export default function Profile() {
    const { currentUser, logout } = useAuth();
    const history = useHistory()
    const dispatch = useDispatch()
    const [productCustomerOrder, setproductCustomerOrder] = useState(null)

    useEffect(() => {
        firebase.firestore().collection('customer').onSnapshot((snap) => {
            setproductCustomerOrder(snap.docs)//array chua co object
        });
    }, [])
    async function handleLogout() {

        try {
            await logout()
            history.push("/login")
        } catch {
            alert("Failed to log out")
        }
    }
    const isShowAndHidden = (obj) => {
        let data = {
            orderDetail: obj,
            isShowHidden: true
        }
        dispatch(isShowHidden(data))
    }
    if (productCustomerOrder) {
        let orderhistory = []
        for (let i = 0; i < productCustomerOrder.length; i++) {
            const dataPhanTuThuY = productCustomerOrder[i].data();
            if (dataPhanTuThuY.email === currentUser.email) {
                orderhistory.push(productCustomerOrder[i])
            }
        }
        var element = orderhistory.map((obj, index) => {
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
        <div style={{ marginTop: "52px" }}>
            <div className="container d-flex justify-content-center">
                <div className="card" style={{ width: 400 }}>
                    <img className="card-img-top" src={currentUser.photoURL || "https://i.pinimg.com/originals/d3/fe/d9/d3fed9b8d3b38f39c34b65a6d9989a5c.jpg"} alt="/" />
                    <div className="card-body">
                        <h4 className="card-title">{currentUser.email}</h4>
                        <p className="card-text">Some example text.</p>
                        <button className="btn btn-warning mr-5"><Link to="/update-profile">Change passwrod</Link></button>
                        <button className="btn btn-success" onClick={handleLogout}>Log out</button>
                    </div>
                </div>
                <div className={currentUser.email === "nhatcapdang@gmail.com" ? "card" : "d-none"} style={{ width: 400 }}>
                    <div className="card-body">
                        <button className="btn btn-light mr-5"><Link to="/customer">Customer Order</Link></button>
                        <button className="btn btn-light" ><Link to="/manageproduct">Manager Product</Link></button>
                        <button className="btn btn-light mt-2" ><Link to="/report">Report</Link></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center">ORDER HISTORY</h1>
                <div className="text-center">
                    <i class="fas fa-square text-danger">Waiting for delivery</i>
                    <i class="fas fa-square text-success ml-5 mr-5">Delivered</i>
                    <i class="fas fa-square text-warning">Cancel order</i>
                </div>
                <div className="container  p-0">
                    <div className="row profile-order profile">
                        {element}
                    </div>
                </div>
            </div>
            <DetailOrder khachHang={1} />
        </div>
    )

}