//Task 1:use template literals to create a string that includes variables for a person's name , age  and log string to console
const personName = "John Doe";
const personAge = 30;

const personInfo = `Name: ${personName}, Age: ${personAge}`;
console.log(personInfo);

//Task 2:create a multi line string using template literals  and log it to console
const multiLineString = `
This is a multi-line string.
We can write text on multiple lines
without using concatenation or escape characters.
Template literals make it easy to format strings.
They print the text the way we give them as input`;
console.log(multiLineString);

//Task 3: Use array destructing to log the first and second element of array and log them to console
 let arr=[10,20,30,40,50];
 let [firstElement,secondElement]=arr;
console.log("Array destructing done");
console.log(firstElement);
console.log(secondElement);
//Task 4: Use object destructing to extract the title and author from a book object and console it 
const book={
    author:"Khabib Nurmagedov",
    title:"UFC",
    year:2004
}
let {title,author,year}=book;
console.log(title);
console.log(author);
console.log(year);
//Task 5:Use spread operator to create a new array of existing elements plus additional elements
let arr2=[...arr,25,41,565];
console.log(arr2);
//Task 6:Use rest operator in a fucntion to accept an arbitary number of arguments,sum them and to the rseult
function add(...arguments)
{
return arguments.reduce((acc,curr)=>acc+curr,0);
}
console.log(add(1,2,3));
//Task 7:Write a function that takes two parameters and returns their product with second parameter having a default value of 1,log the result of calling this function with and without second parameter
let c=(a,b=1)=>
{
    console.log(a*b);
}
c(5,6);
c(5);
//Task 8:Use an enhaced object literals to create an object with methods and properties ,and log the object to the console
const name = "Calculator";
const version = 1.0;

const calculator = {
  name,
  version,

  // Method using enhanced object literals
  sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  },

  // Another method using enhanced object literals
  multiply(...numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
  }
};

// Log the object to the console
console.log(calculator);

// Example usage of methods
console.log("Sum: ", calculator.sum(1, 2, 3, 4)); // Output: Sum: 10
console.log("Multiply: ", calculator.multiply(1, 2, 3, 4)); // Output: Multiply: 24
//Task 9:Create an object with already computed property names ,and log the object to the consoleconst propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person = {
  [propName1]: "John",
  [propName2]: "Doe",
  [propName3]: 30,
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }
};

// Log the object to the console
console.log(person);

// Example usage of a method
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.


