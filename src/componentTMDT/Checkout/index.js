import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './StyleCheckout.scss'
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../ConfigFirabase/index'


export default function Checkout() {

    const { currentUser } = useAuth()
    const [txtPhone, settxtPhone] = useState()
    const [recipient, setrecipient] = useState("")
    const [address, setaddress] = useState("")
    const CartTMDT = useSelector(state => state.CartTMDT)
    const [phoneError, setphoneError] = useState("")
    const [recipientError, setrecipientError] = useState("")
    const [addressError, setaddressError] = useState("")
    const history = useHistory();

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    // }

    const total = () => {
        let initialValue = 0
        let total = CartTMDT.productCustomerChoose.reduce((accumulator, currentValue) => {
            let data = currentValue.payload.data();
            let priceDecreased = data.selecDiscount * (1 - (data.selecDiscount / 100))
            let totalAll = currentValue.soLuongKHClick * priceDecreased;
            return accumulator + totalAll;
        }, initialValue)
        return total
    }

    const discountCoupon = () => {
        let tong = total();
        let subTotal = tong * (CartTMDT.coupon / 100)
        return subTotal
    }
    const subTotal = () => {
        return total() - discountCoupon()
    }

    const conformOrder = () => {
        //dung ham map vi firabase ko ho tro gan du lieu truc tiep
        let productCustomerChoose = []
        CartTMDT.productCustomerChoose.map((obj) => {
            let data = obj.payload.data();
            let soLuongKHClick = obj.soLuongKHClick;
            let selecDiscount = data.selecDiscount;
            let selecCategory = data.selecCategory;
            let nameProduct = data.nameProduct;
            let URLimage = data.URLimage;
            let prices = data.pricesProduct
            productCustomerChoose.push({
                soLuongKHClick: soLuongKHClick,
                selecDiscount: selecDiscount,
                selecCategory: selecCategory,
                nameProduct: nameProduct,
                URLimage: URLimage,
                prices: prices
            })
        })
        if (validate()) {
            let data = {
                productCustomerChoose: productCustomerChoose,
                recipient: recipient,
                phone: txtPhone,
                addressCutomer: address,
                total: total(),
                coupon: CartTMDT.coupon,
                subtotal: subTotal(),
                status: false,
                email: currentUser.email,
                day: dayMonthYear(),
                pay: "not paid"
            }
            firebase.firestore().collection("customer").add(data)
                .then(
                    history.push('/success')
                )
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
    }
    const dayMonthYear = () => {
        let today = new Date()
        return today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    }
    const validate = () => {
        let checkingName = recipient;
        let checkingPhone = txtPhone;
        let checkingaddress = address;
        //eslint-disable-next-line
        const regexpName = /[a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/g;
        //eslint-disable-next-line
        const regexpPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        //eslint-disable-next-line
        const regexpaddress = /[a-zA-Z][^#&<>\"~;$^%{}?]{8,30}$/g;

        const checkingResultName = regexpName.exec(checkingName);
        if (checkingResultName !== null) {
            setrecipientError("")
        }
        const checkingResultPhone = regexpPhone.exec(checkingPhone);
        if (checkingResultPhone != null) {
            setphoneError("")
        }
        const checkingResultAddress = regexpaddress.exec(checkingaddress);
        if (checkingResultAddress !== null) {
            setaddressError("")
        }
        if (checkingResultName !== null && checkingResultPhone !== null && checkingResultAddress !== null) {
            return true    //ko hop le thi tra ve null
        } else {
            if (checkingResultName === null) {
                setrecipientError("Name at least 3-20 characters")
            }
            if (checkingResultPhone === null) {
                setphoneError("Starting with 0 and up to 10 numbers")
            }
            if (checkingResultAddress === null) {
                setaddressError("Adddress not null")
            }
            return false
        }
    }
    const checkCartNotNull = () => {
        if (CartTMDT.productCustomerChoose.length === 0) {
            return <p>Your shopping cart is empty!</p>
        } else {
            return <div className='float-right mt-2'>
                <button onClick={() => conformOrder()} type="button" className="btn btn-primary btn_sale mb-4" style={{ fontWeight: '900' }}>Conform order</button>
            </div>
        }
    }

    const element = CartTMDT.productCustomerChoose.map((obj, index) => {
        // cartTMDT:[
        //     {
        //         payload:{},
        //         soLuongKHClick
        //     }
        // ]
        let data = obj.payload.data();
        let priceDecreased = data.selecDiscount * (1 - (data.selecDiscount / 100))
        let totalAll = obj.soLuongKHClick * priceDecreased;

        return <tr key={index}>
            <td className='product_thumb' style={{ width: '230px' }}><img alt='' src={data.URLimage} style={{ width: '94px' }}></img></td>
            <td className='product_name' style={{ paddingTop: '3%' }}>{data.nameProduct}</td>
            <td className='product_detail'>{data.selecCategory}</td>
            <td className='product_detail'>${priceDecreased}</td>
            <td className='product_detail'>{obj.soLuongKHClick}</td>
            <td className='product_detail'>${totalAll}</td>
        </tr>
    })
    return (

        <div className=' cartStore' style={{ width: '100%', opacity: '0.9', zIndex: '2' }}>
            <div className='container p-0' style={{ background: 'white', marginTop: '100px' }}>
                <div className='row m-0 mt-5'>
                    {/* icon */}
                    {/* {/* table */}
                    <h1>Checkout</h1>
                    <div className='col-12 p-0' style={{ overflowY: 'auto', height: 'auto', transition: '0.5s' }}>
                        <div className='container p-0' style={{ zIndex: '1', height: 'auto' }}>
                            <div className="table-responsive">
                                <table className="table table-bordered text-center">
                                    <thead className='thead-light' style={{ borderBottom: '5px solid #40a944' }}>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th>Categories</th>
                                            <th>Decreased</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {element}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* cart totla */}
                        <div className='col-12 p-0' style={{ clear: 'both' }}>
                            <div className='container mt-5'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-7 col-sm-6 col-12 p-0 mb-4 pr-3'>
                                        <div style={{ border: '1px solid #ededed' }}>
                                            <h2 style={{ padding: '6px 15px', background: 'black', color: 'white' }}>COUPON</h2>
                                            <div className="pl-3 pr-3">
                                                <p>{CartTMDT.coupon === 0 ? `You dont have coupon` :
                                                    (CartTMDT.coupon === -1 ? "You dont have coupon" : `This code discounts ${CartTMDT.coupon}% of the total order value.`)
                                                }</p>
                                                <p>{currentUser ? currentUser.email : ""}</p>
                                                <form >
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control  "
                                                            placeholder="Recipient's name"
                                                            onChange={e => setrecipient(e.target.value)}
                                                        ></input>
                                                    </div>
                                                    <p style={{ color: "red", fontSize: '12px' }}>{recipientError}</p>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control  "
                                                            placeholder="Your number"
                                                            onChange={e => settxtPhone(e.target.value)}
                                                        ></input>
                                                    </div>
                                                    <p style={{ color: "red", fontSize: '12px' }}>{phoneError}</p>
                                                    <div className="form-group ">
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control  "
                                                            placeholder="Your address"
                                                            onChange={e => setaddress(e.target.value)}
                                                        ></input>
                                                    </div>
                                                    <p style={{ color: "red", fontSize: '12px' }}>{addressError}</p>
                                                    {/* <button type="submit" className="btn btn-primary btn_update mb-4">APPLY COUPON</button> */}
                                                    {/* <input type="submit" className="btn btn-primary btn_update mb-4" value="APPLY COUPON"></input> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-5 col-sm-6 col-12 p-0 pr-3'>
                                        <div style={{ border: '1px solid #ededed' }}>
                                            <h2 style={{ padding: '6px 15px', background: 'black', color: 'white' }}>CART TOTALS</h2>
                                            <div className='row p-3'>
                                                <div className='col-6 mb-2'><b>Total</b></div>
                                                <div className='col-6 text-right'><b>${total()}</b></div>
                                                <div className='col-6'><b>Delivery</b></div>
                                                <div className='col-6 text-right'><b>Free</b></div>
                                                <div className='col-6 mt-2'><b>Coupon code</b></div>
                                                <div className='col-6 mt-2 text-right'><b>${CartTMDT.coupon === 0 ? "No" :
                                                    (CartTMDT.coupon === -1 ? "No" : discountCoupon())
                                                }</b></div>
                                                <div className='col-12 text-right mt-2'>Calculate shipping</div>
                                            </div>
                                            <div>
                                                <div style={{ borderTop: '1px solid #ededed', margin: '0 25px' }}>
                                                    <div className='row pt-3'>
                                                        <div className='col-6 mb-2'><b>Subtotal</b></div>
                                                        <div className='col-6 text-right'><b>${subTotal()}</b></div>
                                                        <div className='col-12 mb-5'>
                                                            {currentUser ?
                                                                checkCartNotNull()
                                                                :
                                                                (
                                                                    <div className='float-right mt-2'>
                                                                        <Link to="/login" type="button" className="btn btn-primary btn_sale mb-4" style={{ fontWeight: '900' }}>Login</Link>
                                                                        <p style={{ color: "red" }}>You don't login yet</p>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* cart total */}
                </div>
            </div>
        </div>
    );
}