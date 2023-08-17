const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://pinky:12345@pink.0dt72sg.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed'+e.message );
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection