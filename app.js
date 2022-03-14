var express=require('express') ;
var app=express() ;
var mongoose=require('mongoose') ;
var newData=require('./mongo.js')
var url_db = 'mongodb+srv://SenYam:Tassili1938@senyam.mosbo.mongodb.net/new_db?retryWrites=true&w=majority';
mongoose.connect(url_db  , {useNewUrlParser : true , useUnifiedTopology : true} )
    .then((result) => {
        app.listen(2000);
        
    });


app.set('view engine','ejs'); 
/* app.listen(2000 , 'localhost' ,(err) => {
    if(err) throw err;
}); */
app.use(express.urlencoded({extended : true}));
 app.get('/blogs'  , (req , res) => {
     newData.find().sort({createdAt : -1})
     .then((result) => {
        res.render('codeejs' , {Dataejs : result});
     })
    
     /*
    res.render('codeejs' , {data : [
        {name: "LARABA" , surname : "Yamina" , age: "19 years old"},
        {name: "LARABA2" , surname : "Yamina2" , age: "19 years old"},
        {name: "LARABA3" , surname : "Yamina3" , age: "19 years old"}
        
        
    ]}); */
    
}); 
app.get('/db' , (req , res) => {
    var data= new newData({
        Name : "LARABA" ,
        Surname : "SARAH" , 
        Age : 22
    })
    data.save()
    .then((result) => {
        res.send(result);
    })
});

//database :
app.post('/blogs' ,(req , res) => {
    console.log(req.body);
    var data = new newData(req.body);
    data.save()
    .then((result) => {
        res.send(result);
    }) 
});
app.get('/form' , (req , res)=> {
    res.render('form');
});
app.get('/mongo' ,(req,res) => {
    
    newData.find()
    .then((result) => {
        res.render('codeejs' , {Dataejs : result});
    })
});
app.get('/filehtml' ,(req , res) => {
    res.render('file');
})
app.use((req , res) => {
    res.redirect('/mongo');
     res.sendFile('./filehtml.html' , {root : __dirname}) ; 
});

