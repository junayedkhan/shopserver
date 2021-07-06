import mongoose from "mongoose"

const blog_schema = mongoose.Schema({
    name:{
        type: String
    },
    dec:{
        type: String
    }
}, {timestamps: true})

const blog_model = mongoose.model("blog_model", blog_schema)

export default blog_model