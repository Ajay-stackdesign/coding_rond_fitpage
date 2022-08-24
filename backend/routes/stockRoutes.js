const express = require("express")
const { createStock, getAllStock, getAllStockRsi } = require("../controller/stockController")

const router = express.Router()


// router.route("/create").post(createStock)
router.route("/getall").get(getAllStock)
router.route("/stock").get(getAllStockRsi)


module.exports = router