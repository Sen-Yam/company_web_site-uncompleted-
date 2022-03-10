

express=require('express') ;
var app=express() ; 
app.set('view engine','ejs'); 
app.listen(2000 , 'localhost' , (err) => {
    if(err) throw err;
});

app.get('/'  , (req , res) => {
    res.render('codeejs');
    
});

app.get('/filehtml'  , (req , res) => {
    res.sendFile('./filehtml.html' , {root : __dirname});
});
app.use((req , res) => {
    res.sendFile('./filehtml.html' , {root : __dirname}) ;
});

