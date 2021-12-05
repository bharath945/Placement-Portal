const express = require('express')
const app=express()
require('.enf').config()
app.listen(process.env.PORT,()=>{
    console.log("app is listening at http://localhost:"+process.env.PORT)
})