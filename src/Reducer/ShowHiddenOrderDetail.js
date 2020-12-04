
var initialState = {
    orderDetail: null,
    isShowHidden: false
}
var ShowHiddenOrderDetail = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_ORDER_DETAIL":
            let data = action.payload.orderDetail.data()
            let id = action.payload.orderDetail.id;
            state = {
                ...state,
                orderDetail: data,
                isShowHidden: true,
                id: id
            }
            return { ...state }
        case "HIDDEN_ORDER_DETAIL":
            state = {
                orderDetail: null,
                isShowHidden: false
            }
            return { ...state }
        default: return { ...state };//switch case phai co truong hop mac dinh
    }
}


export default ShowHiddenOrderDetail;