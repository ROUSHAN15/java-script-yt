// for of 

// [" "," "," "]
// [{ },{ },{ }]

// const arr=[1,2,3,4,5]

// for (const value of arr) {
//     console.log(`value is ${value}`);
    
// }

// const gretting="heloo worlds"
// for (const greet of gretting) {
//     console.log(`the message is ${greet}`);
// }

// Map

const map=new Map()
map.set('IN',"india")
map.set('AUS',"austrila")
map.set('pak',"chutia")
map.set('ne',"nepal")

// console.log(map);
// map.set('pak',"pakistan")
// console.log(map);

for (const [key,value] of map) {
    console.log(key,'->',value);
    
}


const myOBJECT={
    game1:'NFS',
    game2: 'spiderman'
}

// for (const [key ,value ] of myOBJECT) {
//     console.log(key,'->',value);
// }

