const express = require("express")
const app = express()
const ejs = require("ejs")

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
  res.send("yeyya")
})

app.listen(3200, (req, res)=>{
  console.log("server on")
})
