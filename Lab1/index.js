// QUESTION 2

const getData = (variable) => variable;

const getSum = (num1, num2) => num1 + num2;

const ages = [25, 31, 42, 77];

const calculateAges = ages.map((age) => {
    if(age < 70){
       return age * 2;
    }
    return age;
});

console.log(calculateAges);
console.log(getSum(1,4));
console.log(getData("Hello"));

// QUESTION 3

// A
var items = ["bread", "milk", "butter"];

// B
const addTask = (task) => {
    items.push(task);
    console.log(task + " has been added to the array");
    return items.length;
}

console.log(addTask("cheese"));