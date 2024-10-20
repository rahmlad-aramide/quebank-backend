const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const sdk = require('node-appwrite');


const URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT;

const admin = require("./routes/admin.route");

mongoose.connect(URI).then(() => {URI
  console.log("Database connected successfully");
}).catch((err) => {
  console.log("Database Connection unsuccessful");
})

app.use(cors());
app.use(express.urlencoded({extended:true, limit:"50mb"}));
app.use(express.json({limit:"50mb"}));

app.use("/admin",admin);


app.listen(PORT, (err)=>{
  if(!err){
    console.log(`Server started successfully`);
  } else{
    console.log("Server unable started successfully");
  }
})