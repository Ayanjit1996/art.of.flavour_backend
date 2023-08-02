const mongoose= require('mongoose');

// DB value are imported from dotenv.env File
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Connection established");
}).catch((err) => console.log("Connection unsuccessful"));