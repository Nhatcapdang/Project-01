import React from 'react';
import { Link } from 'react-router-dom';
import SimpleMap from '../../common/ggMap';





class GoogleMap extends React.Component {


    render() {

        return (
            <div style={{ marginTop: "52px" }} className='shop'>
                <div className='banner-shop'>
                    <div className="container text-center" style={{ paddingTop: "50px" }}>
                        <h1>Contact Us</h1>
                        <p><Link to='/'>Home</Link> / Contact Us</p>
                    </div>
                </div>
                <div className='pt-5' style={{ width: '100%', height: '400px' }}>
                    <SimpleMap />
                </div>

            </div>
        );
    }
}

export default GoogleMap;
