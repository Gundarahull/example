const express=require('express')
const { getHomepage, postExampe, getExamples, deleteExample, editExample } = require('../controllers/example.controller')
const router=express.Router()

router.get('/',getHomepage)
router.post('/post',postExampe)
router.get('/get',getExamples)
router.delete('/delete/:id',deleteExample)
router.put('/edit/:id',editExample)

module.exports=router