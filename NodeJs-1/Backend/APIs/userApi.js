 //create mini express app(A router)
const exp=require("express")
const userApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs")
const { ClientSession } = require("mongodb")
const jwt=require("jsonwebtoken")
const verifyToken=require("./middlewares/verifyTokens")
//body parser middleware
userApp.use(exp.json())

//Create midleware
const middlewear1=(request,response,next)=>{
    console.log("middleware-1 executed")
    //forward middle ware to next
    next()


}
userApp.use(middlewear1)//use for every request


// for paticular method syntax is app.METHOD(path,middlewear,(request,response)=>{})


//CREATE user APL


//get user
userApp.get("/get-users",middlewear1,expressAsyncHandler(async(request,response)=>{
   
   
    const userCollectionObj=request.app.get("userCollectionObj")
    
    //get users from DB
    let  usersList=await userCollectionObj.find().toArray()
    
        response.status(200).send({message:"List of users",payload:usersList})
   
 



}))

userApp.get("/test",verifyToken,(request,response)=>{
    response.status(200).send({message:"Reply from private route"})

})



//get user by id
userApp.get("/get-users/:name",expressAsyncHandler(async(request,response)=>{
    //response.send("One user")
    //get id from url
    const userCollectionObj=request.app.get("userCollectionObj")
    let userId=request.params.name//{id:100}
    let userObj=await userCollectionObj.findOne({name:userId})
    if(userObj===null){
        response.status(200).send({message:"User not found"})
   
    }else{
        delete userObj.password
        response.status(200).send({message:"User",payload:userObj})

   
    }
  
}))
//create user
userApp.post("/create-user",expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    
    const newUser=request.body;

    const userdb=await userCollectionObj.findOne({name:newUser.name})
    if(userdb!=null){
        
        response.status(200).send({message:"User already existed"})
    }else{

    let hashedPassword=await bcryptjs.hash(newUser.password,5)
    newUser.password=hashedPassword
    let dbRes=await userCollectionObj.insertOne(newUser);
    response.status(201).send({message:"user created"})
    }
}))



//user login
userApp.post("/user-login",expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")

    const userCre=request.body
    
    const userdb=await userCollectionObj.findOne({name:userCre.name})
    if(userdb===null){
        
        response.status(200).send({message:"invalid user name"})
    }else{
    let isEqual=await bcryptjs.compare(userCre.password,userdb.password)

    if(isEqual===false){
    response.status(200).send({message:"invalid password"})
}else{
    //create a jwt token (npm install jsonwebtoken)
    let jwtTOken=jwt.sign({name:userdb.name},'abcdef',{expiresIn:200})
    //send token in response
    response.status(200).send({message:"valid password",token:jwtTOken})
    }

    }

}))

//update user
userApp.put("/update-user",expressAsyncHandler(async(request,response)=>{
    
    const userCollectionObj=request.app.get("userCollectionObj")

    let modUse=request.body
    let dbRes=await userCollectionObj.updateOne({id:modUse.id},{$set:{...modUse}})
   
        response.status(201).send({message:"User updated"})
  
}))








//delete user
userApp.delete("/delete-user/:id",expressAsyncHandler(async(request,response)=>{


    const userCollectionObj=request.app.get("userCollectionObj")
    let userId=(+request.params.id)//{id:100}
    let dbRes=await userCollectionObj.deleteOne({id:userId})
   
        response.status(200).send({message:"User removed"})
   
   



}))

module.exports=userApp;