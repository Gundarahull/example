const { Sequelize } = require("sequelize");

const sequelize=new Sequelize('example','root','rabiya',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize