const express = require("express");
const sequelize = require("./database/db");
const app = express();

//for body-parsing
app.use(express.json());
app.use(express.urlencoded(true));


//routes
const exampleRoutes=require('./routes/example.routes')
app.use(exampleRoutes)

sequelize.authenticate().then(() => {
  console.log("Connection Done with DB");
}).catch(()=>{
    console.log("Connection Failed With DB");
})

// {force:true} to erase the tables
sequelize.sync().then(() => {
  console.log("Table Created");
}).catch(()=>{
    console.log(" Failed While Creating the Tables");
})



app.listen(8000, () => {
  console.log("Server is Started");
});
