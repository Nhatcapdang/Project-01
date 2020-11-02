import React from 'react';
import Footer from '../../component/Footer/index'
import Header from '../../component/Header';
import GoogleMap from '../../component/ContactGgMap';
import AnimationFigma from '../../component/AnimationFigma/index'
import Contact_TellUs from '../../component/Contact_TellUs';




class Contact extends React.Component {

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Header />
        <AnimationFigma />
        <GoogleMap />
        <Contact_TellUs />
        {<Footer />}
      </div>
    );
  }
}

export default Contact;
