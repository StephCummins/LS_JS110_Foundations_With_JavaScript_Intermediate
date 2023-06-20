/* PROBLEM:

Write a function that takes a year as an argument and returns the number of 
Friday the 13ths in that year. 

EXPLICIT RULES:
- You may assume that the year is greater than 1752, which is when the United 
  Kingdom adopted the modern Gregorian Calendar. 
- You may also assume that the same calendar will remain in use for the 
  foreseeable future.

EXAMPLES/TEST CASES:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

DATA STRUCTURE:
- const MONTHS_IN_YEAR = 12;
- const UNLUCKY_DAY = 13;
- const FRIDAY = 5;
- const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December']

ALGORITHM:
1) Declare/initialize 3 constants: MONTHS_IN_YEAR, UNLUCKY_DAY and FRIDAY
2) Invoke fridayThe13ths and pass in the year argument
2) Declare totalUnluckyDays variable and initialize to 0
3) Use a for loop to iterate 12 (MONTHS_IN_YEAR) times; start the count at 0, 
   the current month, and increment by one each iteration.
   - On each iteration, create a new date equal to: 
     MONTHS[currentMonth] UNLUCKY_DAY, year
   - check if date lands on a Friday: if it does, totalUnluckyDays += 1;
4) return totalUnluckyDays

CODE:
*/

const MONTHS_IN_YEAR = 12;
const UNLUCKY_DAY = 13;
const FRIDAY = 5;

function fridayThe13ths(year) {
  let totalUnluckyDays = 0;
  for (let currentMonth = 0; currentMonth < MONTHS_IN_YEAR; currentMonth++) {
    let day = new Date(year, currentMonth, UNLUCKY_DAY);
    if (day.getDay() === FRIDAY) totalUnluckyDays += 1;
  }
  return totalUnluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2