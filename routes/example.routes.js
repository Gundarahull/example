const express=require('express')
const { getHomepage, postExampe } = require('../controllers/example.controller')
const router=express.Router()

router.get('/',getHomepage)
router.post('/post',postExampe)

module.exports=router