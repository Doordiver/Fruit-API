const fruits = require("../fruits.json")

class Fruit {

    constructor(fruit) {
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }

    static showAll() {
        //create a loop
        //for each fruit in json file
        //create a fruit object
        //create of collections of fruit objects
        //return the collection
        return fruits.map(f => new Fruit(f))
    }

    static showName(name) {
        //create a loop
        //for each fruit in json file
        //check if fruit name = input name
        //add that fruits to object
        //return the object
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
        // return fruits.map(f => {
        //     if (Fruit(f).name == name) {
        //         return new Fruit(f)
        //     }
        // })
        if (fruit) {
            return new Fruit(fruit)
        }

        else {
            throw "The fruit doesn't exist"
        }
    }

    static create(data) {

        const newFruit = data
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase())

        console.log(newFruit);

        if (fruit) {
            throw "The fruit already exists"
        } 
        
        else {
            newFruit["id"] = fruits.length + 1
            fruits.push(newFruit)

            return new Fruit(newFruit)
        }

    }

    update(data) {
        const updatedFruit = fruits.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase())

        if (updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } 

        else {
            throw "Fruit not found"
        }
    }

    delete() {
        const deletedFruit = fruits.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase())

        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
        }

        else {
            throw "Fruit not found"
        }
    }

}

module.exports = Fruit
