import React from 'react';
import Footer from '../../component/Footer/index';
import HeaderPon from '../../component/HeaderPon';

 


class Blogs extends React.Component {

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        {/* {<Header/>} */}
        <HeaderPon/>
        { <Footer/> }
      </div>
    );
  }
}

export default Blogs;
