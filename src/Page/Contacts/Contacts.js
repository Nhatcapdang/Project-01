import React from 'react';
import Footer from '../../component/Footer/index'
import Header from '../../component/Header';
import GoogleMap from '../../component/ContactGgMap';




class Contact extends React.Component {

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Header />
        <GoogleMap/>
        {<Footer />}
      </div>
    );
  }
}

export default Contact;
