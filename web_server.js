 var http = require('http');

  http.createServer((req,res)=>{
   // res.writeHead(200, {'Content-Type': 'text/html'});
    //  res.write("Hello World!!!!");
    //return the part of the url
   // res.write(req.url);

   if(req.url=="/"){
    res.end("Welcome to Home Page");
   }else if (req.url=="/about"){
    res.end("Welcome to About Page");
   }else {
    res.writeHead(404,{"Content-type":"text/html"}); //This part is useful when client enters random url 
    res.end("<h1>Error 404 , Page not found</h1>");
   }
   
    
 }).listen(8081,()=>{console.log("listening to the server")});

// server.listen(8080, "192.168.1.3",()=>{
//     console.log("listening to the port no 8080");
// });


/* var http = require('http');

 //create a server object:
 http.createServer(function (req, res) {
   res.write('Hello World!'); //write a response to the client
   res.end(); //end the response
 }).listen(8080); //the server object listens on port 8080
*/
              