import React from 'react';
import './StyleFeature.scss';
import * as action from '../../Actions/index'
import { connect } from 'react-redux'
import Tooltip from '../Tooltip/Tooltip'
import { toastError} from '../../common/toastify'
class Feature extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {

    //         array: [{
    //             text1: 'Aliquam Consequat',
    //             text2: 'Fruits',
    //             text3: '$26.00',
    //             text4: '$262.00',
    //         }]
    //     }
    // }

addItem=(Array)=>{
    this.props.addItem(Array)
    toastError()
}

    render() {
        // var {  array } = this.state;
        var element1 = this.props.FearuteProduct[0].map((array, index) => {
            return  <div className='divHover d-flex mt-3' key={index}>
            <div className={array.bgImg}></div>
            <div className=' ml-3' style={{ height: '130px' }} >
                <h5>{array.text1}</h5>
                <p>{array.text2}</p>
                <h5 >  <span style={{ color: '#40a944' }}>  ${array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h5>
                <div className='listIcon'>
                <div style={{ margin: '-16px -6px' }}>
                    <div className=' d-flex' style={{padding:'0px 20px'}}>
                                    <span className='spanIcon' onClick={()=>this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon'  style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon'   style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
        })
        var element2 = this.props.FearuteProduct[1].map((array, index) => {
            return  <div className='divHover d-flex mt-3' key={index}>
            <div className={array.bgImg}></div>
            <div className=' ml-3' style={{ height: '130px' }} >
                <h5> {array.text1}</h5>
                <p>{array.text2}</p>
                <h5 >  <span style={{ color: '#40a944' }}>  ${array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h5>
                <div className='listIcon'>
                    <div style={{ margin: '-16px -6px' }}>
                    <div className=' d-flex' style={{padding:'0px 20px'}}>
                                    <span className='spanIcon' onClick={()=>this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon'  style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon'   style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
        })
        var element3 = this.props.FearuteProduct[2].map((array, index) => {
            return  <div className='divHover d-flex mt-3' key={index}>
            <div className={array.bgImg}></div>
            <div className=' ml-3' style={{ height: '130px' }} >
                <h5> {array.text1}</h5>
                <p>{array.text2}</p>
                <h5 >  <span style={{ color: '#40a944' }}>  ${array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h5>
                <div className='listIcon'>
                <div style={{ margin: '-16px -6px' }}>
                    <div className=' d-flex' style={{padding:'0px 20px'}}>
                                    <span className='spanIcon' onClick={()=>this.addItem(array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon'  style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    <span className='spanIcon'   style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '20px' }}></i></Tooltip></span>
                                    </div>
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
                        <h2><b>Featured Products</b></h2>
                    </div>
                    {/* phan 3 */}
                    <div className='col-12 Feature'>
                        <div className='row m-0' style={{ overflowY: 'auto', height: '459px', width: '100%', flexDirection: 'column' }}>
                            {/*  style={{ overflowY: 'auto', height: '678px', width: '100%', flexDirection: 'column', lineHeight: '10px' }} */}

                            <div className='col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12' >
                                { element1}


                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12' >
                                { element2}


                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 col-sm-12 col-12' >
                                { element3}


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
        FearuteProduct: state.FearuteProduct
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        addItem: (Array)=>{
            dispatch(action.addItemDeals(Array))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Feature);
//    {/* item1 */}
//    <div className='col-lg-auto col-md-auto col-sm-auto col-11 p-2 ' id='screen576' >
//    {/* item 1.1 */}
//    <div id='divHover'>
//        <div id='bgImg'>

//            <div className='listIcon'>
//                <span className='spanIcon' ><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></span>
//                <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' style={{ fontSize: '15px' }}></i></span>
//                <span className='spanIcon' ><i className='far fa-heart' style={{ fontSize: '15px' }}></i></span>
//                <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></span>
//            </div>
//        </div>
//        <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
//             <h5><a href='/'> {array.text1}</a></h5>
//            <p><a href='/'>{array.text2}</a></p>
//            <h6 ><span style={{ color: '#40a944' }}>{array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h6>
//        </div>
//    </div>
//    {/* item 1.2 */}
//    <div id='divHover'>
//        <div id='bgImg'>

//            <div className='listIcon'>
//                <span className='spanIcon' ><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></span>
//                <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' style={{ fontSize: '15px' }}></i></span>
//                <span className='spanIcon' ><i className='far fa-heart' style={{ fontSize: '15px' }}></i></span>
//                <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></span>
//            </div>
//        </div>
//        <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
//            <h5><a href='/'> Aliquam Consequat</a></h5>
//            <p><a href='/'>Fruits</a></p>
//            <h6 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h6>
//        </div>
//    </div>
// </div>