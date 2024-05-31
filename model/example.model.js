const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Example=sequelize.define('examples',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"examples"})

module.exports=Example