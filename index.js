const connection = require("./model")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}))
app.get("/",(req,res)=>{
    res.send('<h1>hello world</h1>')
})
app.listen("3000",()=>{
    console.log("server started...")
})

