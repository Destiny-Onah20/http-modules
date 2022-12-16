// console.log(global);

setTimeout(()=>{
    console.log("whats the timeout")
}, 4000);

//setinterval method
const timer = setInterval(()=>{
    console.log("show me every seconds")
},1000);

clearInterval( timer );