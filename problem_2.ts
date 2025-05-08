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
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
