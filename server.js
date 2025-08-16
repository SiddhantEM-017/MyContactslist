const express=require("express")
const errorhanhler = require("./middleware/errorhandling")
const connectdb = require("./config/dbConnection")
const env=require("dotenv").config()
 const app=express()
 const port=process.env.port||5000
 connectdb()      
 app.use(express.json())

 app.use("/api/contacts", require("./routes/contactroutes"))
 app.use("/api/users", require("./routes/userroutes"))


 app.use(errorhanhler)
 


 app.listen(port,()=>{
console.log(`server started on port :${port}`)
});
 