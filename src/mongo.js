const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/carrier')
.then(()=>{
    console.log("Connected to mongodb")
})
.catch(()=>{
    console.log("failed to connect")
})
 const Regschema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    }
 })
 const FormSchema=new mongoose.Schema({
    group:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    lpa:{
        type:String,
        require:true
    },
    domain:{
        type:String,
        require:true
    },
    requirement:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    process:{
        type:String,
        require:true
    },
    question:{
        type:String,
        require:true
    }
 })
 const collectionForm=mongoose.model("companies",FormSchema);
 const collection =mongoose.model("users",Regschema)
 module.exports={collection,collectionForm};
