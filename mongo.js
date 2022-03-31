mongoose=require('mongoose');
var Schema= new mongoose.Schema ({
    Email : {
        type : String , required : true
    }
} , { timestamps : true} );
var Email = mongoose.model('Email' , Schema);
module.exports = Email;




/* mongoose=require('mongoose');
let Schema= new mongoose.Schema ({
    Name : {
        type : String , 
        required : true
    } ,
    Surname : {
        type : String , 
        required : true
    } ,
    Age : {  type : Number , 
        required : true } 


} , { timestamps : true} );
data1=mongoose.model('data1' , Schema);
module.exports = data1; */










/* var mongoose=require('mongoose');
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
module.exports = newData; */

