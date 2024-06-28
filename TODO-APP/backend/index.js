const express = require("express")
const { createtodo, updatetodo } = require("./types")
const { todo } = require("./db")
const app = express()
const cors = require("cors")



app.use(express.json())
app.use(cors())

app.post("/todo", async function (req,res) {
    const bodydata = req.body
    const parseddata = createtodo.safeParse(bodydata)
    if (!parseddata.success) {
        res.status(411).json({
            mssg: "You passed the wrong inputs"
        })
        return
    }
    await todo.create({
        title: bodydata.title,
        description: bodydata.description,
        completed: false
    })
    res.json({
        mssg: "todo created"
    })

})

app.get("/todos", async function (req,res) {
    const todos = await todo.find({})
    res.json({
        todos: todos 
    })
})

app.put("/completed", async function (req,res) {
    const bodydata = req.body
    const parseddata = updatetodo.safeParse(bodydata)
    if (!parseddata.success) {
        res.status(411).json({
            mssg: "You passed the wrong inputs"
        })
        return
    }
    await todo.updateOne({
        _id: req.body
    },{
        completed: true
    })
    res.json({
        mssg: "todo marked as completed"
    })
})

app.listen(3000)
