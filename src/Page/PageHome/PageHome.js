import React from 'react';
import './StyleHome.css';
import Header from '../../component/Header/index'
import Slide from '../../component/Slide/index'
import Contact from '../../component/Contact/index'
import Trending from '../../component/Trending Products/index'
import Deals from '../../component/Deals Of The Weeks/index'
import BestSellers from '../../component/Best Sellers/index'
import MostView from '../../component/Mostview Products/index'
import OurBlog from '../../component/Our Blog/index'
import Feature from '../../component/Featured Products/index'
import Footer from '../../component/Footer/index'
import CartStore from '../../component/CartStore/index'
import ScrollIndicator from '../../common/ScrollPage';




// import SwipeableList from '../component/Swipe/SwipeableList'
// import SwipeableListItem from '../component/Swipe/SwipeableListItem'



// const background = <span>Archive</span>;
// const fakeContent = (
//   <div className="FakeContent">
//     <span>Swipe to delete</span>
//   </div>
// );

class App extends React.Component {

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
          
          {<Header />}
          <ScrollIndicator/>
          {<Slide />}
          {<CartStore />}
          {<Contact />}
          {<Trending />}
          {<Deals />}
          {<BestSellers />}
          {<MostView />}
          {<OurBlog />}
          {<Feature />}
          {<Footer />}



        {/* <SwipeableList background={background}>
          <SwipeableListItem>{fakeContent}</SwipeableListItem>
          <SwipeableListItem>{fakeContent}</SwipeableListItem>
          <SwipeableListItem>{fakeContent}</SwipeableListItem>
          <SwipeableListItem>{fakeContent}</SwipeableListItem>
          <SwipeableListItem>{fakeContent}</SwipeableListItem>
        </SwipeableList> */}

      </div>
    );
  }
}

export default App;
