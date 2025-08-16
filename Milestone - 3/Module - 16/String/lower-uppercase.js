const subject = "Accounting";
const subject2 = "accounting";

console.log(subject.toLowerCase());
console.log(subject2.toUpperCase());

if(subject.toLowerCase() == subject2.toLowerCase()){
    console.log("This is Accounting department");
}

else{
    console.log("That is other department");
}