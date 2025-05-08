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
  if (day === Day.Friday || day === Day.Saturday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(getDayType(Day.Friday));
console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Sunday));
