const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())
const uri = "mongodb+srv://nilu912:@nilu91002@democluster.6mbcw.mongodb.net/?retryWrites=true&w=majority&appName=demoCluster";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run(){
    try{
        await mongoose.connect(uri, clientOptions)
        await mongoose.connection.db.admin().command({ping: 1})
        console.log("Pinned your deployment. You successfully connected to MongoDb.")
    }finally{
        await mongoose.disconnect()
    }
}
run().catch(console.dir)

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