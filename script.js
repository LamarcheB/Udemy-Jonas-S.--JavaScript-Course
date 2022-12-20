"use strict";

// alert("JS is fun");

/*
--- typeof --- to find the variable type

let variable = false;
console.log(typeof variable);
*/

// console.log(100 + 10 + 15);

// console.log("23" - 10 + 5 + "6");

// const favorite = prompt("what's your favorite number?");
// console.log(favorite);

// function youAreAmazing() {
//   console.log("you're amazing!");
// }

// youAreAmazing();

// function juiceMaker(apple, orange) {
//   const juice = `Juice with ${apple} apples and ${orange} oranges`;
//   return juice;
// }

// console.log(juiceMaker(3, 6));

// const appleJuice = juiceMaker(5, 2);
// console.log(appleJuice);

// // function Declaration
// function calcAge1(birthYear) {
//   console.log(2022 - birthYear);
//   return 2022 - birthYear;
// }

// const Age1 = calcAge1(1990);

// // function expression  -- assigning and expression to a variable via a method - AKA the function is just a value.
// const calcAge2 = function (birthYear) {
//   console.log(2022 - birthYear);
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1950);

// //Arrow function
// // variable declaration = parameters => Calculations.
// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1980));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} get to retire in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1990, "ben"));
// console.log(yearsUntilRetirement(1980, "Josh"));

// -------------------------------------------------
//Coding Challenge:
//take the average of 3 scores for 2 teams to determine which team won.Winning conditions are the average score must be at least double the losing score, or no one wins
//-------------------------------------------------

// const calcAverage = () => {
//   const score1 = prompt("What was the score for the first game?");
//   const score2 = prompt("What was the score for the second game?");
//   const score3 = prompt("What was the score for the third game?");
//   return (Number(score1) + Number(score2) + Number(score3)) / 3;
// };

// function checkWinner(team1AverageScore, team2AverageScore) {
//   // double the average score to win
//   if (team1AverageScore >= team2AverageScore * 2) {
//     console.log(`Team one wins:  ${team1AverageScore} to ${team2AverageScore}`);
//   } else if (team2AverageScore >= team1AverageScore * 2) {
//     console.log(`Team two wins:  ${team2AverageScore} to ${team1AverageScore}`);
//   } else {
//     console.log("Neither team wins");
//   }
// }

// alert(`For the first team:`);
// const team1AverageScore = calcAverage();
// alert(`For the second team:`);
// const team2AverageScore = calcAverage();
// checkWinner(team1AverageScore, team2AverageScore);

//-------------------------------------------------

// const friends = ["mike", "gail", "kari", "emily"];
// // OR const friends = new Array("mike", "gail", "emily");

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// console.log(friends);

// friends[3] = "riley"; // change/add array data
// console.log(friends);

// friends[3] = 1990; // NOTE of different type in single array
// console.log(friends);

// //ADDING Elements
// friends.push("Maya"); // adds elements to the end of an array
// console.log(friends);
// const pushed = friends.push("Maya");
// console.log(`Push: ${pushed}`);

// friends.unshift("Riley"); // adds elements to the start of an array
// console.log(friends);
// const unshift = friends.unshift();
// console.log(`Unshift: ${unshift}`);

// // REMOVING elements
// friends.pop(); // removes last element of the array
// const popped = friends.pop();
// console.log(friends);
// console.log(`Pop: ${popped}`);

// friends.shift(); // Removes elements from the start of an array
// console.log(friends);

// //IndexOf - checks the index of a value (caplocks and type specific)
// //  -1 if not in array
// console.log(friends.indexOf("kari"));
// console.log(friends.indexOf("1990"));

// // includes - checks to array for an element and returns true/false
// //  type and case sensitive.
// console.log(friends.includes("maya"));
// console.log(friends.includes("gail"));
// console.log(friends.includes("Gail"));

// Object Literals:
// const person = {
//   firstName: "Ben",
//   lastNam: "Lamarche",
//   birthYear: 1990,
//   friends: ["kari", "mike", "gail", "Riley", "Maya"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} years old and ${
//       this.hasDriversLicense ? "have" : "do not have"
//     } a drivers license!`;
//   },
// };

// let interestedIn = prompt(
//   "What do you want to know about Ben? firstName, lastName, age, friends"
// );

// let interestedIn = "firstName";

// while (!person[interestedIn]) {
//   interestedIn = prompt(
//     "INVALID ENTRY: What do you want to know about Ben? firstName, lastName, age, friends"
//   );
// }
// // console.log(person.calcAge());
// console.log(person.getSummary());

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.6,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// function compareBMI(bmi1, bmi2) {
//   if (bmi1 > bmi2) {
//     return true;
//   }
// }

// console.log(
//   `${
//     compareBMI(mark.calcBMI(), john.calcBMI())
//       ? `${mark.firstName} ${
//           mark.lastName
//         } BMI of ${mark.calcBMI()} is higher than ${john.firstName} ${
//           john.lastName
//         } BMI ${john.calcBMI()}`
//       : `${john.firstName} ${
//           john.lastName
//         } BMI of ${john.calcBMI()} is higher than ${mark.firstName} ${
//           mark.lastName
//         } BMI ${mark.calcBMI()}`
//   }`
// );

// const ben = [
//   "ben",
//   "lamarche",
//   2022 - 1990,
//   "recruiter",
//   ["Kari", "riley", "maya"],
// ];

// for (let i = 0; i < ben.length - 1; i++) {
//   console.log(ben[i]);
// }

let bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length - 1; i++) {
  tips.push(bills[i] * 0.13);
  totals.push(bills[i] * 1.13);
  console.log(
    `The total bill was $${Math.trunc(totals[i])}. Which was $${
      bills[i]
    } plus a $${Math.trunc(tips[i])} tips`
  );
}
console.log(
  `The average bill total was $${calcAverage(
    totals
  )}. Which was an average bill of $${calcAverage(
    bills
  )} plus an average tip of $${calcAverage(tips)}`
);

function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return Math.trunc(sum / arr.length);
}
console.log("hi");

// TODO;
// FIXME;
// VIDEO;
// BUG;
