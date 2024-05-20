const express = require("express")
const database = require("./config/db")
const productRouter = require("./routes/product.route")
const app = express()

const port = "simple-product-api-git-main-kmalaminstds-projects.vercel.app"

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
    console.log('running server http://localhost:3000');
})