import React, { Component } from 'react';

const position = {
    color: 'white',
    padding: '12px 16px',
    backgroundColor: '#40a944',
    borderRadius: '999px',
    border:'2px solid white',
    marginRight: '46px'
}

class ToTopPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
          scrolled: true          
        }
      }
      componentDidMount() {
        window.addEventListener('scroll', () => {
          const isTop = window.scrollY < 500
          // console.log(window.scrollY)
          if (isTop !== true) {
            this.setState({
              scrolled: true
            })
          } else {
            this.setState({
              scrolled: false
            })
          }
        })
    }

    render() {
        var {scrolled}=this.state;
        return (
            <div className={scrolled? 'd-block':'d-none'} style={{ position: 'absolute' }}>
                <p id="id"></p>
                <div style={{ position: 'fixed', zIndex: '99',bottom:'86px',width:'100%',textAlign:'end' }}>
            
                    <a href="#id" style={position}><i className="fas fa-angle-double-up"></i></a>

                </div>
            </div>
        );
    }
}

export default ToTopPage;