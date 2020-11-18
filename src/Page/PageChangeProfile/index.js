import React from 'react';
import Footer from '../../component/Footer/index';
import Header from '../../component/Header';
import UpdateProfile from '../../component/UpdateProfile';




class PageLogin extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <UpdateProfile />
                <Footer />
            </div>
        );
    }
}

export default PageLogin;
