const fs = require("fs");
const http = require("http");

http.createServer((req,res)=>{
    // fs.readFile('./ram.txt','utf-8',(err,data)=>{
    //     res.end(data);
    // });

    //Best way for streaming

    const rstream = fs.createReadStream("./ram.txt");
    rstream.pipe(res);

}).listen(8000);