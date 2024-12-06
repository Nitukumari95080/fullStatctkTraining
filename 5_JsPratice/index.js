// Write a JavaScript function that takes three numbers as input, calculates their sum, and checks:

// If the sum is greater than 20, return "The sum is very high."
// If the sum is between 10 and 20 (inclusive), return "The sum is moderate."
// Otherwise, return "The sum is low."
function evaluateSum(num1, num2, num3) {
    const sum = num1 + num2 + num3;

    if (sum > 20) {
        return "The sum is very high.";
    } else if (sum >= 10 && sum <= 20) {
        return "The sum is moderate.";
    } else {
        return "The sum is low.";
    }
}

// Example usage
console.log(evaluateSum(8, 5, 10));//The sum is very high.


// Write a JavaScript function that takes a person's age as input and determines:

// If the person is under 13, return "You are a child."
// If the person is between 13 and 19 (inclusive), return "You are a teenager."
// If the person is 20 or older, return "You are an adult."

function determineAgeCategory(age) {
    if (age < 13) {
        return "You are a child.";
    } else if (age >= 13 && age <= 19) {
        return "You are a teenager.";
    } else {
        return "You are an adult.";
    }
}
console.log(determineAgeCategory(10));//You are a child. 

// If both numbers are even, return "Both numbers are even."
// If one number is even and the other is odd, return "One number is even, and one is odd."
// If both numbers are odd, return "Both numbers are odd."

function checkEvenOdd(num1, num2) {
    const isNum1Even = num1 % 2 === 0;
    const isNum2Even = num2 % 2 === 0;

    if (isNum1Even && isNum2Even) {
        return "Both numbers are even.";
    } else if (!isNum1Even && !isNum2Even) {
        return "Both numbers are odd.";
    } else {
        return "One number is even, and one is odd.";
    }
}

console.log(checkEvenOdd(4, 8));  //Both numbers are even.



// Write a JavaScript function that takes a student's marks as input and determines the grade:

// If the marks are 90 or above, return "Grade: A."
// If the marks are between 75 and 89, check:
// If marks are greater than 80, return "Grade: B+."
// Otherwise, return "Grade: B."
// If the marks are below 75, return "Grade: C.


function determineGrade(marks) {
    if (marks >= 90) {
        return "Grade: A.";
    } else if (marks >= 75 && marks <= 89) {
        if (marks > 80) {
            return "Grade: B+.";
        } else {
            return "Grade: B.";
        }
    } else {
        return "Grade: C.";
    }
}


console.log(determineGrade(95)); // Grade: A.


// Write a JavaScript function that takes the current temperature as input and checks:

// If the temperature is 30°C or higher, return "It's hot outside."
// If the temperature is between 20°C and 29°C, check:
// If it's exactly 25°C, return "It's a perfect day!"
// Otherwise, return "The weather is pleasant."
// If the temperature is below 20°C, return "It's cold outside."

function checkTemperature(temperature) {
    if (temperature >= 30) {
        return "It's hot outside.";
    } else if (temperature >= 20 && temperature <= 29) {
        if (temperature === 25) {
            return "It is a perfect day!";
        } else {
            return "The weather is pleasant.";
        }
    } else {
        return "It iss cold outside.";
    }
}

console.log(checkTemperature(32)); //It is hot outside.



