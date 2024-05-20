const mongoose = require("mongoose")
const Product = require("../models/product.model")


const createProduct = async (req, res)=>{
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json({message: "product updated successfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


const getProducts = async (req, res)=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getProduct = async (req, res)=>{

    try{
        const {id} = req.params
        const myProduct = await Product.findById(id)
        if(!myProduct){
            return res.status(500).json({message: "product not found"})
        }
        res.status(200).json(myProduct)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateProduct = async (req, res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true})
        if(!product){
            return res.status(404).json({message: "product not found"})
        }
        res.status(200).json({message: product})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteProduct = async (req, res)=>{
    try{
        const {id} = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(deletedProduct)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}