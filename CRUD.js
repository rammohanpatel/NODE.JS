//console.log("Welcome to the world of Node js!!!");
//  REPL
// 1: js Expressions
// 2: use variables
// 3: Multiline code 
// 4: use (_) to get the last result 
// 5: we can use editor mode


// Challenge Time 

// 1: Create a folder of your name
// 2: Create a file in it named bio.txt and add data into it.
// 3: Add more data into file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
//file encoding
// 5: Rename the file name to mybio.txt
// 6: Now delete both the file and folder

// const fs=require("fs");
// //fs.mkdirSync("ram");



// fs.writeFileSync("./ram/bio.txt","Hi how are you?");

// fs.appendFileSync("./ram/bio.txt","This is New data");

// var read=fs.readFileSync("./ram/bio.txt","utf8");

// console.log(read);

// fs.renameSync("./ram/bio.txt","./ram/mybio.txt");



// const fs=require("fs");
// //fs.mkdirSync("ram");



// fs.writeFileSync("./ram/bio.txt","Hi how are you?"); // Creating a file 

// fs.appendFileSync("./ram/bio.txt","This is New data"); // Adding

// var read=fs.readFileSync("./ram/bio.txt","utf8"); // Read the data without getting the buffer data at first.

// //console.log(read);

// fs.renameSync("./ram/bio.txt","./ram/mybio.txt"); // To Rename

// fs.unlinkSync("./ram/mybio.txt"); // For removing a file
// fs.rmdirSync("ram");  // to remove a folder

const fs =require('fs');

//fs.mkdir('ram',(err)=>{console.log('folder created')});

//fs.writeFile('./ram/bio.txt','Today is very sunny day :)',(err)=>{console.log('file created')})

//fs.appendFile('./ram/bio.txt','  Appending extra data',(err)=>{console.log('appended')});

//fs.readFile('./ram/bio.txt','utf-8',(err,data)=>{console.log(data)});

//fs.rename('./ram/bio.txt','./ram/mybio.txt',(err)=>{console.log('file renamed')});

//fs.unlink('./ram/mybio.txt',(err)=>{console.log('file deleted')});

//fs.rmdir('./ram',(err)=>{console.log('folder deleted')});



