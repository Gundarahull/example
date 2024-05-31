const express=require('express')
const { getHomepage } = require('../controllers/example.controller')
const router=express.Router()

router.get('/',getHomepage)

module.exports=router