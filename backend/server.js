const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let Tasks=[]
app.get('/api/getTasks',(req,res)=>{
    res.json(Tasks)
})
app.post('/api/addTask', (req,res)=>{
    const {title, task} = req.body

    const newData = {title, task}
    Tasks.push(newData);
    console.log("Received Data: ", newData)
    res.json({message: "Data Received Successfully", Tasks})
})

const port = 5000

app.listen(port, ()=>{
    console.log(`Server is running on ${port} port`)
})