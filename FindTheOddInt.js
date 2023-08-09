// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  if (A.length === 1) return A[0];
  const sortList = A.sort((element_1, element_2) => element_1 - element_2);
  let carry = 0;
  let result = 0;
  sortList.find((element, index) => {
    if (index === 0) carry++;
    else {
      if (element === sortList[index - 1]) carry++;
      else if (carry % 2 !== 0) {
        result = sortList[index - 1];
        return true;
      } else carry = 1;
      if (index === sortList.length - 1) {
        if (carry % 2 !== 0) {
          result = sortList[index];
          return true;
        }
      }
    }
  });
  return result;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
