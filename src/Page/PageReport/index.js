import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Report from '../../componentTMDT/Report';




class PageReport extends React.Component {

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <Report />
                <Footer />
            </div>
        );
    }
}

export default PageReport;
