import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import ShopLeftRight from '../../component/Shop';
import ScrollIndicator from '../../common/ScrollPage';

 


class Shop extends React.Component {

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Header/>
        <ScrollIndicator/>
        <ShopLeftRight/>
        <Footer/>
      </div>
    );
  }
}

export default Shop;
