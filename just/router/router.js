const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/products",(req,resp)=>{
    connection.query("select * from products",(err,data)=>{
        if(err){
            resp.status(500).send("error ocuured",json.stringyfy)
        }else{
            resp.send(data)
        }
    })
})

router.get("/products/:pid",(req,resp)=>{
    connection.query("select * from products where pid=?",[req.params.pid],(err,data)=>{
    if(err){
        resp.status(500).send("error occured "+json.stringyfy(err))

    }else{
        resp.send(data[0])
    }
        
    })
})

router.delete("/products/delete/:pid",(req,resp)=>{
    connection.query("delete from products where pid=?",[req.params.pid],(err,data)=>{
    if(err){
        resp.status(500).send("error occured "+json.stringyfy(err))

    }else{
        resp.send("product deleted sucessfully")
    }
        
    })
})

router.post("/products/add",(req,resp)=>{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    connection.query("insert into products values(?,?,?)",[pid,pname,price],(err,data)=>{
    if(err){
        resp.status(500).send("error occured "+json.stringyfy(err))

    }else{
        resp.send("data inserted sucessfully")
    }
        
    })
})

router.put("/products/update/:pid",(req,resp)=>{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    connection.query("update  products set  pname=?,price=? where pid=?",[pname,price,pid],(err,data)=>{
    if(err){
        resp.status(500).send("error occured "+json.stringyfy(err))

    }else{
        resp.send("data updated sucessfully")
    }
        
    })
})

module.exports=router;