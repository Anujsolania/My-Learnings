const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anujsolania:scam2022@cluster0.kvu08ja.mongodb.net/TodoApp")

const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoschema)

module.exports = {
    todo: todo
}