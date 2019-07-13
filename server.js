// require dependencies
const express = require("express")
const app = express();
const path = require("path")
// require Port
const PORT = process.env.PORT || 3000

// Feed server
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// create routes
app.get("/",function(req, res){
    console.log(req);
    res.sendFile(path.join(__dirname, "public/views/index.html"));
})
app.get("/value", function (req,res){
    res.sendFile(path.join(__dirname, "public/views/value.html"))
})
app.get("/api/:id/:name?", function (req, res) {
    console.log(req.params.id);
    console.log(req.params.name);
    res.send("hello");
})

app.get("/api/search/?", function (req, res) {
    
    console.log(req.query);
    res.send("hello");
})
app.post("/value",function(req,res){
    console.log(req.body);
    res.send("working");
})
app.put("/update", function(req,res){
    console.log(req.method);
    res.send("update");
})
app.delete("/delete",function(req,res){
    console.log(req.method);
    res.send("deletion!")
})

// listen to server with assigned port
app.listen(PORT, function(){
    console.log("app listening on " + PORT);
})