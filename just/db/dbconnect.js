const mysql=require("mysql")


var mysqlconnection=mysql.createConnection({
"host":"127.0.0.1",
"user":"root",
"password":"admin@123",
"port":3306,
"database":"prash"

})



mysqlconnection.connect((err)=>{
if(err){
    console.log("error ocuured in database"+json.stringify)
}else{
    console.log("db connected succesfully")
}

})


module.exports=mysqlconnection;