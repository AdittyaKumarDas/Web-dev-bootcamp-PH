function avgAndSize(arr){
    let sum = 0;

    for(let items of arr){
        sum += items;
    }

    let avg = sum / arr.length;

    return avg;
}


const values = [10,74,54,876,23,54,34,21,78,89];

console.log(avgAndSize(values));

