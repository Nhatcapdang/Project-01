import React from 'react';
import Header from '../../component/Header/index';
import Footer from '../../component/Footer/index'
import SpecialOffers from '../../component/SpecialOffers';




class PageSpecialOffers extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <SpecialOffers />
                <Footer />
            </div>
        );
    }
}

export default PageSpecialOffers;
