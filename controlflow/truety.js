const userMail=""

if(userMail)
{
console.log("YES GOT THE MAIL");

}
else{
    console.log("not any mail");
    
}

// FALSY VALUE
// false, 0,-0,bigInt 0n, "", null,NAN
// truthy value
//"0" 'false' " " , [] , {} , function (){}

if( userMail.length === 0)
{
    console.log(" ARRRAY IS EMPTY ");
}

const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log("emprty object"); 
}

// NULLISH  coalescing opretor (??): null undefined

let val1;
val1=5??10
val2=null??10
val3=undefined??20
val4=null??undefined??120
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

//termary opertaor
// conditon ? true: false
const iceTEA=1000
iceTEA<=80 ?console.log("less than 80"):console.log("more than 80");



