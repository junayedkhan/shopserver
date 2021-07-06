import mongoose from "mongoose"

const product_details_schema = mongoose.Schema({
    name:{
        type: String
    },
    title:{
        type: String
    },
    category: {
        type: String
    }
}, {timestamps: true})

const product_details_model = mongoose.model("product_details_model", product_details_schema)

export default product_details_model