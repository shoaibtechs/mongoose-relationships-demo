const mongoose = require("mongoose");

const MONGOURL = 'mongodb://127.0.0.1:27017/relationDemo';



async function main(){

  await  mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
        

}

main()
    .then(()=>{
        console.log("Database Connected Sucessfully");

    })
    .catch((err)=>{

        console.log("Error Occured", err);
    })


// User Schema 


    const userSchema =  new mongoose.Schema({

         username:  String,
         addresses : [

            {
                location : String, 
                city: String,

            }

         ],


    })


    // User Model


    const User = mongoose.model("User", userSchema);
