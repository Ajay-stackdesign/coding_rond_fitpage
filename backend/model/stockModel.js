const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
    topGainer: {
        type: String,
        required: true
    },
    intradayBuying: [
        {
            currentCandle: {
                type: String,
                required: true,
            },
            previousCandle: {
                type: String,
                required: true,
            },
            previousCandleTwo: {
                type: String,
                required: true
            },
        },
    ],
    openHigh: {
        type: String,
        required: true
    },
    cciReversal: {
        type: String,
        required: true,
    },
    rsiReversal: [
        {
            max: {
                type: String,
                required: true,
            },
            volume: {
                type: String,
                required: true,
            },
            rsiGreater: {
                type: String,
                required: true
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Stock", stockSchema)