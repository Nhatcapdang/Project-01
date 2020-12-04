// import * as Types from '../Contants/ActionsTypes'

var initialState = {
    productCustomerChoose: [],
    coupon: 0
}
var CartTMDT = (state = initialState, action) => {
    let index = -1;
    let maGiam = 0;
    switch (action.type) {
        case "ADD_PRPDUCT_TO_CART":
            index = timIdTinhSL(state.productCustomerChoose, action.payload.id)
            if (index !== -1) {
                state.productCustomerChoose[index].soLuongKHClick += 1
            } else {
                state.productCustomerChoose.push({
                    payload: action.payload,
                    soLuongKHClick: 1
                })
            }
            return { ...state }
        case "DELETE_PRPDUCT_TO_CART":
            index = timIdTinhSL(state.productCustomerChoose, action.payload)
            state.productCustomerChoose.splice(index, 1)
            return { ...state }
        case "MA_QUA_TANG":
            maGiam = maQuaTang(action.payload)
            state.coupon = maGiam;
            return { ...state }
        case "SET_CART_DEFAULT":
            return {
                productCustomerChoose: [],
                coupon: 0
            }
        default: return { ...state };//switch case phai co truong hop mac dinh
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
const maQuaTang = (maKhachHangNhapVao) => {
    let z = 0;
    let arrayCoupon = [
        {
            maGiamGia: "VIP",
            giam: 40
        },
        {
            maGiamGia: "DANG",
            giam: 50
        }

    ];
    for (let i = 0; i < arrayCoupon.length; i++) {
        if (arrayCoupon[i].maGiamGia === maKhachHangNhapVao.toUpperCase()) {
            z = arrayCoupon[i].giam
            break
        } else {
            z = -1
        }
    }
    return z
}

export default CartTMDT;