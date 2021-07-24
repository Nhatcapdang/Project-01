import React from 'react';
import './Style.scss';

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sTT: 1,
    };
  }

  show = (value) => {
    this.setState({
      sTT: value,
    });
  };
  render() {
    var { sTT } = this.state;
    return (
      <div style={{ overflow: 'hidden', marginTop: '50px' }}>
        <div
          className="bgImg"
          style={sTT === 1 ? { display: 'block' } : { display: 'none' }}
        >
          <div
            className="container"
            style={{ position: 'relative', top: '70px' }}
          >
            <h1>Vegetables Big Sale</h1>
            <h2 style={{ lineHeight: '35px', color: '#6c6c6c' }}>
              Fresh Farm Products
            </h2>
            <p style={{ marginBottom: '35px', color: '#8f8f8f' }}>
              10% certifled-organic mix of fruit and veggies. Perfect for
              <br />
              weekly cooking and snacking!
            </p>
            <a href="/">READ MORE</a>
          </div>
        </div>
        <div
          className="bgImg2"
          style={sTT === 2 ? { display: 'block' } : { display: 'none' }}
        >
          <div
            className="container p-0"
            style={{ position: 'relative', top: '70px' }}
          >
            <h1>Fresh Vegetables</h1>
            <h2 style={{ lineHeight: '35px', color: '#6c6c6c' }}>
              Natural Farm Products
            </h2>
            <p style={{ marginBottom: '35px', color: '#8f8f8f' }}>
              Widest range of farm-fresh Vegetables, Fruits & seasonal produce
            </p>
            <a href="/">READ MORE</a>
          </div>
        </div>
        <div
          className="bgImg3"
          style={sTT === 3 ? { display: 'block' } : { display: 'none' }}
        >
          <div
            className="container p-0"
            style={{ position: 'relative', top: '70px' }}
          >
            <h1>Fresh Tomatoes</h1>
            <h2 style={{ lineHeight: '35px', color: '#6c6c6c' }}>
              Natural Farm Products
            </h2>
            <p style={{ marginBottom: '35px', color: '#8f8f8f' }}>
              Natural organic tomatoes make your health stronger. <br />
              Put your information here
            </p>
            <a href="/">READ MORE</a>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ position: 'relative', top: '-50px' }}
        >
          <div className="col-lg-1 col-md-2 col-sm-3 col-3 d-flex">
            <div
              className={sTT === 1 ? 'active1' : 'dot'}
              onClick={() => this.show(1)}
            >
              <span></span>
            </div>
            <div
              className={sTT === 2 ? 'active1' : 'dot'}
              onClick={() => this.show(2)}
              style={{ margin: '0 5px' }}
            >
              <span></span>
            </div>
            <div
              className={sTT === 3 ? 'active1' : 'dot'}
              onClick={() => this.show(3)}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
