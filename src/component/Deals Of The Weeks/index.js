import React from 'react'
import './Style.scss'
import { connect } from 'react-redux'
import * as action from '../../Actions/index'
import Tooltip from  '../Tooltip/Tooltip'
import { toastSuccess} from '../../common/toastify'
class Deals extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         item:[],
    //         array: [
    //             {
    //                 id: 1,
    //                 text1: 'Mauris Vel Tellus',
    //                 text2: 'Fruits',
    //                 text3: '$48.00',
    //                 text4: '$345.00',
    //                 bgImg: 'bgImg'
    //             },
    //             {
    //                 id: 2,
    //                 text1: 'Nunc Neque Eros',
    //                 text2: 'Fruits',
    //                 text3: '$45.00',
    //                 text4: '$245.00',
    //                 bgImg: 'bgImg2'
    //             },
    //             {
    //                 id: 3,
    //                 text1: 'Proin Lectus Ipsum',
    //                 text2: 'Fruits',
    //                 text3: '$35.00',
    //                 text4: '$145.00',
    //                 bgImg: 'bgImg3'
    //             },
    //             {
    //                 id: 4,
    //                 text1: 'Quisque In Arcu',
    //                 text2: 'Fruits',
    //                 text3: '$25.00',
    //                 text4: '$235.00',
    //                 bgImg: 'bgImg4'
    //             },
    //             {
    //                 id: 5,
    //                 text1: 'Cas Meque Metus',
    //                 text2: 'Fruits',
    //                 text3: '$30.00',
    //                 text4: '$255.00',
    //                 bgImg: 'bgImg5'
    //             }
    //         ]
    //     }
    // }
    addItem=(Array)=>{
        toastSuccess();
     this.props.addItem(Array);
    }

        // findIndex = (item) => {
        //     var { array } = this.state;
        //     var result = -1;
        //     array.forEach((item, index) => {
        //       if (item.id === item) {
        //         result = index
        //       }
        //     })
        //     return result
        //   }
    //     <Tooltip
    //     content="This is <b>content</b> <i>of</i> <u>tooltip></u>"
    //     trigger='click'
    //   >
    //     <span className='spanIcon' onClick={()=>this.addItem(Array)}><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></span>
    //   </Tooltip>
    render() {
        var {itemDeals}=this.props;
        var element = itemDeals.map((Array, index) => {
            return <div className='col-lg-auto col-md-auto col-sm-5 col-12 ' id='screen576' key={index}>
                {/* item 1.1 */}
                <div id='divHover'>
                    <div id={Array.bgImg}>
                        <div><span style={{ float: 'right', margin: '10px', padding: '5px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>SALE</span></div>
                        <div className='listIcon '>
                            <div className='d-flex' style={{padding:'0 20px'}}>
                            <span className='spanIcon' onClick={()=>this.addItem(Array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            <span className='spanIcon'  style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            <span className='spanIcon'   style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></Tooltip></span>
                            </div>
                            {/* <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' style={{ fontSize: '15px' }}></i></span>
                            <span className='spanIcon' ><i className='far fa-heart' style={{ fontSize: '15px' }}></i></span>
                            <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></span> */}
                        </div>
                    </div>
                    <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                        <h5>{Array.text1}</h5>
                        <p>{Array.text2}</p>
                        <h6 ><span style={{ color: '#40a944' }}>{Array.text3}</span> <span style={{ textDecoration: 'line-through', color: 'red' }}>{Array.text4}</span></h6>
                    </div>
                </div>
            </div>
        })
        return (
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                    </div>
                    <div className='col-12 text-center mb-3'>
                        <h2><b>Deals Of The Weeks</b></h2>
                    </div>
                    <div className='col-12 deals'>
                        <div className='row text-center m-0' style={{ overflowY: 'auto', height: '395px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                            {element}


                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='bgImg4'>
                            <div className='container' style={{ position: 'relative', top: '70px' }}>
                                <h1>BLACK FRIDAYS !</h1>
                                <h2 style={{ lineHeight: '35px', color: '#6c6c6c' }}>SALE 50% OFF</h2>
                                <p style={{ marginBottom: '35px', color: '#8f8f8f' }}>ALL VEGETABLE PRODUCTS</p>
                                <a href='/' >DISCOVER NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        itemDeals: state.itemDeals
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addItem: (Array)=>{
            dispatch(action.addItemDeals(Array))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Deals);
