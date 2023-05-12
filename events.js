const EventEmitter = require('events');

const event = new EventEmitter();

/*
//here kind of event registering taking place 
//so first register then call
//with the help of single event we can do multiple actions

event.on("sayMyName",()=>{
    console.log("My name is Ram Mohan");
});

event.on("sayMyName",()=>{
    console.log("My name is Shyam");
});

event.on("sayMyName",()=>{
    console.log("My name is Ramesh");
});

event.emit("sayMyName");
*/

//Registering for the event with callback parameter
event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and message is ${msg}`);
});

event.emit("checkPage",200,"Ok");