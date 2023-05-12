// Using asynchronous ways for CRUD
/*
const fs=require('fs');

fs.writeFile('ram.txt','Using Asynchronous ways',(err)=>{console.log('file created')});
fs.appendFile('ram.txt','to append the data',(err)=>{console.log('data added')});

//fs.readFile('ram.txt','utf-8',(err,data)=>{console.log(data)});
*/


//Synchronous vs Asynchronous

const fs = require('fs');
/*
var data=fs.readFileSync('ram.txt','utf-8');
console.log(data);

console.log("after the data");
*/

fs.readFile('ram.txt','utf-8',(err,data)=>{console.log(data)});

console.log("after the data");
