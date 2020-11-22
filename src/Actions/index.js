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