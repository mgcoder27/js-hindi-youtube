const accountId = "coder27"
let accountEmail = "manugarg1602@gmail.com"
var accountPassword = "123456"

accountCity = "Bhopal"

console.table([accountId, accountEmail, accountPassword, accountCity])

// accountId = "mgcoder27"  this is not allowed because it is a const function
accountEmail = "mgcoder27@gmail.com"
accountPassword = "21212121"
accountCity = "Mumbai"

/*
Prefer not to use 'var' function because of use in block scope and functional scope
*/

console.log(accountId)

console.log([accountId, accountEmail, accountPassword, accountCity])