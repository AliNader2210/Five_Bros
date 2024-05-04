const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient
const _ = require('lodash')
async function main() {
    const url = 'mongodb+srv://loloafify:nnaa11@cluster0.lgea2ya.mongodb.net'
    const client = new MongoClient(url)
    try {
        await client.connect()
        const productsCollection = client.db('fivebros').collection("products")
        const categoriesCollection = client.db('fivebros').collection("categories")

        productsCollection.drop()
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map(category => { return { name: category } })
        await categoriesCollection.insertMany(categories)
        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        ]
        let products = []
        for (let i = 0; i < 10; i++) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls)
            }
            products.push(newProduct)
        }
        await productsCollection.insertMany(products)
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}
main()