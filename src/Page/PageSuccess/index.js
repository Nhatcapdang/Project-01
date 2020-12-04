import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Success from '../../componentTMDT/Success';




class PageLogin extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Success />
                <Footer />
            </div>
        );
    }
}

export default PageLogin;
