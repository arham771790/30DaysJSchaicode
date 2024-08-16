//Task 1:for loop
function one2ten()
{
 for(i=1;i<=10;i++)
    console.log(i);
}
one2ten();
function table5()
{
    for( i=1;i<=10;i++)
    {
        console.log(`5 x ${i}  =${i*5}`);
    }
}
table5();
//Task 2:while loop
function one2tenusingwhile()
{
    num=1
    while(num<=10)
    {
        console.log(num);
        num++;
    }
}
one2tenusingwhile();
function table5usingwhile()
{
    i=1;
    while(i<=10)
    {
        console.log(`5 x ${i}  =${i*5}`);
        i++;
    }
}
table5usingwhile();
//Task 4: Nested Loops 

    let n = 5; // row or column count
    let string = "";
    for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        string += "*";
    }
    string += "\n"; // newline after each row
}
    console.log(string);

//Task 5:continue and break statements usage 
for(let i=1;i<=10;i++)
{
    if(i==5)
    continue;
    else
    console.log(i);
}
for(let i=1;i<=10;i++)
    {
        if(i==7)
        break;
        else
        console.log(i);
    }