var express=require('express');
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var prod=require('./model/products');

var url="mongodb://localhost/prodb";
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

mongoose.connect(url,function(err){
    if (err) throw err

    else
    {
        console.log("DB CONNECTED");
        
    }
});


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/data",function(req,res){
    res.send({msg:"data from server"});
})

app.get("/getdata",function(req,res){
    prod.find({},function(err,result){
        if (err) throw err;
        else{
            res.send(result);
        }
    })
})

app.post("/postdata",function(req,res){
    console.log(req.body);
    var prod1=new prod(req.body);
    prod1.save(function(err){
        if (err) throw err;
        else{
            console.log("DATA ADDED");
        }
    })
})



app.listen(8090,function(req,res){
    console.log("server started listening");
})