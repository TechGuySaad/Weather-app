const express = require("express");
const https = require("https");



const app = express();



app.get("/",function (req,res){

    

    const url = "some api url";

    https.get(url, function (response)  {

            console.log(response);

        });

    res.send("Server is running");

});




app.listen(3000, function (){

    console.log("Server is running on port 3000");

});
