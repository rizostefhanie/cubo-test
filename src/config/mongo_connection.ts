import mongoose from "mongoose";


export const connectionDefault = async () => {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    let url =`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@` +
        `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    try {
        await mongoose.connect(url, options);
        console.log("Connection successfully")
    } catch (error) {
        console.log("Error connection" +error+ " URL=> "+url)
    }
};