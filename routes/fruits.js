const express = require("express")
const router = express.Router()
const fruits = require("../controller/fruits")

router.get('/', fruits.index)
router.get('/:name', fruits.find)
router.post('/', fruits.create)
router.patch('/:name', fruits.update)
router.delete('./:name', fruits.deleteFruit)

module.exports = router