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
const addTask = (item) => {
    items.push(item);
    console.log(item + " has been added to the array");
    return items.length;
}

console.log(addTask("cheese"));

// C
const listAllTasks = () => {
    items.forEach((item) => {
        console.log("- " + item);
    });
};

listAllTasks();

// D
const deleteTask = (item) => {
    items = items.filter(a => a !== item); 
    console.log(item + " has been removed from the array");
    return items.length; 
};

console.log(deleteTask("milk"));