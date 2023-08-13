import mongoose, { connection } from "mongoose";
export async function connectdb(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected' , () => {
            console.log("Mongo connected");
        })

        connection.on('error' , (err) => {
            console.log("Error" + err);
            process.exit();
        })
    }
    catch(error){
        console.log("Error connecting Mongo DB" , error);
    }
}