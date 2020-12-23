import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isHidden } from '../../Actions';
import './StyleOrder.scss';
import firebase from "../../ConfigFirabase"
import { toastSuccess } from '../../common/toastify'


export default function Checkout(props) {

    const orderDetail = useSelector(state => state.ShowHiddenOrderDetail.orderDetail)
    const isShowHidden = useSelector(state => state.ShowHiddenOrderDetail.isShowHidden)
    const id = useSelector(state => state.ShowHiddenOrderDetail.id)
    const dispatch = useDispatch()
    const isHiddenDetail = () => {
        dispatch(isHidden())
    }


    if (orderDetail !== null) {
        var element = orderDetail.productCustomerChoose.map((obj, index) => {
            let priceDecreased = obj.selecDiscount * (1 - (obj.selecDiscount / 100))
            let totalAll = obj.soLuongKHClick * priceDecreased;
            return <tr key={index}>
                <td className='product_thumb' style={{ width: '230px' }}><img alt='' src={obj.URLimage} style={{ width: '94px' }}></img></td>
                <td className='product_name' style={{ paddingTop: '3%' }}>{obj.nameProduct}</td>
                <td className='product_detail'>{obj.selecCategory}</td>
                <td className='product_detail'>${priceDecreased}</td>
                <td className='product_detail'>{obj.soLuongKHClick}</td>
                <td className='product_detail'>${totalAll}</td>
            </tr>
        })
    }
    const Delivered = (value) => {
        if (value === "cancel") {
            let data = {
                ...orderDetail,
                status: value
            }
            firebase.firestore().collection("customer").doc(id).update(data)
                .then(() => {
                    toastSuccess("Success")
                });
        } else {
            let data = {
                ...orderDetail,
                status: true,
                pay: "paid"
            }
            firebase.firestore().collection("customer").doc(id).update(data)
                .then(() => {
                    toastSuccess("Success")
                });
            //dua vao report tren firabase
            let productSold = data.productCustomerChoose.reduce((tichLuy, next) => tichLuy + next.soLuongKHClick, 0)
            let nameAndAmount = [];
            data.productCustomerChoose.forEach((item) => nameAndAmount.push({
                nam: item.nameProduct,
                click: item.soLuongKHClick
            }))
            let sold = {
                coupon: data.coupon,
                subtotal: data.subtotal,
                total: data.total,
                soldProduct: productSold,
                nameAndAmount: nameAndAmount
            }
            firebase.firestore().collection("report").add(sold)
                .then(() => {
                });
        }
    }
    const disableCancel = () => {
        if (orderDetail !== null) {
            if (orderDetail.status === true) {
                return "d-none"
            }
        } else {
            return "float-right mt-2"
        }
    }
    const disableDelivered = () => {
        if (orderDetail !== null) {
            if (orderDetail.status === "cancel") {
                return "d-none"
            } if (orderDetail.status === true) {
                return "d-none"
            }
        } else {
            return "float-right mt-2"
        }
    }
    return (
        <div className={isShowHidden ? " detailOrder detailOrder-show" : " detailOrder"} style={{ width: '100%', opacity: '0.9', zIndex: '2' }}>
            <div className='container p-0' style={{ background: 'white' }}>
                <div className='row m-0 mt-5'>
                    {/* icon */}
                    {/* {/* table */}
                    <div className="iconClose">
                        <h4>Detail order</h4>
                        <p><i class="far fa-times-circle" onClick={() => isHiddenDetail()}></i></p>
                    </div>
                    <div className='col-12 p-0' style={{ overflowY: 'auto', height: '650px', transition: '0.5s' }}>
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
                                            <h2 style={{ padding: '6px 15px', background: 'black', color: 'white' }}>INFOR RECIPIENT</h2>
                                            <div className="pl-3 pr-3">
                                                <p><b>Coupon: </b>%{orderDetail !== null ? orderDetail.coupon : 0}</p>
                                                <p><b>User:</b> {orderDetail !== null ? orderDetail.email : 0}</p>
                                                <form >
                                                    <div className="form-group">
                                                        <b>Recipient:</b> {orderDetail !== null ? orderDetail.recipient : 0}
                                                    </div>
                                                    <div className="form-group">
                                                        <b>Phone:</b>{orderDetail !== null ? orderDetail.phone : 0}
                                                    </div>
                                                    <div className="form-group ">
                                                        <b>Address:</b> {orderDetail !== null ? orderDetail.addressCutomer : 0}
                                                    </div>
                                                    <div className="form-group ">
                                                        <b>Status pay:</b> {orderDetail !== null ? orderDetail.pay : 0}
                                                    </div>
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
                                                <div className='col-6 text-right'><b>${orderDetail !== null ? orderDetail.total : 0}</b></div>
                                                <div className='col-6'><b>Delivery</b></div>
                                                <div className='col-6 text-right'><b>Free</b></div>
                                                <div className='col-6 mt-2'><b>Coupon code</b></div>
                                                <div className='col-6 mt-2 text-right'><b>$0</b></div>
                                                <div className='col-12 text-right mt-2'>Calculate shipping</div>
                                            </div>
                                            <div>
                                                <div style={{ borderTop: '1px solid #ededed', margin: '0 25px' }}>
                                                    <div className='row pt-3'>
                                                        <div className='col-6 mb-2'><b>Subtotal</b></div>
                                                        <div className='col-6 text-right'><b>${orderDetail !== null ? orderDetail.subtotal : 0}</b></div>
                                                        <div className='col-12 mb-5'>
                                                            <div className={`float-right mt-2 ${disableDelivered()}`}>
                                                                <button type="button" onClick={() => Delivered()} className={props.khachHang === 1 ? "d-none" : "btn btn-primary btn_sale mb-4"} style={{ fontWeight: '900' }}>Delivered</button>
                                                            </div>
                                                            <div className={`float-right mt-2 ${disableCancel()}`}>
                                                                <button type="button" onClick={() => Delivered("cancel")} className="btn btn-denger btn_sale mb-4 mr-5 " style={{ fontWeight: '900', background: 'red' }}>Cancel order</button>
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
                    </div>
                    {/* cart total */}
                </div>
            </div>
        </div>
    );
}