import React from 'react';
import './Style.scss';
import BS from '../../img/bs.jpg'
import { connect } from 'react-redux'
import * as action from '../../Actions/index'
import Tooltip from '../Tooltip/Tooltip'
import { toastInfo} from '../../common/toastify'



class BestSellers extends React.Component {

    addItem = (Array) => {

        this.props.addItem(Array);
        toastInfo()
    }
    render() {
        var element = this.props.BestSellers[0].map((array, index) => {
            return <div className="media mb-3" id='khoi' key={index}>
                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                <div id={array.bgImg}></div>
                <div className="media-body ml-3">
                    <h5 className="mt-0"><p>{array.text1}</p></h5>
                    <p>{array.text2}</p>
                    <h5 ><span style={{ color: '#40a944' }}>{array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h5>
                    <div className='listIcon text-center'>
                        <div className=' d-flex' style={{ padding: '0px 34px' }}>
                            <span className='spanIcon' onClick={() => this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart'></i></Tooltip></span>
                            <span className='spanIcon' style={{ margin: '0px 12px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' ></i></Tooltip></span>
                            <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' ></i></Tooltip></span>
                            <span className='spanIcon' style={{ marginLeft: '12px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' ></i></Tooltip></span>
                        </div>
                    </div>
                </div>
            </div>
        })
        var element2 = this.props.BestSellers[1].map((array, index) => {
            return <div className="media mb-3" id='khoi' key={index}>
                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                <div id={array.bgImg}></div>
                <div className="media-body ml-3">
                    <h5 className="mt-0"><p >{array.text1}</p></h5>
                    <p><>{array.text2}</></p>
                    <h5 ><span style={{ color: '#40a944' }}>{array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h5>
                    <div className='listIcon text-center'>
                        <div className=' d-flex' style={{ padding: '0px 34px' }}>
                            <span className='spanIcon' onClick={() => this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart'></i></Tooltip></span>
                            <span className='spanIcon' style={{ margin: '0px 12px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' ></i></Tooltip></span>
                            <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' ></i></Tooltip></span>
                            <span className='spanIcon' style={{ marginLeft: '12px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' ></i></Tooltip></span>
                        </div>
                    </div>
                </div>
            </div>
        })
        return (
            <div className='container mt-5'>
                <div className='row'>
                    {/* phan 1 */}
                    <div className='col-12 text-center'>
                        <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                    </div>
                    <div className='col-12 text-center'>
                        <h2><b>Best Sellers</b></h2>
                    </div>
                    <div className='col-12 mt-3'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-3 col-sm-12 col-12 text-center mb-5 d-none d-lg-block'>
                                <img alt='' src={BS} style={{ maxWidth: '100%' }}></img>
                            </div>
                            <div className='col-lg-8 col-md-12 col-sm-12 col-12 '>
                                <div className='row' id='bestSellers' style={{ flexDirection: 'column', height: '490px', width: '100%', overflowX: 'auto' }}>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                        {element}
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                        {element2}
                                    </div>
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
        BestSellers: state.BestSellers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (Array) => {
            dispatch(action.addItemDeals(Array))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BestSellers);
