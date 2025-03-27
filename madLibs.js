//madLibs.js
/* Step 2: Declare and assign values to variables
Include:
Strings (e.g., const timeOfDay = "sunny afternoon";).
Numbers (e.g., const mathResult = 2 + 2;).
A boolean expression (e.g., const booleanValue = timeOfDay.includes("afternoon");).
An object with properties (e.g., const person = { name: "Mike", age: 25 };).
*/
const timeofDay = "bright morning";
const vehicle = "ship";
const seaType = "deep blue";
const object = "box";
const num1 = 5;
const num2 = 6;

const mathResult = num1 * num2;
const day = timeofDay.includes("morning");
const person = {name: "Samuel", role: "navigator"};
const crewMember = person.name;
const crewPosition = person.role;




// Step 1: Paste in one of the story templates above
const story = `One ${timeofDay}, I set sail on a ${vehicle} named The Black Pearl. The ${seaType} sea stretched endlessly before us. Just then, we spotted a mysterious ${object} floating in the water. 'Could it be treasure?' the ${crewPosition} ${crewMember} exclaimed. We hauled it aboard and opened it. Did you know ${num1} × ${num2} equals ${mathResult}? Incredible, right?`;
document.getElementById("madlibs-output").textContent = story;
console.log(story);