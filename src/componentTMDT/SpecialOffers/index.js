import React, { Component, useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import Dot6 from '../../img/6dottrang.png'
import Dot12 from '../../img/12dot.png'
import Gach3 from '../../img/3gach.png'
import "./style.scss"
import Tooltip from '../../component/Tooltip/Tooltip';
import firebase from '../../ConfigFirabase';
import { addProductToCart } from '../../Actions';
import { useDispatch } from 'react-redux';




export default function SpecialOffers() {

    const [valueSort, setvalueSorte] = useState("default")
    const [dataOnFirebase, setdataOnFirebase] = useState(null)
    const dispatch = useDispatch()

    //lay du lieu tren firabase xuong
    useEffect(() => {
        firebase.firestore().collection('product').onSnapshot((snap) => {
            setdataOnFirebase(snap.docs)//array chua co object
        });
    })
    //day la noi thuc thi cac ham
    const addToCart = (obj) => {
        dispatch(addProductToCart(obj))
    }

    //dady xu ly nh utrong render
    if (dataOnFirebase !== null) {
        if (valueSort === "lowHigh") {
            dataOnFirebase.sort((a, b) => {
                let obj1 = a.data();
                let obj2 = b.data();
                let priceA = (obj1.selecDiscount * (1 - (obj1.selecDiscount / 100)));
                let priceB = (obj2.selecDiscount * (1 - (obj2.selecDiscount / 100)));
                return priceA - priceB
            })
        }
        if (valueSort === "highLow") {
            dataOnFirebase.sort((a, b) => {
                let obj1 = a.data();
                let obj2 = b.data();
                let priceA = (obj1.selecDiscount * (1 - (obj1.selecDiscount / 100)));
                let priceB = (obj2.selecDiscount * (1 - (obj2.selecDiscount / 100)));
                return priceB - priceA
            })
        }
        //hien thi
        var element = dataOnFirebase.map((obj, index) => {
            let data = obj.data();
            return <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
                <div className="product-cart text-center">
                    <div className="product-img">
                        <img src={data.URLimage} alt="/" style={{ objectFit: "cover" }} />
                        <div>
                            <span onClick={() => addToCart(obj)}><i className='fas fa-shopping-cart' ></i></span>
                            <span ><i className='fas fa-search' ></i></span>
                            <span ><i className='far fa-heart' ></i></span>
                            <span ><i className='fas fa-sync-alt'></i></span>
                        </div>
                    </div>
                    <h6>{data.nameProduct}</h6>
                    <p>{data.selecCategory}</p>
                    <h6><span>${data.selecDiscount * (1 - (data.selecDiscount / 100))}</span><span>${data.pricesProduct}</span></h6>
                </div>
            </div>
        })
    }
    return (
        <>
            <div className='special'>
                <div style={{ marginTop: "52px" }}>
                    <div className='banner-shop'>
                        <div className="container text-center" style={{ paddingTop: "50px" }}>
                            <h1>Contact Us</h1>
                            <p><Link to='/'>Home</Link> / Special Offers</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1>Special Offers</h1>
                    <div className="row search d-flex align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <button className='btn btn-link'><img src={Dot6} alt='not found'></img></button>
                            <button className='btn btn-link'><img src={Dot12} alt='not found'></img></button>
                            <button className='btn btn-link'><img src={Gach3} alt='not found'></img></button>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <p>Product Compare (0)</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
                            <span>Sortby: </span>
                            <select
                                value={valueSort}
                                onChange={e => setvalueSorte(e.target.value)}>
                                <option >Default</option>
                                <option value="saab">Name (A - Z)</option>
                                <option value="opel">Name (Z - A)</option>
                                <option value="lowHigh">Price (Low > High)</option>
                                <option value="highLow">Price (High > Low)</option>
                                <option value="audi">Rating (Highest)</option>
                                <option value="audi">Rating (Lowest)</option>
                                <option value="audi">Model (A - Z)</option>
                                <option value="audi">Model (Z - A)</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12 d-flex">
                            <span>Show: </span>
                            <select>
                                <option value="volvo">12</option>
                                <option value="saab">25</option>
                                <option value="opel">50</option>
                                <option value="audi">75</option>
                                <option value="audi">100</option>
                            </select>
                        </div>
                    </div>
                    {/* product list */}
                    <div className="row product">
                        {element}
                    </div>
                </div>
            </div>
        </>
    );
}

