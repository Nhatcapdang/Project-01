import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import * as action from '../../Actions/index'
import Tooltip from '../Tooltip/Tooltip'
import { toastWarn} from '../../common/toastify'

 class MostView extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         array:[
    //             {
    //                 text1: 'Răng Súng',
    //                 text2: '11/04/1999',
    //                 text3: '$0',
    //                 text4: '$999999999',
    //             }
    //         ]
    //     }
    // }
    addItem=(Array)=>{
    
        this.props.addItem(Array);
        toastWarn();
    }   
    render() {
        var { itemMostView }=this.props;
        var element=itemMostView.map((Array,index)=>{
            return  <div className='col-lg-auto col-md-auto col-sm-5 col-12 p-2 ' id='screen576' key={index}>
                        {/* item 1.1 */}
                        <div id='divHover'>
                            <div id={Array.bgImg}>
                                <div><span style={{ float: 'right', margin: '10px', padding: '5px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>SALE</span></div>
                                <div className='listIcon '>
                                    <div className=' d-flex' style={{padding:'0px 20px'}}>
                                    <span className='spanIcon' onClick={()=>this.addItem(Array)}><Tooltip content="Add to cart" trigger='click'><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                    <span className='spanIcon'  style={{ margin: '0px 5px' }}><Tooltip content="Search" trigger='click'><i className='fas fa-search' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                    <span className='spanIcon' ><Tooltip content="Favourite" trigger='click'><i className='far fa-heart' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                    <span className='spanIcon'   style={{ marginLeft: '5px' }}><Tooltip content="Compare" trigger='click'><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></Tooltip></span>
                                    </div>
                                </div>
                            </div>
                            <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                                <h5>{Array.text1}</h5>
                                <p>{Array.text2}</p>
                                <h6 ><span style={{ color: '#40a944' }}>{Array.text3}</span> <span style={{ textDecoration: 'line-through',color:'red' }}>{Array.text4}</span></h6>
                            </div>
                        </div>
                    </div>
        })
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                    </div>
                    <div className='col-12 text-center mb-3'>
                        <h2><b>Mostview Products</b></h2>
                    </div>
                    <div className='col-12 mostView'>
                        <div className='row text-center m-0' style={{ overflowY: 'auto', height: '355px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                           { element }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= state=>{
    return {
        itemMostView:state.itemMostView
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addItem: (Array)=>{
            dispatch(action.addItemDeals(Array))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MostView);