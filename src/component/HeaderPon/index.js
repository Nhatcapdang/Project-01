import React, { Component } from 'react';
import './Style1.scss';
import Logo from './../../img/logo.png'
import Support from './../../img/icon-phone.png'

class HeaderPon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    isShow = () => {
        console.log(this.state.show)
        this.setState({
            show: !this.state.show
        })

    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 menu-language p-0">
                            <ul>
                                <li>Language<i class="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i>
                                    <ul className="lv1">
                                        <li>French</li>
                                        <li>spanish</li>
                                        <li>Russian</li>
                                    </ul>
                                </li>
                                <li>Currency<i class="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i>
                                    <ul className="lv1">
                                        <li>€ Euro</li>
                                        <li>$ USD</li>
                                        <li>₡ EUR</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 menu-icon">
                            <ul className="header-icon">
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-youtube"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                                <li><i class="fab fa-linkedin-in"></i></li>
                            </ul>
                        </div>
                        {/* phan2 2list icon */}
                        <div className="col-3">
                            <img src={Logo} alt=""></img>
                        </div>
                        <div className="col-5 input">
                            <form>
                                <div>
                                    <select >
                                        <option className="option focus" selected value="volvo">Select a categories</option>
                                        <option className="option" value="saab">Accessories</option>
                                        <option className="option" value="mercedes">Accessories & More</option>
                                        <option className="option" value="audi">Butters & Eggs</option>
                                        <option className="option" value="audi">Camera & Video </option>
                                        <option className="option" value="audi">Mornitors</option>
                                        <option className="option" value="audi">Tablets</option>
                                        <option className="option" value="audi">Laptops</option>
                                        <option className="option" value="audi">Handbags</option>
                                        <option className="option" value="audi">Herbs & botanicals</option>
                                        <option className="option" value="audi">Vegetables</option>
                                        <option className="option" value="audi">Shop</option>
                                        <option className="option" value="audi">Laptops & Desktops</option>
                                        <option className="option" value="audi">Headphone & Speaker</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text"></input>
                                    <button><i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 d-flex cart-icon">
                            <div>
                                <ul >
                                    <li>REGISTER</li>
                                    <li>/</li>
                                    <li>LOGIN</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="cart-icon1">
                                    <li><i class="far fa-heart"></i><span class="badge badge-pill badge-secondary" >2</span></li>
                                    <li><i class="fas fa-shopping-cart"></i><span class="badge badge-pill badge-secondary">3</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* phan 3 */}
                        <div className="col-3 " onClick={() => this.isShow()} style={{ cursor: 'pointer', backgroundColor: '#40a940', color: 'white', borderRadius: '10px 10px 0 0' }}>
                            <div className=" d-flex" style={{ position: 'relative', top: '13px', left: '25px' }}>
                                <i class="fas fa-bars" style={{ position: 'absolute', top: '4px', left: '-25px' }}></i>
                                <h5>All Cattegories</h5>
                                <i class="fa fa-chevron-down" aria-hidden="true" style={{ position: 'absolute', top: '6px', right: '25px', fontSize: '12px' }}></i>
                            </div>
                            <ul className={this.state.show===true?"all-category show":"all-category hidden"}>
                                <li><a href="/">Vegetables</a></li>
                                <li><a href="/">Fruist</a></li>
                                <li><a href="/">Salads</a></li>
                                <li><a href="/">Fish & Seafood</a></li>
                                <li><a href="/">Freash Meat</a></li>
                                <li><a href="/">Butter & Eggs</a></li>
                                <li><a href="/">Milk</a></li>
                                <li><a href="/">Oil & Vinegars</a></li>
                                <li><a href="/">Bread</a></li>
                                <li><a href="/">Jam & Honey</a></li>
                                <li><a href="/">Frozen Food</a></li>
                            </ul>
                        </div>
                        <div className="col-6 nav-bar">
                            <ul className="lv0">
                                <li ><a href="/"><b>Home</b><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                                    <ul className="lv1">
                                        <li><a href="/">Home shop 1</a></li>
                                        <li><a href="/">Home shop 1</a></li>
                                        <li><a href="/">Home shop 1</a></li>
                                        <li><a href="/">Home shop 1</a></li>
                                        <li><a href="/">Home shop 1</a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><b>Shop</b><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                                    <ul className="lv1">
                                        <li><a href="/">Full Width</a></li>
                                        <li><a href="/">Full Width List</a></li>
                                        <li><a href="/">List View1</a></li>
                                        <li><a href="/">Wishlist</a></li>
                                        <li><a href="/">My Account</a></li>
                                    </ul></li>
                                <li><a href="/"><b>Blogs</b><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                                    <ul className="lv1">
                                        <li><a href="/">Blog Details</a></li>
                                        <li><a href="/">Blog Fullwidth</a></li>
                                        <li><a href="/">Blog Sidebar</a></li>
                                    </ul></li>
                                <li><a href="/"><b>Pages</b><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                                    <ul className="lv1">
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Services</a></li>
                                        <li><a href="/">Questions</a></li>
                                        <li><a href="/">Contact</a></li>
                                        <li><a href="/">Login</a></li>
                                        <li><a href="/">Error 404</a></li>
                                    </ul></li>
                                <li><a href="/"><b>Contact us</b></a></li>
                            </ul>
                        </div>
                        <div className="col-3 d-flex text-center" style={{ justifyContent: 'flex-end' }}>
                            <div style={{ position: 'relative', top: '6px', left: '-10px' }}>
                                <img src={Support} alt=""></img>
                            </div>
                            <div>
                                <p style={{ fontSize: '14px', color: "#6c6c6c", margin: '0' }}><b>037 7871 681 </b><br />Customer Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderPon;