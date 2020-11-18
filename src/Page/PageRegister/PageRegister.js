import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Register from "../../component/Register/index"




class PageRegister extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Register />
                <Footer />
            </div>
        );
    }
}

export default PageRegister;
