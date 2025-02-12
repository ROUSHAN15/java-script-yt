// immediately invoke function expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    //named iffe
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})('roushan');
