const express=require('express')
const {collection,collectionForm}=require('./mongo')

const cors=require('cors')
const app=express();
const mongoose=require('mongoose')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
                    if(check.password===password && check.role==="ADMIN"){
                        res.json('existsAdmin')
                    }
                    else if(check.password===password && check.role==="USER"){
                        res.json('existsUser')
                    }
                    else{
                     res.json('Password incorrect')
                    }
                 }
        else{
            res.json('Account not found')
        }
    }catch(e){
        console.log(e)
    }
})
app.post('/signup',async(req,res)=>{
    const{email,password,role}=req.body
    const data={
        email:email,
        password:password,
        role:role
    }
    try{
         const check=await collection.findOne({email:email})
         if(check){
            res.json('exists')
         }
         else{
            const status =  await collection.insertMany([data])
            if(status){
            res.json("inserted");
            console.log("record inserted")
            }
            
         }
    }catch(e){
        console.log(e);
    }
})
app.post('/form',async(req,res)=>{
    const{ group,name,location,lpa,domain,requirement,department,about,process,question,link}=req.body
    const data={
        group:group,
        name:name,
        location:location,
        lpa:lpa,
        domain:domain,
        requirement:requirement,
        department:department,
        about:about,
        process:process,
        question:question,
        link:link
    }
    try{
  
        const insert=await collectionForm.insertMany([data])
         if(insert){
            res.json("inserted")
            console.log("Company record inserted")
        }
   
    }
    catch(e){
        console.log(e);
    }
})
app.get('/Content/:group', async (req, res) => {
    const { group } = req.params;
    try {
      const companies = await collectionForm.find({group:group});
      res.json(companies);
     // console.log(companies)
    } catch (err) {
      console.error('Error fetching companies:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.get('/Content/:group/:name', async(req,res)=>{
    const {group}=req.params;
    const {name}=req.params;
    try{
        const company=await collectionForm.find({_id:name});
        res.json(company)
    }catch(err){
        console.error('Error fetching companies:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
app.listen(8000,()=>{
    console.log("Server listening to the port 8000");
})