//create express app
const exp=require("express")
const { request } = require("http")
const app=exp()

//assign port number 
app.listen(3500,()=>console.log("Web Server listening port number 3500..."))
//sample data of users 




//get mongo client
const mclinet= require('mongodb').MongoClient;




//connnec to DB server using MongoDB client
mclinet.connect('mongodb://127.0.0.1:27017')
.then((dbRef)=>{ //data base refernce

    //connect to a database
   const dbObj=dbRef.db('b1db')

   //connect to collecction of this database 
   const userCollectionObj=dbObj.collection('usersCollection')
   const productCollectionObj=dbObj.collection('productsCollection')
   
   //share collection to APIs
   app.set('userCollectionObj',userCollectionObj)
   app.set('productCollectionObj',productCollectionObj)




    console.log("DB connection succesful..");
})
.catch(err=>console.log("database connect error:",err))






//import user api
const userApp=require("./APIs/userApi");
const proApp=require("./APIs/productApi")
app.use('/user-api',userApp)
app.use('/product-api',proApp)
//Invalid path
const invalidPath=(request,response,next)=>{
    response.send({message:"Invalid Path"})
}
app.use("*",invalidPath)

//error handling middelwear
const errorHandlingMiddleWear=(error,request,response,next)=>{
    response.send({message: error.message})
}

app.use(errorHandlingMiddleWear)