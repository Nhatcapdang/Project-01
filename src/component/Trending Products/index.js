import React from 'react';
import './Style.scss';
import Banner1 from '../../img/b1.jpg'
import Banner2 from '../../img/b2.jpg'
import { connect } from 'react-redux'
import * as action from '../../Actions/index'
import Tooltip from '../Tooltip/Tooltip'
import { toast } from 'react-toastify';

class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            array: [{
                text1: 'Aliquam Consequat',
                text2: 'Fruits',
                text3: '$26.00',
                text4: '$262.00',
            }]
        }
    }


    notify = () => toast("Wow success !");

    setActive = (value) => {
        this.setState({
            value: value
        });
    }
    addItem = (Array) => {
        this.notify()
        this.props.addItem(Array);
    }
    render() {
        var { value } = this.state;
        var element1 = this.props.TrendingProduct[0].map((array, index) => {
            return <div className='col-lg-auto col-md-auto col-sm-auto col-11 p-2 ' id='screen576' key={index}>
                {/* item 1.1 */}
                <div id='divHover'>
                    <div id={array.bgImg}>
                        <div><span style={{ float: 'right', margin: '10px', padding: '5px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>SALE</span></div>
                        <div className='listIcon '>
                            <div className=' d-flex' style={{ padding: '0px 20px' }}>
                                <span className='spanIcon' onClick={() => this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            </div>
                        </div>
                    </div>
                    <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                        <h5>{array.text1}</h5>
                        <p>{array.text2}</p>
                        <h6 ><span style={{ color: '#40a944' }}>{array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h6>
                    </div>
                </div>

            </div>
        })
        var element2 = this.props.TrendingProduct[1].map((array, index) => {
            return <div className='col-lg-auto col-md-auto col-sm-auto col-11 p-2 ' id='screen576' key={index}>
                {/* item 1.1 */}
                <div id='divHover'>
                    <div id={array.bgImg}>
                        <div><span style={{ float: 'right', margin: '10px', padding: '5px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>SALE</span></div>
                        <div className='listIcon '>
                            <div className=' d-flex' style={{ padding: '0px 20px' }}>
                                <span className='spanIcon' onClick={() => this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                <span className='spanIcon' style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            </div>
                        </div>
                    </div>
                    <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                        <h5>{array.text1}</h5>
                        <p>{array.text2}</p>
                        <h6 ><span style={{ color: '#40a944' }}>{array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h6>
                    </div>
                </div>

            </div>
        })

        return (
            <div>

                <div className='container mt-5'>
                    <div className='row'>
                        {/* phan 1 */}
                        <div className='col-12 text-center'>
                            <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                        </div>
                        <div className='col-12 text-center'>
                            <h2><b>Trending Products</b></h2>
                        </div>
                        {/* phan 2 */}
                        <div className='col-12 text-center mt-3 mb-4'>
                            <div className='row justify-content-center'>
                                <div className={(value === 1 ? 'col-lg-2 col-md-2 col-sm-3 col-4 Active' : 'col-lg-2 col-md-2 col-sm-3 col-4 Disable')} onClick={() => this.setActive(1)} >
                                    VEGETABLES
                            </div>
                                <div className={(value === 2 ? 'col-lg-2 col-md-2 col-sm-3 col-4 Active' : 'col-lg-2 col-md-2 col-sm-3 col-4 Disable')} onClick={() => this.setActive(2)} >
                                    FRUITS
                            </div>
                                <div className={(value === 3 ? 'col-lg-2 col-md-2 col-sm-3 col-4 Active' : 'col-lg-2 col-md-2 col-sm-3 col-4 Disable')} onClick={() => this.setActive(3)}>
                                    SALADS
                            </div>
                            </div>
                        </div>
                        {/* phan 3 */}
                        <div className='col-12 trending' style={{ overflowY: 'auto', height: '723px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                            <div className='row text-center m-0' style={{ height: '355px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                                {/* item1 */}
                                {element1}
                            </div>
                            <div className='row text-center m-0' style={{ height: '355px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                                {/* item1 */}
                                {element2}
                            </div>
                        </div>
                        {/* banner */}
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mb-3' id="sticky-container">
                                    <img alt='' src={Banner1} style={{ maxWidth: '100%' }}></img>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                                    <img alt='' src={Banner2} style={{ maxWidth: '100%' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        TrendingProduct: state.TrendingProduct
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (Array) => {
            dispatch(action.addItemDeals(Array))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slide);
