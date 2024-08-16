//Task 1:
//Function to calculate if a number is even or odd
function evenOdd(nums)
{
    if(nums%2==0)
        console.log(`${nums} is an even number`);
    else
        console.log(`${nums} is an odd number`);
}

evenOdd(5);

// Task 2:Calculate square of a number 
function squareOfNum(nums)
{
    return nums*nums;
}
console.log(`Square of 5 is ${squareOfNum(5)}`);

//Task 3: Find the maximum of two numbers using function expression
// A function expression is a function declared inside a variable
let a=function(num1,num2){
   if(num1>num2)
    return num1;
   else
    return num2;
    
}
console.log(a(5,60));
//Task 4:WAF to concatenate the two strings and return the result
let catenate=(string1,string2)=>{
    return string1+string2;
}
console.log(catenate("Arham ","Sheikh"));
//Task 5:Calculate sum of two numbers using arrow function
let b=(x,y)=>{
    return x+y;
}
console.log(b(15,25));
//Task 6:Write a function to check if a string contains a specific character or not 
const check=(str,ch)=>{
    return str.includes(ch);
}
console.log(check("Arham",'y'));
//Tas 7:WAF that accepts two parameters and returns their product and also provide a default value for the second parameter
const product=(a,b=25)=>{
    return a*b;
}
console.log(product(4));//Here default value of second parameter is already provided in the function
//Task 8:WAF that takes person's age and name then return a greeting message also provide a deafult value 
const greeting=(name,age=18)=>
{
    console.log(`Hey ${name} ,Welcome to  Day 5 of learning Javascript ${age}`);
}
greeting("Arham");
//Task 9:write a higher order function that takes a function and number as an input and it calls the function that many times as number
const  hof=(func,num)=>{
    for(let i=1;i<=num;i++)
    {
        func("Ahmed",8);
    }
}
hof(greeting,5);
//Task 10:write a higher order function that accepts two functions and a value,applies the first function to the value,and then applies second function to the result
const composeFunctions = (func1, func2, value) => func2(func1(value));
const addFive = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;
const result = composeFunctions(addFive, multiplyByTwo, 10); 
console.log(result); 
