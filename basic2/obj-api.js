const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLOGin=false


// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{ userFULLname:{
        firstname:"roushan",
        lastname:"kumar",
    }
}
}
// console.log(regularUser.fullname.userFULLname.lastname);
const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}
// const obj3={obj1,obj2}  // bad practice becausee it can do chnage in object 1
// const obj3=Object.assign({},obj1,obj2)  // good practice 
// const obj3={...obj1,...obj2}
// console.log(obj3);

const users =  [
    
    {
        id: 1,
        email: "roushan@mail.com"
    },
    {
        id: 1,
        email: "roushan@mail.com"
    },
    {
        id: 1,
        email: "roushan@mail.com"
    }
]


// console.log(users[0].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLOGin'))
// console.log(tinderUser.hasOwnProperty('isLOGi'))

const course={
    cousename: "js in hindi",
    price: "999",
    couseInstructor: "roushan"
}
// couse.couseInstructor
const {couseInstructor: instructor}=course

// console.log(couseInstructor)
console.log(instructor);

// const navbar = () =>{

// // }
// {
//     "name": "roushan",
//     "cousename": "js in hindi",
//     "price": "free",

// }

// [


// ]




