const accountId = 144553
let accountEmail = "rkv@mail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// we dont use var these days
// accountId=2 not allowed
accountEmail = "rrr@mail.com"
accountPassword="2122122"
acountCity="banglore"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and function scope
*/
console.log([accountId, accountEmail , accountPassword , accountCity]);
console.table([accountId, accountEmail , accountPassword , accountCity]);
console.table([accountId, accountEmail , accountPassword , accountCity,accountState]);