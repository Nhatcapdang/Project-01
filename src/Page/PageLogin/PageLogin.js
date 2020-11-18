import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Login from "../../component/Login/index"
import DemoFirebase from '../../component/DemoFirebase';
import DemoAuth from '../../component/DemoFirebase/Authentication';




class PageLogin extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Login />
                {/* <DemoFirebase />
                <DemoAuth /> */}
                <Footer />
            </div>
        );
    }
}

export default PageLogin;
