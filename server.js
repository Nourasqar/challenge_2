const express = require("express")
const app = express()
const path = require('path')
var port = 3000
app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'/client/index.html'))
})
app.post('/',(req,res)=>{
    res.render('app.js')
})
app.listen(port,function(){
    console.log("im here xd")
})


