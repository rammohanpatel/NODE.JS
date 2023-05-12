const http = require('http');
const fs = require("fs");

http.createServer((req,res)=>{
    //fetching data from json
   const data = fs.readFileSync(`./api.json`,'utf-8');
   console.log(data);
   const obj_data = JSON.parse(data);

   if(req.url == '/'){
    res.end("Welcome to Home Page");
   }else if(req.url=='/name'){
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(obj_data[0].name);
   }else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>Error 404, Page not found<h1>");
   }
}).listen(8000);


   