// import * as Types from '../Contants/ActionsTypes'

var initialState = []
var CartTMDT = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case "ADD_PRPDUCT_TO_CART":
            index = timIdTinhSL(state, action.payload.id)
            if (index !== -1) {
                state[index].soLuongKHClick += 1
            } else {
                state.push({
                    payload: action.payload,
                    soLuongKHClick: 1
                })
            }
            return state
        case "DELETE_PRPDUCT_TO_CART":
            index = timIdTinhSL(state, action.payload)
            state.splice(index, 1)
            return state
        default: return state;//switch case phai co truong hop mac dinh
    }
}

const timIdTinhSL = (state, id) => {
    let index = -1
    if (state.length > 0) {
        for (let i = 0; i < state.length; i++) {
            if (state[i].payload.id === id) {
                return i
            }
        }
    }
    return index
}

export default CartTMDT;