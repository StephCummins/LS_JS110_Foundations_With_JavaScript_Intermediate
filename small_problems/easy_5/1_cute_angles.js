/* PROBLEM:

Write a function that takes a floating point number representing an angle 
between 0 and 360 degrees and returns a string representing that angle in 
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent 
degrees, a single quote (') to represent minutes, and a double quote (") to 
represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

INPUT: Floating point number representing an angle between 0 and 360 degrees
OUTPUT: String representing that angle in degrees, minutes, and seconds

EXPLICIT RULES:
- Use degree symbol (˚) to represent degrees
- Use a single quote (') to represent minutes
- Use a double quote (") to represent seconds
- There are 60 minutes in a degree
- There are 60 seconds in a minute

EXAMPLES/TEST CASES:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

DATA STRUCTURE:
- Input float / output string
- Two constants representing minutes per degree and seconds per minute:
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;

ALGORITHM:
1) Invoke dms function and pass in float argument
2) Declare result variable and initialize to empty string
3) Calculate degrees: float (round down, to remove the decimal)
4) Calculate remainder: subtract degrees from float, then multiply by 60
5) Calculate minutes: remainder (round down, to remove the decimal)
6) Calculate seconds: subtract minutes from seconds, then multiply by 60 (round
   down, to remove the decimal)
7) Check if minutes and seconds need to be padded with zeroes (they should both
   include 2 digits):
    - IF yes, invoke padZeroes function and pass in value as argument
      - check if value === 0; IF yes, return "00"
      - else, return "0" + value
8) Concatenate degrees + "˚" + minutes + "'" + seconds + '"' and save value as
   result
9) Return result

*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(float) {
  let degrees = parseInt(float, 10);
  let remainder = (float - degrees) * MINUTES_PER_DEGREE;
  let minutes = parseInt(remainder, 10);
  let seconds = parseInt((remainder - minutes) * SECONDS_PER_MINUTE, 10);
  
  return`${degrees}°${padZeroes(minutes)}'${padZeroes(seconds)}"`;

}

function padZeroes(num) {
  if (num === 0) {
    return "00";
  } else if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"