//<!-- Write a function to check if a number is even or odd. -->
function isEvenOdd(n){
    if(n%2==0){
        console.log(`Number is Ever : ${n}`);
    }else{
        console.log(`Number is Odd : ${n}`);
    }
}

isEvenOdd(10);
//  <!-- Write a function that determines a student's grade based on marks:

// 90 and above: A
// 75-89: B
// 50-74: C
// Below 50: Fail -->

function grade(marks) {
    if(marks>=90){
        console.log(`grade A Your ${marks}`)
    } else if (marks >= 75) {
        console.log(`grade B Your ${marks}`);
    } else if (marks >= 50) {
        console.log(`grade c Your ${marks}`);
    } else {
        console.log(`fail  Your ${marks}`);
    }
}
grade(96)
// <!-- Write a function to check if a number is positive, negative, or zero -->

function checkNumber(number) {
    if (number > 0) {
        console.log(`Positive Number ${number}`);
    } else if (number < 0) {
        console.log(`Negative Number ${number}`);
    } else {
        console.log(`zero Number ${number}`);
    }
}
checkNumber(10);
//  <!-- Write a function to find the greater of two numbers. -->
function GreaterNumber(a, b) {
    if (a > b) {
        console.log(`Greater num ${a}`);
    } else if (b > a) {
       console.log(`Greater num ${b}`);
    } else {
        console.log(`Both num equal `);
    }
}
GreaterNumber(20,30);

function checkSum(num1, num2, num3) {
   
    const sum = num1 + num2 + num3;
    if (sum > 15) {
        return `The sum is ${sum} .`;
    } else {
        return `The sum is ${sum} .`;
    }
}
checkSum(30,40,89)