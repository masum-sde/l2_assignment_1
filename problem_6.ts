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
