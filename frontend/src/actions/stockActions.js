import axios from "axios"

export const getAllStock = () => async (dispatch) => {
    try {
        dispatch({ type: "GetAllRequest" })

        const { data } = await axios.get("/api/v1/getall")
        console.log(data)
        dispatch({
            type: "GetAllSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetAllFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllStockRsi = () => async (dispatch) => {
    try {
        dispatch({ type: "GetAllRequestRsi" })

        const { data } = await axios.get("/api/v1/stock")
        console.log(data)
        dispatch({
            type: "GetAllSuccessRsi",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetAllFailureRsi",
            payload: error.response.data.message
        })
    }
} 