let mym = require("./NodeModuleMymodule3");

// let num = mym.num;
let num = [1,2,3,4,5,6,7,8,9];
console.log("Prime number: ",mym.isPrime(num));

let str = ["Ajay","Soham","Pushpak"];
console.log("Longest String: ",mym.getLongest(str));
console.log("Date : ",mym.getDate());