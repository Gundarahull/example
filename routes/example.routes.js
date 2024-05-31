const express=require('express')
const { getHomepage, postExampe, getExamples, deleteExample } = require('../controllers/example.controller')
const router=express.Router()

router.get('/',getHomepage)
router.post('/post',postExampe)
router.get('/get',getExamples)
router.delete('/delete/:id',deleteExample)

module.exports=router