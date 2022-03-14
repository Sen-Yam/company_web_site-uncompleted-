var mongoose=require('mongoose');
var Schema = new mongoose.Schema(
    {
        Name : {
            type : String , 
            required : true
        } ,
        Surname : {
            type : String ,
            required : true
        } , 
        Age : {
            type : Number , 
            reuired : true
        }
    } , { timestamps : true}

);

var newData = mongoose.model( 'newData' , Schema );
module.exports = newData;