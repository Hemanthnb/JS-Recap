// console.log("obj : ", obj); // ReferenceError: Cannot access 'obj' before initialization
const obj = {
  name: "Hemanth",
  age: 23,
};

//Const is abbrevation for constant, itv works same as let but for variable once value is defined it remains constant except for Objects and arrays
console.log("-------------------");
console.log("Before modifying constant Obj : ", obj);
obj["age"] = 22; //even though it is const it is mutable
console.log("modified age Obj : ", obj);
console.log("-------------------");
const array = [1, 2, "JavaScript", 4, "TS"];
console.log("Before modifying constant array : ", obj);
array.push("MUI");
console.log("Added elements to array : ", array);
console.log("-------------------");
