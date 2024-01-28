import mongoose from "mongoose";


const connectDB = async () => {
    try {
        
        const { MONGO_DB_URI } = process.env
        const conn = await mongoose.connect(MONGO_DB_URI)
        console.log(`mongodb connection success: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}


export default connectDB