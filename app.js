const express = require("express")
const database = require("./config/db")
const productRouter = require("./routes/product.route")
const dotenv = require("dotenv")
const app = express()

const port = "https://simple-product-api.vercel.app/"

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// setting primary router
app.get("/", (req, res)=>{
    res.send("I am from node.js server")
})

// initialize database
database()

// router
app.use("/api/product", productRouter)



app.listen(port, ()=>{
    console.log(' ');
})