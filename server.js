// ! fix the 2- bug 
// * create node server for fix this bug with express.js 

const express = require("express");
const path = require('path');

const app = express();
// * app.use read the js and css file 
app.use(
  "/client",
  express.static(path.resolve(__dirname, "client"))
);

// * app get every file 

app.get("/*" , (req , res)=>{
    res.sendFile(path.resolve(__dirname , "client" , "index.html"));
});

// * port for run server
app.listen(process.env.PORT || 5000 , () => console.log('server is running ...'));