//********JavaScript is a Single Threaded Synchronous language******
//Asynchronous Operations: these are the non-blocking processes, which can run multiple tasks at a same time.
setTimeout(() => {
    console.log("1","hi")
}, 5000);  //delays the code execution for 5 Sec

setTimeout(() => {
    console.log("2","hello")
}, 2000);   // delays the code execution for 2 Sec

console.log("3","welcome")