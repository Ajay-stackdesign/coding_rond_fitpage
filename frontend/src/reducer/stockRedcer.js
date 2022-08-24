
export const getAllStockReducer = (state = { stock: [] }, action) => {
    switch (action.type) {
        case "GetAllRequest":
            return {
                ...state,
                loading: true
            }
        case "GetAllSuccess":
            return {
                loading: false,
                Stock: action.payload.Stock
            }
        case "GetAllFailure":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const getAllStockReducerRsi = (state = { StockList: [] }, action) => {
    switch (action.type) {
        case "GetAllRequestRsi":
            return {
                ...state,
                loading: true
            }
        case "GetAllSuccessRsi":
            return {
                loading: false,
                StockList: action.payload.StockList
            }
        case "GetAllFailureRsi":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}