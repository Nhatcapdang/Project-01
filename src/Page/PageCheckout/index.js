import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Checkout from '../../componentTMDT/Checkout';




class PageLogin extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Checkout />
                <Footer />
            </div>
        );
    }
}

export default PageLogin;
