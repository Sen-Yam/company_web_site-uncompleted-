
 let express=require('express');
 let app=express();
 let mongoose=require('mongoose');
 let Email=require('./mongo.js');
 const db_url = 'mongodb+srv://SenYam:Tassili1938@senyam.mosbo.mongodb.net/Email_db?retryWrites=true&w=majority';
 mongoose.connect(db_url ,  {useNewUrlParser : true , useUnifiedTopology : true})
 .then((result)=> {
     app.listen(3000);
 });
 app.set('view engine' , 'ejs');
 app.use(express.urlencoded({extended : true}));
 app.post('/f' ,(req , res)=> {
     console.log("welcome in /")
     let NewEmail= new Email(req.body);
     console.log(req.body);
     NewEmail.save()
     .then((result)=> {
         redirect('/Form');
     })
 } );
 app.get('/f' , (req , res) => {
     Email.find()
     .then((result) => {
         res.render('Fejs')
     })
 })
 
 
 
 
 
 
 
 
 
 
 
 
 /* var express=require('express');
var app=express();
var mongoose=require('mongoose');
var data1 = require('./mongo.js');
app.set('view engine' , 'ejs');
const db_url = 'mongodb+srv://SenYam:Tassili1938@senyam.mosbo.mongodb.net/test_db?retryWrites=true&w=majority';
mongoose.connect(db_url , {useNewUrlParser : true , useUnifiedTopology : true})
.then((result) => {
    app.listen(2000);
});
app.use(express.urlencoded({extended : true}));
app.get('/form' , (req , res) => {
    console.log("form")
    res.render('form');
});
app.get('/' , (req , res) => {
    
    data1.find()
    .then ((result) =>{
        res.render('codeejs' ,{data1 : result} );
    })

})
app.post('/' , (req , res) => {
    console.log("db");
    var data = new data1(req.body);
    console.log(req.body);
    data.save()
    .then((result) => {
       res.redirect('/');
    })
});



 */


 


 /* const express=require('express') ;
const app=express() ;
const mongoose=require('mongoose') ;
var newData=require('./mongo.js');
var url_db = 'mongodb+srv://SenYam:Tassili1938@senyam.mosbo.mongodb.net/new_db?retryWrites=true&w=majority';
mongoose.connect(url_db  , {useNewUrlParser : true , useUnifiedTopology : true} )
    .then((result) => {
        app.listen(2000);
        
    });


app.set('view engine','ejs'); 
app.use(express.urlencoded({extended : true}));
 app.get('/'  , (req , res) => {
     newData.find()
     .then((result) => {
        res.render('codeejs' , {Dataejs : result});
     })
    
    
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


app.post('/' ,(req , res) => {
    console.log(req.body);
    var data = new newData(req.body);
    data.save()
    .then((result) => {
        res.redirect('/blogs');

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


 




/* var express=require('express') ;
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
}); 
app.use(express.urlencoded({extended : true}));
 app.get('/'  , (req , res) => {
     newData.find()
     .then((result) => {
        res.render('codeejs' , {Dataejs : result});
     })
    
    
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


app.post('/' ,(req , res) => {
    console.log(req.body);
    var data = new newData(req.body);
    data.save()
    .then((result) => {
        res.redirect('/blogs');

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


 
 */