const express=require('express')
const app=express()

//for body-parsing
app.use(express.json())
app.use(express.urlencoded(true))

app.listen(8000,()=>{
    console.log("Server is Started");
})