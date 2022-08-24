// const Stock = require("../model/stockModel")
const Stock = require("../data/topganer.json")
const StockList = require("../data/rsiRevesal.json")

/*exports.createStock = async (req, res, next) => {
    try {
        const stock = await Stock.create(req.body)

        res.status(201).json({
            success: true,
            stock
       })
    } catch (error) {
        res.status(500).json(error)
    }
} */

exports.getAllStock = async (req, res, next) => {
    try {
        // const stock = await Stock.find()

        // const stock = await Stock.find()

        res.status(200).json({
            success: true,
            Stock
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllStockRsi = async (req, res, next) => {
    try {
        // const stock = await Stock.find()

        // const stock = await Stock.find()

        res.status(200).json({
            success: true,
            StockList
        })
    } catch (error) {
        res.status(500).json(error)
    }
}