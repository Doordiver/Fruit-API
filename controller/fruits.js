const Fruit = require('../models/Fruit')

const index = async (req, res) => {

    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits) //convert this to json
    }

    catch (err) {
        res.status(500).send({ error: err })
    }

}

const find = async (req, res) => {

    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.showName(name) 
        res.status(200).send(fruit)
    }

    catch (err) {
        res.status(500).send({ error: err})
    }
}

module.exports = { index, find }