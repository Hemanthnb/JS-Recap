// Output will be undefined
console.log(obj);
var obj = {
  name: "Hemanth",
  age: 23,
};

//We know Var is function scope : means u can access a variable or obj any where inside the function.

//create a variable with var inside if block of function and try to access outside if block
function exampleFunction() {
  if (true) {
    var functionScopedVar = "I am function scoped";
  }
  console.log(functionScopedVar); // 'I am function scoped'
}
exampleFunction();
console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
