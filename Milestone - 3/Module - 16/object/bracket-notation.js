const user={
    name: "Adittya Das",
    age: 25,
    degree:"BBA Honours",
    "university": "National University",
    'Result' : "CGPA - 3.10",
    "main passion":["programming", "coding", "problem solving"]
}


console.log(user['name']);
console.log(user["university"]);
console.log(user["Result"]);

//  we are change many things

user['Result'] = 'CGPA-3.25';
const changeResult = user["Result"];

user['main passion'] = ["programming", "coding", "problem solving", "Freelancing", "job tech sector"];

console.log(user['main passion']);

console.log(changeResult);

// We can store our object key/property in a variable

const changeDegree = "degree";

console.log(user[changeDegree]);

// We can store our object key/property in a variable then chage the value of the key

const newAge = "age";

user[newAge] = 26;

console.log(user);