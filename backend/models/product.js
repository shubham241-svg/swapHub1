import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    image: {
        type: String, // Changed to a direct string for easier access
        required: true
    },
    description: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId, // Reference to Seller (User)
        ref: "User",
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Electronics", "Books", "Furniture", "Accessories", "Other"], // Optional categories
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
