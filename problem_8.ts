// Description: Create an async function that:

// Returns the square of a number after 1 second
// Rejects if the number is negative

async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => resolve(n * n), 1000);
    } else {
      reject({ message: "Negative number not allowed" });
    }
  });
}

squareAsync(5)
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message));
squareAsync(-5)
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message));
