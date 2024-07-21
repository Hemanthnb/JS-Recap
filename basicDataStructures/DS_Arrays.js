console.log("------------------------");
console.log("One Dimensional Array");

//Decleration
const arr = [1, 2, 3, "red", 4, "G", "blue"];

//------------------------------------------------------------------------------
//Traversal

//traversing using normal loops
console.log("------------------------");
console.log("Using for each");
arr.forEach((ele) => console.log(ele));

//Using For of
console.log("------------------------");
console.log("Using for of");
for (let ele of arr) {
  console.log(ele);
}

//simple program to find the sum of array.
console.log("------------------------");
let sum = 0;
arr.map((ele) => (sum += ele));
console.log("Sum of elements of array : ", sum);

//------------------------------------------------------------------------------
//INSERT OPERATION

//Insert more elements
console.log("------------------------");
console.log("Inserting elements");
console.log("1. Inserting at end");
arr.push("pushed item"); // this will adds elements at the end
console.log(arr);

//For this we have to use splice in JS
//Splice is a built in method whichis used to add / remove elemets from array
console.log("1. Inserting at specific index");
arr.splice(0, 0, "newEle"); //this gets inserted at 0
console.log(arr);

console.log("1. Inserting at specific index");
// arr[1]="hell"
arr.splice(0, 4, "newEle4"); //this gets inserted at 0
console.log(arr.length);

//------------------------------------------------------------------------------
// DELETE OPERATION

//Delete elements from Array
console.log("------------------------");
console.log("Delete elements");
let deleteArr = new Array(1, 2, 3, 4, 5, 6);
deleteArr.pop(); //This will remove the last indexed ele
console.log("1.delete at end : ", deleteArr);

deleteArr.splice(1, 1); // this will remove ele with index =1
console.log("2.delete in between : ", deleteArr);

//------------------------------------------------------------------------------

// Update OPERATION

//Update elements from Array
console.log("------------------------");
console.log("Update elements");
let updateArr = new Array(1, 2, 3, 4, 5, 6);
updateArr[1] = "updatedUsingDesiMethod";
console.log("Update elements using desimethod", updateArr);
updateArr.splice(2, 0, "updatedUsingSpliceMethod");
console.log("Update elements using splice method : ", updateArr);

//------------------------------------------------------------------------------
//advance method we use in Development

console.log("------------------------");
console.log("Using map function to traverse");

//map
arr.map((ele, index) => {
  console.log("element : ", ele, " index : ", index);
});

console.log("------------------------");
console.log(
  "Using filter function to filter the elements of array based on conditions "
);

//filter
let intArray = arr.filter((ele) => typeof ele !== "string");
console.log(intArray);
console.log("------------------------");

//REDUCE : It executes a reducer function for each array element, returning a single accumulated value.
const numbers = [1, 2, 3, 4];
const reduce_sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reduce_sum); // Output: 10

console.log("------------------------");
let compareArray1 = [1, 2, 3, 4];
let compareArray2 = [1, 2, 3, 4];
console.log("compareArray1==compareArray2 ", compareArray1 == compareArray2); // It is false because both will refer to diff memory locations

//Here both compareArray1 and compareArray2 will points to same memory location.
compareArray2 = compareArray1;
console.log("compareArray1==compareArray2 ", compareArray1 == compareArray2); //It is true because bioth will refer to same memory locations

//removing element from index 1 to 2(inclusive)
compareArray1.splice(1, 2);
console.log(compareArray1, compareArray2);

console.log("------------------------");
console.log("Using spread operator on arrays");
let spreadArray_1 = [1, 2, 3, 4];
spreadArray_1 = [...spreadArray_1, 5];
console.log(spreadArray_1);
