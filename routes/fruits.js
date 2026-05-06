const express = require("express")
const router = express.Router()
const fruits = require("../controller/fruits")

router.get('/', fruits.index)
router.get('/:name', fruits.find)
router.post('/', fruits.create)

module.exports = router