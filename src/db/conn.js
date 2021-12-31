const mongoose = require("mongoose");
//creat DB
mongoose.connect("mongodb://localhost:27017/weblab",
{
   //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{

    console.log("connection successful");
}).catch((error) => {
    console.log(error);

})