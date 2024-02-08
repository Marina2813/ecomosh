import mongoose from "mongoose";

export async function connect()
{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('connected successfully')
        })
        connection.on('error',(err)=>{
            console.log('something went wrong'+err)
        })
    } catch (error) {
        console.log(error);
    }
}