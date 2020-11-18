import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import ForgotPassword from "../../component/ForgotPassword"





class PageLogin extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <ForgotPassword />
                <Footer />
            </div>
        );
    }
}

export default PageLogin;
