/*
const obj={
    name:"Ram Mohan Patel",
    Rollno :"21AG30029",
    age: "20",
    email:"mram41614@gmail.com",
}

//console.log(obj.Rollno);
const json=JSON.stringify(obj);// obj to Json
console.log(json);
//console.log(json.name); It doesn't work

const real_obj=JSON.parse(json); // Json to obj
console.log(real_obj);

*/
//Challenge Time
//convert to Json
// add into other file
// read file
// again convert back from json to obj
// print obj


const fs = require('fs');
const obj={
    name:"Ram Mohan Patel",
    Rollno :"21AG30029",
    age: "20",
    email:"mram41614@gmail.com",
}

const json=JSON.stringify(obj);

//creating a file and adding json to it
fs.writeFile('./json.json',json,(err)=>{console.log("file created");});

// reading the data from file
fs.readFile('./json.json',"utf-8",(err,data)=>{  
    console.log(data);
    const obj_data = JSON.parse(data);
    console.log(obj_data.Rollno);
});

//converting from json to object
//const obj_data = JSON.parse(json);
//console.log(obj_data);

