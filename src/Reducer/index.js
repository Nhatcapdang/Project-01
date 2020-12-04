import { combineReducers } from 'redux'
import itemDeals from './itemDeals';
import idItemDeals from './idItemDeals'
import itemMostView from './itemMostView'
import FearuteProduct from './FearuteProduct'
import TrendingProduct from './TrendingProduct'
import BestSellers from './BestSellers'
import CartTMDT from './CartTMDT'
import ShowHiddenOrderDetail from './ShowHiddenOrderDetail'


var myReducer = combineReducers({
    itemDeals: itemDeals,
    idItemDeals: idItemDeals,
    itemMostView: itemMostView,
    FearuteProduct,
    TrendingProduct,
    BestSellers,
    //phan nay cua TMDT
    CartTMDT,
    ShowHiddenOrderDetail

})
export default myReducer;