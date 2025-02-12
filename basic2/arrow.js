const user = {
    username: "rkv",
    price: 999,

    welcomeMeaage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// // this
// user.welcomeMeaage()
// user.username ="sam"
// user.welcomeMeaage()

// console.log(this);

// function chai() {
//     let username= "roushan"
//     console.log(this.username);
    
// }
// chai()

// const chai=function(){
//     let username= "roushan"
//     console.log(this.username);
    
// }
// chai()


// const chai= ()=> {
//     let username= "roushan"
//     console.log(this);
    
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2

// }
// const addTwo=(num1,num2)=>num1+num2
const addTwo=(num1,num2)=>({username:"roushan"})


console.log(addTwo(3,4))
