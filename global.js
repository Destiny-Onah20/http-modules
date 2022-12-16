let colorArray

const interval = setInterval(()=>{
    colorArray = ["white", "black", "pink", "green", "grey", "red", "purple", "navyblue"]
    console.log(colorArray);
},2000);

//set a timeout for the color

setTimeout(()=>{
    // clearInterval( interval );
    console.log("the total amount of i color i wont is " + colorArray.length)
},10000);







let colorPalet
const colorMaker = setInterval(()=>{
    colorPalet = ["white", "black", "pink", "green", "grey", "red", "purple", "navyblue"]
    console.log(colorPalet);
},1000);

setTimeout(()=>{
    clearInterval( colorMaker)
    console.log("the total amount of i color i wont is " + colorPalet.length)
},5000);