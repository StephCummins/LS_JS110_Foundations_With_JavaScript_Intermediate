/* PROBLEM:

You have a bank of switches before you, numbered from 1 to count. Every switch 
is connected to exactly one light that is initially off. You walk down the row 
of switches and toggle every one of them, that is, you flip every switch. All 
the lights are now on. You walk back to the beginning of the row and start 
another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, 
every other light is on. On the third pass, you go back to the beginning again, 
this time toggling switches 3, 6, 9, and so on. You continue to repeat this 
process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns 
an array of the lights that are on after count passes.

INPUT: The total number of switches
OUTPUT: An array of all lights that are switched on

EXAMPLE/TEST CASES: 
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

DATA STRUCTURE: 
Two arrays: one with lights on and one with lights off
const ROUND_AFTER_ALL_LIGHTS_ON = 2;

ALGORITHM:
1) Invoke lightsOn and pass the total amount of lights to the function as an 
   argument
2) Declare lightsOn array: Initialize to all lights, from 1 to totalLights
3) Declare lightsOff and initialize to empty array []
4) Iterate totalLights amount of times, starting at round 2. Each iteration,
   increment the round by 1 and:
   - Run a nested loop that iterates totalLights amount of times, starting at
     light 1. For each iteration:
     - Check if lights % roungs = 0 (to find multiples of the current round)
        - IF TRUE:
          - check if the lightsOn array includes the current light:
            - IF TRUE: remove from lightsOn array and add to lightsOff array
            - IF FALSE: remove from lightsOff array and add to lightsOn array
5) Return lightsOn array

CODE:
*/
const ROUND_AFTER_ALL_LIGHTS_ON = 2;

function lightsOn(totalLights) {
  let lightsOn = turnAllLightsOn(totalLights);
  let lightsOff = [];
  
  for (let rounds = ROUND_AFTER_ALL_LIGHTS_ON; rounds <= totalLights; rounds++) {
    for (let lights = 1; lights <= totalLights; lights += 1) {
      if (lights % rounds === 0) {
        lightsOn.includes(lights) ? 
          toggle(lightsOn, lightsOff, lights) : 
          toggle(lightsOff, lightsOn, lights);
      }
    }
  }
  return lightsOn;
}

function turnAllLightsOn(totalLights) {
  let lightsArray = [];
  for (let count = 1; count <= totalLights; count += 1) {
    lightsArray.push(count);
  }
  return lightsArray;
}

function toggle(switchOn, switchOff, light) {
  switchOff.push(switchOn.splice(switchOn.indexOf(light), 1)[0]);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
