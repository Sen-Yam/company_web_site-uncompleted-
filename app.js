var express=require('express') ;
var app=express() ;
var mongoose=require('mongoose') ;
var url_db = 'mongodb+srv://SenYam:Tassili1938@senyam.mosbo.mongodb.net/new_db?retryWrites=true&w=majority';
mongoose.connect(url_db  , {useNewUrlParser : true , useUnifiedTopology : true} )
    .then((result) => {
        app.listen(2000);
    });


app.set('view engine','ejs'); 
/* app.listen(2000 , 'localhost' ,(err) => {
    if(err) throw err;
}); */

app.get('/'  , (req , res) => {
    res.render('codeejs' , {array : [
        {name: "LARABA" , surname : "Yamina" , age: "19 years old"},
        {name: "LARABA2" , surname : "Yamina2" , age: "19 years old"},
        {name: "LARABA3" , surname : "Yamina3" , age: "19 years old"}
        
        
    ]});
    
});
app.get('/filehtml' ,(req , res) => {
    res.render('file');
})
app.use((req , res) => {
    res.sendFile('./filehtml.html' , {root : __dirname}) ;
});

