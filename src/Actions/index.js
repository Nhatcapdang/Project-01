import * as types from '../Contants/ActionsTypes'


export const addItemDeals = (Array) => {
    return {
        type: types.ITEM_DEALS,
        Array
    }
}
export const onDelete = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
}

//CartTMDT
export const addProductToCart = (payload) => {
    return {
        type: "ADD_PRPDUCT_TO_CART",
        payload
    }
}
export const deleteProductToCart = (payload) => {
    return {
        type: "DELETE_PRPDUCT_TO_CART",
        payload
    }
}
export const maQuaTang = (payload) => {
    return {
        type: "MA_QUA_TANG",
        payload
    }
}
export const setCartDefault = () => {
    return {
        type: "SET_CART_DEFAULT"
    }
}
//sohw hidden Detail order
export const isShowHidden = (payload) => {
    return {
        type: "SHOW_ORDER_DETAIL",
        payload
    }
}
export const isHidden = () => {
    return {
        type: "HIDDEN_ORDER_DETAIL",
    }
}