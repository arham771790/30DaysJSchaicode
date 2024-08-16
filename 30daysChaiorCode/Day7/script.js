//Task 1:Create an oject representing a book with properties like author,title and year and log the object to the console
let harrpotter={
    author:"JK Rowling",
    title:"Harry Potter and the Deathly Hallows",
    year:2000
};
console.log(harrpotter);
//Task 2: Access and log the title and author properties of book
console.log(harrpotter.author);
console.log(harrpotter.title);
//Task 3:
let book2={
    author:"Jane Austen",
    title:"Pride and Prejudice",
    answer:function(){
        return `A book ${book2.title} is written by ${book2.author}`;
    }
}
console.log(book2.answer());
//Task 4: Add a method to the book object that takes a parameter year and updates the book's year property, then log the updated object
let book3={
    author:"Mike Tyson",
    title:"UFC",
    year:2005,
    publishing:function(newYear){
        this.year=newYear;
    }
} 
console.log(book3);
book3.publishing(2025);
console.log(book3);
//Task 5:Create a nested object representing library with properties like name and books(an array of book objects),and log the library object to the console
let library={
    name:"City Library",
    books:[ {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction"
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian"
      },
      {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        genre: "Adventure"
      }
    ]
}
console.log(library);
//Task 6:Access and log the name of library and titles of all books in library
console.log(library.name);
library.books.forEach(book=>{
   console.log(book.title);
})
//Task 7:Add a method to the books object that uses this keyword to return a  string with book's title and year, and log the result of the calling function
let book4={
    title:"Rich and Poor Dad",
    author:"Arham Sheikh",
    newProps:function(newTitle,newAuthor){
        this.title=newTitle;
        this.author=newAuthor
    }
}
console.log(book4);
book4.newProps("New Dreams","JK Jackson");
console.log(`Book name is ${book4.title} and author is ${book4.author}`);
//Task 8: Use for...in loop to iterate over the properties of book and log each property and its value
//Printing the library object declared above
console.log("Library name:",library.name);
library.books.forEach(book=>{
    for(let property in book)
        console.log(`${property} : ${book[property]}`);
})
console.log("\n");
//Task 9:Use Object.keys and Object.values methods to log all the keys and values of an Object
console.log("Task 9");
library.books.forEach(book => {
    console.log("Book Properties:");
    const keys = Object.keys(book);
    const values = Object.values(book);
    
    keys.forEach((key, index) => {
      console.log(`${key}: ${values[index]}`);
    });
  });
  