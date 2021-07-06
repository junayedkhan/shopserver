import mongoose from "mongoose"
const url = "mongodb+srv://junayedkhan:khan_0258@cluster0.q6mc8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoDB_connection = async()=>{
    try {
        const connection = await mongoose.connect(url ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })

        console.log("mongoDB connected on " + connection.connections[0].host)

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
} 

export default mongoDB_connection;