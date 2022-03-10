const { sendFile } = require('express/lib/response');

express=require('express') ;
var app=express() ; 
app.listen(2000 , 'localhost' , (err) => {
    if(err) throw err;
});

app.get('/'  , (req , res) => {
    res.sendFile('./index.html' , {root : __dirname});
    
});

app.get('/filehtml'  , (req , res) => {
    res.sendFile('./filehtml.html' , {root : __dirname});
});
console.log(__filename);
app.use((req , res) => {
    res.sendFile('./filehtml.html' , {root : __dirname}) ;
});

