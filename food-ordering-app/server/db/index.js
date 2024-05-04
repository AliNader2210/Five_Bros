const mongoose = require('mongoose')
mongoose
    .connect("mongodb+srv://loloafify:nnaa11@cluster0.lgea2ya.mongodb.net/fivebros", { useNewUrlParser: true })
    .catch(e => {
        console.error("Connection error: " + e.message)
    })
const db = mongoose.connection
module.exports = db