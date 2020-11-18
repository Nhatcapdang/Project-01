import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Profile from '../../component/Profile';




class PageRegister extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Profile />
                <Footer />
            </div>
        );
    }
}

export default PageRegister;
