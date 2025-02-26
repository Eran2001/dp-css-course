import "./style.css";

const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); 

const jsObj = JSON.parse(jsonString)
console.log(jsObj);

