 var fs=require('fs');

 var http = require('http');
 var server = http.createServer((req, res) =>  {
    res.setHeader('content-type' , 'text/html');
    var link='';
    switch(req.url) {
        case '/' : link='./index' ; break;
        case '/filehtml' : link='./filehtml'; break;
    }
    fs.readFile(link , (err , data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        else {
           /*  res.write(data); */
            res.end();
        }
      
    });



 });
 server.listen(2000 , 'localhost' , () =>  {
    console.log('listen to request');
 }); 

 fs.mkdir('./app.js' , (err) =>{
     if(err) throw err;
 })