const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/router")

app.use(bodyparser.urlencoded({
    extended:false
}))

app.use(bodyparser.json())

app.use("/",router);

app.listen(3001,function(){
console.log("port running on 3001")



})

module.exports=app;