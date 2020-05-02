const mongoose = require("mongoose")
const Book = require("./book.model")
mongoose.connect("mongodb://localhost:27017/bookDataBase",{ useNewUrlParser: true,useUnifiedTopology: true },(error)=>{
    if(!error){
        console.log("mongoDB-Server connected.....")
        
    }else{
        console.log("something wrong")
    }
    
});

