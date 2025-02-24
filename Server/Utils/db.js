const mongoose = require('mongoose');

module.exports.connectdb = async () => {
    try {
        const conn = await mongoose.connect( process.env.MONGO_URI,{
             dbname:"sneakerStore-db"
    });
        console.log("Connected to MongoDB successfully!", conn.connection.host);
    } catch (error) {
        console.log("Error connecting to Mongodb", error);
    }
}    
//  Introduction
