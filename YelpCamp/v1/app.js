var express = require("express");
var app = express(); 
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

 var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c379a4eab6ba_340.jpg"},    
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8486/8240036928_1a31fbbe9e.jpg"},
        {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c379a4eab6ba_340.jpg"},    
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8486/8240036928_1a31fbbe9e.jpg"},
        {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c379a4eab6ba_340.jpg"},    
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8486/8240036928_1a31fbbe9e.jpg"},
        {name: "Salmon Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104490f3c379a4eab6ba_340.jpg"},    
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},    
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8486/8240036928_1a31fbbe9e.jpg"}  
    ]; 
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
   
    
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    res.send("You Hit The Post Route!"); 
    //get data from form and add to campgrounds array
    var name = req.body.name; 
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");  
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started!!"); 
});