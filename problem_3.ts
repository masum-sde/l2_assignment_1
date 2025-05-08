// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

console.log(concatenateArrays([1, 2], [3], [2, 3]));
console.log(
  concatenateArrays(
    ["Germany", "Italy"],
    ["Bangladesh", "Pakistan"],
    ["USA", "CANADA"]
  )
);
