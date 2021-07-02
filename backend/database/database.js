const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const con = await mongoose.connect('mongodb+srv://admin:admin@123@cluster0.545ui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
            useCreateIndex:true 
        })
        if(con){
            console.log(`Database is connect at host:${con.connection.host}`);
        }
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectDB;