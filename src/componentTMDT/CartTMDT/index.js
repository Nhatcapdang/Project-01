import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductToCart } from '../../Actions';
import './StyleCart.scss'






export default function CartStore() {


    const [scrolled, setscrolled] = useState(true)
    const [cart, setcart] = useState(false)
    const CartTMDT = useSelector(state => state.CartTMDT)
    const [demo, setdemo] = useState(CartTMDT)

    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 300
            // console.log(window.scrollY)
            if (isTop !== true) {
                setscrolled(true)
            } else {
                setscrolled(false)
            }
        })
    }, [scrolled])

    const onShowCart = () => {
        setcart(!cart)
    }

    const subTotal = () => {
        let initialValue = 0
        let total = CartTMDT.reduce((accumulator, currentValue) => {
            let data = currentValue.payload.data();
            let priceDecreased = data.selecDiscount * (1 - (data.selecDiscount / 100))
            let totalAll = currentValue.soLuongKHClick * priceDecreased;
            return accumulator + totalAll;
        }, initialValue)
        return total
    }

    const onDelete = (id) => {
        dispatch(deleteProductToCart(id))
    }

    const element = demo.map((obj, index) => {
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
            <td className='product_detail'><span className='far fa-trash-alt' onClick={() => onDelete(obj.payload.id)} style={{ fontSize: '20px', cursor: 'pointer' }}></span></td>
            <td className='product_thumb' style={{ width: '230px' }}><img alt='' src={data.URLimage} style={{ width: '94px' }}></img></td>
            <td className='product_name' style={{ paddingTop: '3%' }}>{data.nameProduct}</td>
            <td className='product_detail'>${priceDecreased}</td>
            <td className='product_detail'>
                <form>
                    <label >Quantity </label>
                    <input type="text" name="quantity" min="1" max="99" value={obj.soLuongKHClick} style={{ height: '30px', width: '70px', marginLeft: '5px' }}></input>
                </form>
            </td>
            <td className='product_detail'>${totalAll}</td>
        </tr>
    })
    return (

        <div className=' cartStore fixed-top' style={{ width: '100%', opacity: '0.9', zIndex: '2' }}>
            <div className='container p-0' style={{ background: 'aliceblue' }}>
                <div className='row m-0 mt-5'>
                    {/* icon */}
                    <div className={scrolled ? 'col-1 ' : 'col-1 d-none'} style={{ position: 'fixed', top: '50%', left: '90%', zIndex: '2' }}>
                        <div className='float-right divIcon ' style={{ zIndex: '1' }} onClick={() => onShowCart()} ><span ><i className='fas fa-cart-arrow-down' style={{ fontSize: '35px', position: 'relative', top: '10px', left: '9px' }}></i></span>{CartTMDT.length === 0 ? '' : <span style={{ position: 'relative', top: '-46px', left: '20px', color: 'white', fontSize: '20px', background: 'red', borderRadius: '25px', padding: '0 5px' }}>{CartTMDT.length}</span>}</div>
                    </div>
                    {/* {/* table */}
                    <div className={cart ? 'col-12' : 'col-12 d-none '} style={{ overflowY: 'auto', height: '650px', transition: '0.5s' }}>
                        <div className='container p-0' style={{ zIndex: '1', height: 'auto' }}>
                            <div className="table-responsive">
                                <table className="table table-bordered text-center">
                                    <thead className='thead-light' style={{ borderBottom: '5px solid #40a944' }}>
                                        <tr>
                                            <th>Delete</th>
                                            <th>Image</th>
                                            <th>Product</th>
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
                        <div className='col-12'>
                            <div className='container'>
                                <div className='float-right mt-2 mb-4 d-flex'>
                                    <button type="button" className="btn btn-primary btn_update" >UPDATE CART</button>
                                    <button type="button" className="btn btn-primary btn_sale ml-4" onClick={() => onShowCart()}>CHOOSE NEXT</button>
                                </div>
                            </div>
                        </div>
                        {/* cart totla */}
                        <div className='col-12' style={{ clear: 'both' }}>
                            <div className='container mt-5'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-7 col-sm-6 col-12 p-0 mb-4 pr-3'>
                                        <div style={{ border: '1px solid #ededed' }}>
                                            <h2 style={{ padding: '6px 15px', background: 'black', color: 'white' }}>COUPON</h2>
                                            <p className='ml-3'>Enter your coupon code if you have one.</p>
                                            <div className="form-group float-left mr-4">
                                                <input type="text" className="form-control ml-3 " placeholder="Coupon code" style={{ maxWidth: '370px' }} ></input>
                                            </div>
                                            <button type="button" className="btn btn-primary btn_update mb-4">APPLY COUPON</button>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-5 col-sm-6 col-12 p-0 pr-3'>
                                        <div style={{ border: '1px solid #ededed' }}>
                                            <h2 style={{ padding: '6px 15px', background: 'black', color: 'white' }}>CART TOTALS</h2>
                                            <div className='row p-3'>
                                                <div className='col-6 mb-2'><b>Subtotal</b></div>
                                                <div className='col-6 text-right'><b>$23456</b></div>
                                                <div className='col-6'><b>Delivery</b></div>
                                                <div className='col-6 text-right'><b>$2</b></div>
                                                <div className='col-12 text-right mt-2'>Calculate shipping</div>
                                            </div>
                                            <div>
                                                <div style={{ borderTop: '1px solid #ededed', margin: '0 25px' }}>
                                                    <div className='row pt-3'>
                                                        <div className='col-6 mb-2'><b>Subtotal</b></div>
                                                        <div className='col-6 text-right'><b>${subTotal()}</b></div>
                                                        <div className='col-12 mb-5'><div className='float-right mt-2'> <button type="button" className="btn btn-primary btn_sale mb-4">Proceed To Checkout</button></div></div>
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

