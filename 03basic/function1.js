
function SayMyName(){
    console.log("ro");
    console.log("us");
    console.log("sh");
    console.log("an");
           
}
// SayMyName()
// function ADD(number1,number2)
// {
//     console.log(number1+number2);
// }

// function ADD(number1,number2)
// {
//     // let res=(number1+number2);
//     // return res;
//     return number1+number2
// }

// const result=ADD(3,5)
// // console.log("result:" ,result);

// function LogInMessage(username = "no "){
//     if(!username)
//         return `plsease check the user name`
//         else
//     return `${username} just loged in`
// }

// const s=LogInMessage("roushan")
// console.log(s);
// console.log(LogInMessage("roushan"));

// console.log(LogInMessage());
// function calculateCartPrice(val1,val2,...num1){
//      return num1;
// }

// console.log(calculateCartPrice(5,400,500,100));

const user={
    username: "rkv",
    price: 999
}
function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and
         price is ${anyObject.price}`);
         
}
handleObject(user)
handleObject(
    {
        username:"rohit",
        price: 54656
    }
)
// console.log("yygy");

const myNewArray=[200,300,400,600]

function returnSecondValue(getArray)
{
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

