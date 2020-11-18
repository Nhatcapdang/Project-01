import React, { useEffect, useState } from 'react';
import './Style.scss';
import {
    Link,
    useHistory
} from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext"
function Header() {
    const { currentUser, logout } = useAuth()
    const [showAvatar, setshowAvatar] = useState(false)
    useEffect(() => {
        if (currentUser !== null) {
            setshowAvatar(true)
        }
    }, [currentUser])

    const history = useHistory()

    async function handleLogout() {

        try {
            await logout()
            history.push("/login")
        } catch {
            alert("Failed to log out")
        }
    }
    return (
        <div style={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', zIndex: '3' }} className='fixed-top'>
            <div className='container '>
                <div className='row' style={{ height: '50px' }}>
                    <div className='col-lg-3 col-md-3 col-sm-4 col-12 text-center' style={{ background: '#40a944', borderRadius: '10px 10px 0 0' }}>
                        {/* <span><i className="fas fa-bars" style={{ color: 'white', position: 'relative', top: '15px' }}></i></span> */}
                        <h4 style={{ lineHeight: '50px', color: 'white' }} className='m-0'>All Cattegories</h4>
                        {/* <p><i className="fas fa-angle-down" style={{ color: 'white', position: 'relative', top: '17px' }}></i></p> */}
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-8 col-12 p-0 pl-4' style={{ zIndex: '1' }}>
                        <nav>
                            <ul className='d-flex m-0 p-0 menuChinh' style={{ listStyle: 'none' }}>
                                <li style={{ lineHeight: '50px', width: '80px', textAlign: 'center' }}><Link to='/' style={{ textDecoration: 'none' }}>Home<span className="fas fa-angle-down" style={{ position: 'relative', top: '1px', left: '4px' }}></span></Link>
                                    <ul className='menuPhu'>
                                        <li><a href='/'>Home Shop 1</a></li>
                                        <li><a href='/'>Home Shop 2</a></li>
                                        <li><a href='/'>Home Shop 3</a></li>
                                        <li><a href='/'>Home Shop 4</a></li>
                                        <li><a href='/'>Home Shop 5</a></li>
                                    </ul>
                                </li>
                                <li style={{ lineHeight: '50px', width: '80px', textAlign: 'center' }}><Link to='/shop' style={{ textDecoration: 'none', display: 'block' }}>Shop<span className="fas fa-angle-down" style={{ position: 'relative', top: '1px', left: '4px' }}></span></Link>
                                    <ul className='menuPhu'>
                                        <li><a href='/'>Home Shop 1</a></li>
                                        <li><a href='/'>Home Shop 2</a></li>
                                        <li><a href='/'>Home Shop 3</a></li>
                                        <li><a href='/'>Home Shop 4</a></li>
                                        <li><a href='/'>Home Shop 5</a></li>
                                    </ul>
                                </li>
                                <li style={{ lineHeight: '50px', width: '80px', textAlign: 'center' }}><Link to='Blog' style={{ textDecoration: 'none', display: 'block' }}>Blogs<span className="fas fa-angle-down" style={{ position: 'relative', top: '1px', left: '4px' }}></span></Link>
                                    <ul className='menuPhu'>
                                        <li><a href='/'>Home Shop 1</a></li>
                                        <li><a href='/'>Home Shop 2</a></li>
                                        <li><a href='/'>Home Shop 3</a></li>
                                        <li><a href='/'>Home Shop 4</a></li>
                                        <li><a href='/'>Home Shop 5</a></li>
                                    </ul>
                                </li>
                                <li style={{ lineHeight: '50px', width: '80px', textAlign: 'center' }}><a href='/' style={{ textDecoration: 'none', display: 'block' }}>Pages<span className="fas fa-angle-down" style={{ position: 'relative', top: '1px', left: '4px' }}></span></a>
                                    <ul className='menuPhu'>
                                        <li><Link to='/specialoffers'>Special Offers</Link></li>
                                        <li><a href='/'>Home Shop 2</a></li>
                                        <li><a href='/'>Home Shop 3</a></li>
                                        <li><a href='/'>Home Shop 4</a></li>
                                        <li><a href='/'>Home Shop 5</a></li>
                                    </ul>
                                </li>
                                <li style={{ lineHeight: '50px', width: '80px', textAlign: 'center' }}><Link to='contact' style={{ textDecoration: 'none', display: 'block' }}>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-12 d-none d-md-block avatar_right'>
                        <div className={currentUser ? "d-none" : ""} style={{ textAlign: 'end' }}>
                            <p className='m-0'><Link to="/login">Login</Link></p>
                            <p className='m-0'><Link to="/register">Sign up</Link></p>
                        </div>
                        <div className={currentUser ? "" : "d-none"} style={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
                            <Link to="/dashboard"><img src="https://lh3.googleusercontent.com/ogw/ADGmqu8ZGyn20iFzwh69YLQds7IJ4462yniS63s2MxwTU7w=s32-c-mo" alt="Avatar" class="avatar"></img></Link>
                            <p className="m-0" style={{ textTransform: "capitalize" }}>{currentUser ? currentUser.email : ""} <i style={{ cursor: "pointer" }} onClick={handleLogout} className="fas fa-sign-out-alt"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
