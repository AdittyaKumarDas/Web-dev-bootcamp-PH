function SumOfArrayy(arr){
    let sum = 0;
    
    for(let item of arr){
        sum += item;
    }   

    return sum;
}



console.log(SumOfArrayy([10,20,30,40,50]));