

express=require('express') ;
var app=express() ; 
app.set('view engine','ejs'); 
app.listen(2000 , 'localhost' ,(err) => {
    if(err) throw err;
});

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

