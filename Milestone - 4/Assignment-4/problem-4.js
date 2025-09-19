function isSame(arr1, arr2) {
  // You have to write your code here
  //   Validation Check
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }

  let isBool = false;
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isBool = true;
      } else {
        return false;
      }
    }
    if (isBool) {
      return true;
    }
  }
}

const arr1 = { data: [2, 5, 6] };
const arr2 = [2, 5, 6];

console.log(isSame(arr1, arr2));
