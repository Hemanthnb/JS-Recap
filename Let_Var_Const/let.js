console.log(obj); // ReferenceError: Cannot access 'obj' before initialization
let obj = {
  name: "Hemanth",
  age: 23,
};


//We know let is block scope : means u can access a variabke or obj only when ii is inside block {}

//create a variable with let inside if block of function and try to access outside if block
const exampleFunction=()=> {
  if (true) {
      let functionScopedVar = 'I am function scoped';
  }
  console.log(functionScopedVar); // ReferenceError: Cannot access 'obj' before initialization
}
exampleFunction();
// console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
