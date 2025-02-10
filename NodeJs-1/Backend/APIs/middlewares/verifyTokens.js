const jwt=require("jsonwebtoken")
const verifyToken=(request,response,next)=>{
    const bearerToken=request.headers.authorization

    if(bearerToken===undefined){
        response.send({message:"Unauthorization aaccess...plz login first"})
    }
    else{
        const token=bearerToken.split(" ")[1]
        try{

            jwt.verify(token,"abcdef")
            next()
        }
        catch(err){
            next(err)
        }
    }
}   

module.exports=verifyToken;