import React from 'react';
import './StyleShop.scss'
import Banner2 from '../../img/bannerShop2.jpg'
import Dot6 from '../../img/6dottrang.png'
import Dot12 from '../../img/12dot.png'
import Gach3 from '../../img/3gach.png'
import Range from '../Range/index'
import { Link } from 'react-router-dom'
import Tooltip from '../Tooltip/Tooltip';





class ShopLeftRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sTT: false,
            sTT2: false,
            sTT3: false,
            array: [
                {
                    id: 1,
                    text1: 'Mauris Vel Tellus',
                    text2: 'Fruits',
                    text3: '$48.00',
                    text4: '$345.00',
                    bgImg: 'bgImg'
                },
                {
                    id: 2,
                    text1: 'Nunc Neque Eros',
                    text2: 'Fruits',
                    text3: '$45.00',
                    text4: '$245.00',
                    bgImg: 'bgImg2'
                },
                {
                    id: 3,
                    text1: 'Proin Lectus Ipsum',
                    text2: 'Fruits',
                    text3: '$35.00',
                    text4: '$145.00',
                    bgImg: 'bgImg3'
                },
                {
                    id: 4,
                    text1: 'Quisque In Arcu',
                    text2: 'Fruits',
                    text3: '$25.00',
                    text4: '$235.00',
                    bgImg: 'bgImg4'
                },
                {
                    id: 5,
                    text1: 'Cas Meque Metus',
                    text2: 'Fruits',
                    text3: '$30.00',
                    text4: '$255.00',
                    bgImg: 'bgImg5'
                },
                {
                    id: 3,
                    text1: 'Proin Lectus Ipsum',
                    text2: 'Fruits',
                    text3: '$35.00',
                    text4: '$145.00',
                    bgImg: 'bgImg3'
                },
                {
                    id: 2,
                    text1: 'Nunc Neque Eros',
                    text2: 'Fruits',
                    text3: '$45.00',
                    text4: '$245.00',
                    bgImg: 'bgImg2'
                },

                {
                    id: 5,
                    text1: 'Cas Meque Metus',
                    text2: 'Fruits',
                    text3: '$30.00',
                    text4: '$255.00',
                    bgImg: 'bgImg5'
                },
                {
                    id: 3,
                    text1: 'Proin Lectus Ipsum',
                    text2: 'Fruits',
                    text3: '$35.00',
                    text4: '$145.00',
                    bgImg: 'bgImg3'
                },
                {
                    id: 2,
                    text1: 'Nunc Neque Eros',
                    text2: 'Fruits',
                    text3: '$45.00',
                    text4: '$245.00',
                    bgImg: 'bgImg2'
                },
                {
                    id: 3,
                    text1: 'Proin Lectus Ipsum',
                    text2: 'Fruits',
                    text3: '$35.00',
                    text4: '$145.00',
                    bgImg: 'bgImg3'
                },
                {
                    id: 4,
                    text1: 'Quisque In Arcu',
                    text2: 'Fruits',
                    text3: '$25.00',
                    text4: '$235.00',
                    bgImg: 'bgImg4'
                }
            ]
        }
    }
    show = (value) => {
        var { sTT, sTT2, sTT3 } = this.state;
        if (value === 1) {
            this.setState({
                sTT: !sTT
            })
        } else {
            if (value === 2) {
                this.setState({
                    sTT2: !sTT2
                })
            } else {
                this.setState({
                    sTT3: !sTT3
                })
            }
        }
    }

    render() {
        var { sTT, sTT2, sTT3, array } = this.state;
        var element = array.map((item, index) => {
            return <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-center p-0' key={index} >
                <div id='divHover'>
                    <div id={item.bgImg}>
                        <div><span style={{ float: 'left', margin: '10px', padding: '0px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>NEW</span></div>
                        <div className='listIcon '>
                            <div className='d-flex' style={{ padding: '0 20px', position: 'absolute' }}>
                                <span className='spanIcon' ><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            </div>
                        </div>
                    </div>
                    <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                        <h5>{item.text1}</h5>
                        <p>{item.text2}</p>
                        <h6 ><span style={{ color: '#40a944' }}>${item.text3}</span> <span style={{ textDecoration: 'line-through', color: 'red' }}>${item.text4}</span></h6>
                    </div>
                </div>
            </div>
        })
        return (
            <div style={{ marginTop: "52px" }} className='shop'>
                <div className='banner-shop'>
                    <div className="container text-center" style={{ paddingTop: "50px" }}>
                        <h1>SHOP</h1>
                        <p><Link to='/'>Home</Link> / Shop</p>
                    </div>
                </div>
                {/* phan 2 */}
                <div className="container p-0 mt-4">
                    <div className="row p-4 convert">
                        <div className="col-lg-3 col-md-3 col-12 pl-0">
                            {/* wonmen */}
                            <h3 className='fz-15'><b>WOMEN</b></h3>
                            <hr />
                            <ul>
                                <li onClick={() => this.show(1)}>Shoes{sTT ? <i className="fas fa-minus" style={{ fontSize: '8px', float: 'right' }}></i> : <i className="fas fa-plus" style={{ fontSize: '8px', float: 'right' }}></i>}
                                    <ul className={(sTT ? '' : 'd-none')}>
                                        <li>Document</li>
                                        <li>Dropcap</li>
                                        <li>Dummy Image</li>
                                        <li>Dummy Text</li>
                                        <li>Fancy Text</li>
                                    </ul>
                                </li>
                                <li onClick={() => this.show(2)}>Bags{sTT2 ? <i className="fas fa-minus" style={{ fontSize: '8px', float: 'right' }}></i> : <i className="fas fa-plus" style={{ fontSize: '8px', float: 'right' }}></i>}
                                    <ul className={(sTT2 ? '' : 'd-none')}>
                                        <li>Flickr</li>
                                        <li>Flip Box</li>
                                        <li>Cocktail</li>
                                        <li>Frame</li>
                                        <li>Flickrq</li>
                                    </ul>
                                </li>
                                <li onClick={() => this.show(3)}>Clothing{sTT3 ? <i className="fas fa-minus" style={{ fontSize: '8px', float: 'right' }}></i> : <i className="fas fa-plus" style={{ fontSize: '8px', float: 'right' }}></i>}
                                    <ul className={(sTT3 ? '' : 'd-none')}>
                                        <li>Platform Beds</li>
                                        <li>Storage Beds</li>
                                        <li>Regular Beds</li>
                                        <li>Sleigh Beds</li>
                                        <li>Laundry</li>
                                    </ul>
                                </li>
                            </ul>
                            {/*  FILTER BY PRICE*/}
                            <h3 className='fz-15'><b>FILTER BY PRICE</b></h3>
                            <hr />
                            <div>
                                <Range />
                            </div>
                            {/* SELECT BY COLOR*/}
                            <h3 className='fz-15'><b>SELECT BY COLOR</b></h3>
                            <hr />
                            <ul>
                                <li>Green<i style={{ fontSize: '12px', float: 'right' }}>(6)</i></li>
                                <li>Black<i style={{ fontSize: '12px', float: 'right' }}>(22)</i></li>
                                <li>Yellow<i style={{ fontSize: '12px', float: 'right' }}>(01)</i></li>
                                <li>Blue<i style={{ fontSize: '12px', float: 'right' }}>(10)</i></li>
                                <li>Pink<i style={{ fontSize: '12px', float: 'right' }}>(98)</i></li>
                            </ul>
                            {/* SELECT BY SIZE*/}
                            <h3 className='fz-15'><b>SELECT BY SIZE</b></h3>
                            <hr />
                            <ul>
                                <li>S<i style={{ fontSize: '12px', float: 'right' }}>(6)</i></li>
                                <li>M<i style={{ fontSize: '12px', float: 'right' }}>(21)</i></li>
                                <li>L<i style={{ fontSize: '12px', float: 'right' }}>(21)</i></li>
                                <li>XL<i style={{ fontSize: '12px', float: 'right' }}>(03)</i></li>
                                <li>LG<i style={{ fontSize: '12px', float: 'right' }}>(99)</i></li>
                            </ul>
                            {/*  MANUFACTURER*/}
                            <h3 className='fz-15'><b>My Girlfriend</b></h3>
                            <hr />
                            <ul>
                                <li>PNCP<span style={{ fontSize: '12px', float: 'right' }}>(22)</span></li>
                                <li>CMK<span style={{ fontSize: '12px', float: 'right' }}>(21)</span></li>
                                <li>NLA<span style={{ fontSize: '12px', float: 'right' }}>(20)</span></li>
                                <li>TNM<span style={{ fontSize: '12px', float: 'right' }}>(19)</span></li>
                                <li>NMH<span style={{ fontSize: '12px', float: 'right' }}>(22)</span></li>
                            </ul>
                            {/*  Link FB*/}
                            <h3 className='fz-15'><b>Infomation</b></h3>
                            <hr />
                            <div>
                                <a href='/' className='tag'>PNCP</a>
                                <a href='/' className='tag'>CMK</a>
                                <a href='/' className='tag'>NLA</a>
                                <a href='/' className='tag'>TNH</a>
                                <a href='/' className='tag'>NLH</a>
                                <a href='/' className='tag'>NVK</a>
                                <a href='/' className='tag'>PNCP</a>
                                <a href='/' className='tag'>TNH</a>
                                <a href='/' className='tag'>NLH</a>
                            </div>
                            {/* <ul>
                                <li>PNCP<span style={{ fontSize: '12px', float: 'right' }}>(22)</span></li>
                                <li>CMK<span style={{ fontSize: '12px', float: 'right' }}>(21)</span></li>
                                <li>NLA<span style={{ fontSize: '12px', float: 'right' }}>(20)</span></li>
                                <li>TNM<span style={{ fontSize: '12px', float: 'right' }}>(19)</span></li>
                                <li>NMH<span style={{ fontSize: '12px', float: 'right' }}>(22)</span></li>                             
                            </ul>                            */}
                            {/* hinh */}
                            <img src={Banner2} className='w-100' alt='not found'></img>
                        </div>
                        {/* phan right */}
                        <div className="col-lg-9 col-md-9 col-12 ">
                            {/* phan 1 */}
                            <div className='row'>
                                <div className='col-12 mb-5'>
                                    <div style={{ padding: '10px 0px', border: '1px solid #6c6c6c' }}>
                                        <div className='row text-center'>
                                            <div className='col-lg-3 col-12 '>
                                                <button className='btn btn-link'><img src={Dot6} alt='not found'></img></button>
                                                <button className='btn btn-link'><img src={Dot12} alt='not found'></img></button>
                                                <button className='btn btn-link'><img src={Gach3} alt='not found'></img></button></div>
                                            <div className='col-lg-4 col-12 '>
                                                <select className='form-control' style={{ fontSize: '15px', display: 'inline', width: 'auto' }}>
                                                    <option value="1">Sort by average rating</option>
                                                    <option value="2">Sort by popularity</option>
                                                    <option value="3">Sort by newness</option>
                                                    <option value="4">Sort by price: low to high</option>
                                                    <option value="4">Sort by price: high to low</option>
                                                    <option value="4">Product Name: Z</option>
                                                </select></div>
                                            <div className='col-lg-5 col-12 '><p>Showing 1–9 of 21 results</p></div>
                                        </div>
                                    </div>
                                </div>
                                {/* phan 2 */}
                                {element} {/*hien ra cac san pham*/}
                                {/* pagination */}
                                <div className='col-12'>
                                    <div className='col-12 mb-5'>
                                        <div style={{ padding: '10px 0px', border: '1px solid #6c6c6c' }}>
                                            <ul className="pagination justify-content-center m-0 pl-0">
                                                <li className="page-item"><a className="page-link page-a bg-success" href="/">1</a></li>
                                                <li className="page-item"><a className="page-link page-a ml-3" href="/">2</a></li>
                                                <li className="page-item"><a className="page-link page-a ml-3" href="/">3</a></li>
                                                <li className="page-item"><a className="page-link page-a ml-3" href="/">Next</a></li>
                                                <li className="page-item"><a className="page-link page-a ml-3" href="/"><i class="fas fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopLeftRight;
