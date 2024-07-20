//Declaring object
let obj = {
  name: "hemanth",
  role: "SDE",
  age: 22,
};

// Updating existing data
obj["age"] = 23;

//you can access in two ways
console.log("--------------------------");
console.log("you can access in two ways");
console.log('obj["age"] ', obj["age"]);
console.log("obj.age ", obj.age);
console.log(obj);

//creating a new key value
obj["dob"] = "2001/03/06";
console.log("--------------------------");
console.log("After creating a new key value");
console.log(obj);

//Deleting the existing resource

console.log("--------------------------");
console.log("After deleting property age");
delete obj.age;
console.log(obj);

console.log("--------------------------");
console.log("Check what will be the default type of keys in object");
//Even if we define keys as float internally it will be implicit typeCasted as string
objwithFloatKeys = {
  9.01: "CGPA",
  5.11: "height",
  75: "weight",
};
console.log(typeof Object.keys(objwithFloatKeys)[0]);

//Extracting the keys from Object
console.log("--------------------------");
console.log("Extracting the keys from Object");
const keys = Object.keys(obj);
console.log(keys);
