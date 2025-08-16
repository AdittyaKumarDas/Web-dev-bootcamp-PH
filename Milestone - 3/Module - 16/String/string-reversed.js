const sentence = "Hi i am Adittya Kumar Das";

// Method -1
/*
let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}

console.log(reverse);
console.log(sentence.length);
*/

// 2nd method
/*
let rev = '';

for ( let i = sentence.length ; i > 0; i--){
    rev = rev +  sentence[i-1]; 
    // console.log(sentence[i-1]);
}

console.log(rev);
*/

// Third Method

let reversed = sentence.split('').reverse().join('');

console.log(reversed);