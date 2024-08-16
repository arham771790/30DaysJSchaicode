//Activity 1:If-else statements
//Task 1:WAP to check if a number is +ve,-ve or zero and log the result
num=prompt("Enter the number");
if(num>0)
    console.log(`${num} is a positive number.`);
else if(num<0)
    console.log(`${num} is a negative number.`);
else
    console.log(`${num} is zero.`);

//Activity 2: WAP to check if a person is eligible to vote or not
age=prompt("Enter the age of the person");
if(age>18)
    console.log("Eligible to vote");
else
    console.log("Not eligible to vote");

//Task 2:Nested-if Else- WAP to find the largest of three numbers
num1=prompt("Enter the number 1");
num2=prompt("Enter the number 2");
num3=prompt("Enter the number 3");
if(num1>num2 && num1>num2)
    alert(`${num1} is the greatest number`);
else if(num2>num3)
    alert(`${num2} is the greatest number`);
else 
    alert(`${num3} is the greatest number`);

//Task 3:Switch Case:
//Activity 1:WAP to print weekdays using switch case
weekday=prompt("Enter the day ");
switch(weekday)
{
    case '1':
        alert("Monday");
    break;
    
    case '2':
        alert("Tuesday");
    break;
    
    case '3':
        alert("Wednesday");
    break;
    
    case '4':
        alert("Thursday");
    break;
    
    case '5':
        alert("Friday");
    break;
    
    case '6':
        alert("Saturday");
    break;
    case 7:
        alert("Sunday");
    break;
    default:
        alert("Wrong Choice");
}
grade=prompt("Enter the Grades");
function myGrading(score) {
    let gscore;
    switch (true) {
        case (score <= 100 && score >= 90):
            gscore = 'A';
            break;
        case (score <= 89 && score >= 80):
            gscore = 'B';
            break;
        case (score <= 79 && score >= 70):
            gscore = 'C';
            break;
        case (score <= 69 && score >= 60):
            gscore = 'D';
            break;
        case (score <= 59 && score >= 0):
            gscore = 'F';
            break;
        case (score > 100 || score < 0):
            gscore = 'INVALID SCORE';
            break;
        case (score <= 2 && score >= 0):
            gscore += '-';
            break;
        case (score <= 9 && score >= 8):
            gscore += '+';
            break;
        default:
            return 'INVALID SCORE';
    }
    return gscore;}

