Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.
Sol :

const states = ["Maharashtra", "Goa", "Assam", "Bihar", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", , "Manipur", "Nagaland", "Odisha", "Punjab", "Rajasthan"];

const statesWithoutVowels = states.filter(state => !['a', 'e', 'i', 'o', 'u'].includes(state[0].toLowerCase()));

console.log(statesWithoutVowels);



Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.
Sol :

let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);


Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
Sol :

let string = 'INDIA';
string = string.split('');
string.splice(3, 0, 'ONES');
string = string.join('');
console.log(string);



Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
Sol :

let string = "This is a sample string with vowels and consonants";
let vowels = string.match(/[aeiou]/gi).length;
let consonants = string.match(/[^aeiou\s]/gi).length;
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.
Sol :

function correctFn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

// Example :
let sentence = "He is go to market.";
let correctedSentence = correctFn(sentence, "go", "going");
console.log(correctedSentence); // Output: "He is going to market."


Q6) inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.
Sol :

const inputArr = [1,2,3,9,10,7,5,4,3];
const answer = inputArr.filter(num => num > 5);
console.log(answer);



Q7)
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce.
Sol :

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);



Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.
Sol :

function repeatedSumOfDigits(number) {
    while (number > 9) {
        let sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        number = sum;
    }
    return number;
}

// Example :
console.log(repeatedSumOfDigits(456)); // Output: 6


Q9) Write a function to count the number of words in a paragraph.
Sol :

function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word !== '').length;
}

// Example :
const paragraph = "This is a paragraph with several words.";
console.log(countWords(paragraph)); // Output: 7


Q10) Write a function to reverse a string.
Input - Hello
Output - olleH
Sol :

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example :
const inputString = "Hello";
console.log(reverseString(inputString)); // Output: "olleH"



Q11)
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]

Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.
Sol :

const students = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

const averages = students.map(student => {
    const scores = Object.values(student)[0];
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const average = sum / Object.keys(scores).length;
    return { average: average };
});

console.log(averages);
