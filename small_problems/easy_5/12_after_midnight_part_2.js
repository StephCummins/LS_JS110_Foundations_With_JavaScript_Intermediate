/* As seen in the previous exercise, the time of day can be represented as the 
number of minutes before or after midnight. If the number of minutes is positive, 
the time is after midnight. If the number of minutes is negative, the time is 
before midnight.

Write two functions that each take a time of day in 24 hour format, and return 
the number of minutes before and after midnight, respectively. Both functions 
should return a value in the range 0..1439. 

INPUT: Time of day in 24 hour format
OUTPUT: Number of minutes (either before / after midnight)

EXAMPLES/TEST CASES: 
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

DATA STRUCTURE:
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = 1440;
- convert input time to array to isolate hours and minutes

ALGORITHM:

AFTERMIDNIGHT:
1) Invoke afterMidnight and pass the time argument to the function
3) Declare timeArray and initialize to time.split("") with each digit an element
2) Isolate the hours and minutes:
   - SET hours to the following: splice the timeArray, starting at 0 index with
     a delete count of 2 to get the first two digits. Join the elements into a
     string, then convert to a number
   - SET minutes to the following: splice the timeArray, starting at the 1 index
     (the 0 index is currently ":") with a delete count of 2 to get the minutes
     digits. Join the elements into a string, then convert to a number
4) Check if hours === 24:
  - IF it does, then hours = 0
5) Add hours * 60 to minutes
6) Return minutes

BEFOREMIDNIGHT:
1) Invoke beforeMidnight and pass the time argument to the function
2) SET minutes to the return value of calling the afterMidnight function and 
   passing in time as the argument
3) SET finalValue to 1440 - minutes
4) Check if finalValue === 1440:
   - IF it does, finalValue = 0
5) Return finalValue

CODE:
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = 1440;

function afterMidnight(time) {
  let timeArray = time.split("");
  let hours = Number(timeArray.splice(0, 2).join(""));
  let minutes = Number(timeArray.splice(1, 2).join(""));
  if (hours === HOURS_PER_DAY) hours = 0; 
  minutes += (hours * MINUTES_PER_HOUR);
  return minutes;
}

function beforeMidnight(time) {
  let minutes = afterMidnight(time);
  let finalValue = MINUTES_PER_DAY - minutes;
  if (finalValue === MINUTES_PER_DAY) finalValue = 0;
  return finalValue;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);