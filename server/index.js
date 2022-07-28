const app= require('express')()
const dotenv=require('dotenv')
const mongoose =require('mongoose')

dotenv.config();
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected")
    }
    catch(error){
        throw error;
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("connected")
})
app.get('/',(req,res)=>{
      res.send("hello")
})
app.listen(3000,()=>{
    connect();
    console.log("Helo")
})
//PaDFTq9zyuSqzvWQ