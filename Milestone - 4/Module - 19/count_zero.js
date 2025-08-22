function countZero(str) {
  let newStr = str.split(""); //Turn into a array

  let cntZero = 0, cntOne = 0;

  for (let num of newStr) {
    if (num === "0") {
      cntZero++;
    }
    else{
        cntOne++;
    }
  }

  return {zero:cntZero, one:cntOne};
}

const str = "01001000011111100011111101010101010";

console.log("Zero is: ",countZero(str).zero, "One is: ",countZero(str).one);
