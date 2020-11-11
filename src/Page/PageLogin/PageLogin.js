import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import Login from '../../component/Login';
 


class PageLogin extends React.Component {

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Header/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default PageLogin;
