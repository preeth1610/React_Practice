let fileObj=require("fs");
//reading file synchronously
//let fileContent=fileObj.readFileSync('./data.txt');
//reading asynchronously
fileObj.readFile('./data.txt',(err,fileContent)=>{
    if(err){
        console.log(err);
    }else{
        console.log(fileContent.toString())
    }
})
//console.log(fileContent.toString());