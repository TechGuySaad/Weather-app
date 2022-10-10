const express = require("express");
const https = require("https");



const app = express();



app.get("/",function (req,res){

    

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=333a47c28700024cb57760c88b0762f9";

    https.get(url, function (response)  {

            console.log(response);

        });

    res.send("Server is running");

});




app.listen(3000, function (){

    console.log("Server is running on port 3000");

});