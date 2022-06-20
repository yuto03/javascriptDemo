// /**
//  * const,letなどの変数宣言
//  */

// var val1 = "values表示";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数上書き";
// console.log(val1);
// // var変数は再宣言可能
// var val1 = "変数を再宣言";
// console.log(val1);

//let変数
let val2 = "a";
console.log(val2);
//let変数は上書き可能
val2 = "上書き";
console.log(val2);
//let変数は再宣言不可能
//SyntaxError: /src/index.js: Identifier 'val2' has already been declared
let val2 = "aa";
