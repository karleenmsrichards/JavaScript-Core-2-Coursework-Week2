/*

   Use a "for...in" loop to log out the name of
   each person who earns more than 50000. The
   log should include a "$" symbol before each salary.

*/

let salaries = {
  ross: 30000,
  monica: 55000,
  rachel: 90000,
};

// WRITE BELOW THIS LINE

for (let property in salaries) {
  if (salaries[property] > 50000) {
    console.log(`${property}: $${salaries[property]}`);
  }
}

// Expected Result:
// monica: $55000
// rachel: $90000

array = [1, 2, 2, 4];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
