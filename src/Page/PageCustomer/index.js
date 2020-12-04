import React from 'react';
import Footer from '../../component/Footer/index';
import Header from '../../component/Header';
import Customer from '../../componentTMDT/Customer';




class PageCustomer extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Customer />
                <Footer />
            </div>
        );
    }
}

export default PageCustomer;
