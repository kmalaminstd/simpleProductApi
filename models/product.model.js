const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("product", productSchema)

module.exports = Product