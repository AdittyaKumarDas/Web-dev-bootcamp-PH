function evenNumbers(arr){
    let evenNum = [];

    for(const num of arr){
        
        if( num % 2 === 0){
            evenNum.push(num);
        }
    }

    return evenNum.sort(function(a,b) {return a-b});
}


const numbers = [23, 98, 46,24, 90, 77, 97, 88, 108, 46, 102, 20008, 399999 ];
console.log(evenNumbers(numbers));