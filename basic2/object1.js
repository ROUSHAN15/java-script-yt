//sibgleton
// Object.create

//object literals

const MYsymbol=Symbol("key1");

const JsUser={
    name:"roushan",
    age: 15,
    [MYsymbol]:"key1",
    "full name":"roushan kumar verma",
    location: "koderma",
    email: "rkv@gmail.com",
    isLOGin: false,
    lastLoginDays: ["monday","saturday"]

}

// console.log(JsUser.email);  //bad practice 
// console.log(JsUser["email"]); //good practice 
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.MYsymbol);
// console.log(JsUser[MYsymbol]);

// JsUser.email="ss@gmail.com"
// console.log(JsUser["email"]);
// // Object.freeze(JsUser)
// JsUser.email="rvk@gmail.com"
// console.log(JsUser["email"]);

JsUser.greeting=function(){
    console.log("heloo js user");
}
JsUser.greetingTwo=function(){
    console.log(`heloo js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

