// Code your solutions in this file

// task 1
function writeCards(arrayOfNames, event = "birthday") {
  let arrayOfGreeting = [];

  for (let name of arrayOfNames) {
    arrayOfGreeting.push(
      `Thank you, ${name}, for the wonderful ${event} gift!`
    );
  }

  return arrayOfGreeting;
}

let givenNames = ["Charlie", "Samip", "Ali"];
writeCards(givenNames, "birthday");

// task 2
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
