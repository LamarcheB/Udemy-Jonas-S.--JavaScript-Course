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

function youAreAmazing() {
  console.log("you're amazing!");
}

youAreAmazing();

function juiceMaker(apple, orange) {
  const juice = `Juice with ${apple} apples and ${orange} oranges`;
  return juice;
}

console.log(juiceMaker(3, 6));

const appleJuice = juiceMaker(5, 2);
console.log(appleJuice);
