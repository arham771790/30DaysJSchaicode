//Task 1: Create an array with numbers from 1 to 5 and console log the array
let arr=[1,2,3,4,5];
console.log(arr);
//Task 2: Access the first and last element of array and print them
console.log(`${arr[0]} and ${arr[arr.length-1]}`);
//Task 3:push an element into the arr and log the updated array
arr.push(6);
console.log(arr);
//Task 4:pop last element from the arr and log the updated array
arr.pop();
console.log(arr);
//Task 5: shift operation in arr deletes the first element of array
arr.shift();
console.log(arr);
//Task 6: unshift operation in arr add element at the beginig of array
arr.unshift(85);
console.log(arr);
//Task 7: use map method to create a new array and double all the elements and log the new array
const doublearr=arr.map(element=>element*2);
console.log(doublearr);
//Task 8: make a new array using filter and filter out even ones only and log updated array
const filterEven=arr.filter(element=>element%2==0);
console.log(filterEven);
//Task 9:Use the reduce method to calculate sum of all numbers in the array and log the result
const redAns=arr.reduce((prev,curr)=>{
   return prev+curr;
});
console.log(redAns);
//Task 10: Use for loop to iterate over array and log the result
for(let a=0;a<doublearr.length;a++)
{
    console.log(doublearr[a]);
}
console.log("\n");
//Task 11:use forEach loop to iterate over array and log the result 
arr.forEach(nums=>{
    console.log(nums);
})
//Task 12:Create a 2D array and console log the result
let twoD=[[1,2,3],[4,5,6],[7,8,9]];
console.log(twoD);
for(let i=0;i<twoD.length;i++)
{
    for(let j=0;j<twoD[0].length;j++)
    {
        console.log(twoD[i][j]);
    }
    console.log("\n");
}
//Task  13:Access and log a specific element from the Matrix
console.log(twoD[0][2]);
