import React from 'react';
import Header from '../../component/Header/index';
import Footer from '../../component/Footer/index'
import SpecialOffers from '../../componentTMDT/SpecialOffers';
import CartTMDT from '../../componentTMDT/CartTMDT';




class PageSpecialOffers extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <SpecialOffers />
                <CartTMDT />
                <Footer />
            </div>
        );
    }
}

export default PageSpecialOffers;
