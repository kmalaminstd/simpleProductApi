const express = require("express")
const connetDB = require("./config/db")
const productRouter = require("./routes/product.route")
const dotenv = require("dotenv")
const app = express()

dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

//middleware to loge routes
app.use((req, res, next)=>{
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next()
})

// setting primary router
app.get("/", (req, res)=>{
    res.send("I am from node.js server")
})

// initialize database
connetDB()

// router
app.use("/api/product", productRouter)

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send("Something broke")
})

app.listen(process.env.PORT, ()=>{
    console.log(' ');
})

module.exports = app