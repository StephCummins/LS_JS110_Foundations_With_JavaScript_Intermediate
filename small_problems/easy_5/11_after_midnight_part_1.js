/* PROBLEM:

The time of day can be represented as the number of minutes before or after 
midnight. If the number of minutes is positive, the time is after midnight. If 
the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns 
the time of day in 24 hour format (hh:mm). Your function should work with any 
integer input.

Input: time in minutes (integer)
Output: time in 24 hour format (hh:mm)

EXAMPLES/TEST CASES:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

DATA STRUCTURE: Integers
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

ALGORITHM:
1) Invoke timeOfDay and pass in integer argument to function
2) Declare hours and remainingMinutes variables 
3) Use equations to determine the hours and minutes:
    - IF minutes > 60:
      - Calculate hours: minutes/60 (round down)
      - Calculate remaining minutes: minutes - (hours * 60) (round down)
      - IF hours > 24 (only 24 hours in a day):
        - hours = hours / 24 (round down)
    - ELSE IF minutes < 0:
      - Calculate hours: minutes / 60 (round up)
      - Calculate remainingMinutes: (hours * 60) + minutes
      - IF hours > 24 (only 224 hours in a day):
        - hours = hours / 24 (round down)
      - ElSE hours = 24 - hours;
4) Check if hours and minutes need to be padded with zeroes (each should have
   2 digits):
    - If length === 1, concatenate "0" with value
    - If length === 0, reassign value to "00"
5) Return hours and minutes, formatted: ${hours}:${minutes}

CODE:

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

function timeOfDay(minutes) {
  let hours;
  let remainingMinutes;
  
  if (minutes >= 0) {
    hours = Math.floor(minutes / MINUTES_PER_HOUR);
    remainingMinutes = minutes - (hours * MINUTES_PER_HOUR);
    
    if (hours > HOURS_PER_DAY) {
      hours = Math.floor(hours / HOURS_PER_DAY);
    }
    
  } else if (minutes < 0) {
    hours = Math.ceil(Math.abs(minutes) / MINUTES_PER_HOUR);
    remainingMinutes = (hours * MINUTES_PER_HOUR) + minutes;
    
    if (hours > HOURS_PER_DAY)  {
      hours = Math.floor(hours / MINUTES_PER_HOUR);
    } else {
      hours = HOURS_PER_DAY - hours;
    }
  }
  
  hours = String(hours);
  if (hours.length === 1) {
    hours = "0" + hours;
  } if (hours.length === 0) {
    hours = "00";
  }
  
  remainingMinutes = String(remainingMinutes);
  if (remainingMinutes.length === 1) {
    remainingMinutes = "0" + remainingMinutes;
  } if (remainingMinutes.length === 0) {
    remainingMinutes = "00";
  }

  return `${hours}:${remainingMinutes}`;
}


console.log(timeOfDay(0))     // "00:00"
console.log(timeOfDay(-3))    // "23:57"
console.log(timeOfDay(35))    // "00:35"
console.log(timeOfDay(-1437)) // "00:03"
console.log(timeOfDay(3000))  // "02:00"
console.log(timeOfDay(800))   //"13:20"
console.log(timeOfDay(-4231)) //"01:29"