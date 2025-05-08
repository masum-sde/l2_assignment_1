// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(formatString("HELLO"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

// Description: Create a function that filters an array of objects by the rating property,
// returning only items with a rating of 4 or more.

type Item = { title: string; rating: number };

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

const books: Item[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

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

// Description:

// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.

// Base class
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

// Derived class
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year); // Call Vehicle constructor
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolloa");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number

function processValue(value: string | number): number | undefined {
  if (typeof value === "string") {
    return value.length;
  }
  if (typeof value === "number") {
    return value * 2;
  }
}
console.log(processValue("hello"));
console.log(processValue(10));

// Description: Define an interface Product and create a function to find the product
//  with the highest price in an array. If the array is empty, return null.

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let highest = products[0];
  if (products.length > 0) {
    for (const product of products) {
      if (product.price > highest.price) {
        highest = product;
      }
    }
    return highest;
  } else {
    return null;
  }
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 250 },
  { name: "Bag", price: 300 },
];

console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct([]));

// Description:

// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(getDayType(Day.Friday));
console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Sunday));

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
