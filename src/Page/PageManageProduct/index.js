import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import ManageProduct from '../../componentTMDT/ManageProduct';




class PageManageProduct extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <ManageProduct />
                <Footer />
            </div>
        );
    }
}

export default PageManageProduct;
