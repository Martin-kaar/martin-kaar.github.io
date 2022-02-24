let coffeeImg = document.getElementById("coffeeImg");
let currentDate = new Date();

function getProgrammingTime() {
  let outputP = document.getElementById("output");
  let localTimeString = currentDate.toLocaleTimeString();
  localTimeString = localTimeString.substring(0, localTimeString.length - 3);

  if (currentHours > 6 && currentHours < 12) {
    outputP.innerHTML = `Wait, it is ${localTimeString}. I like you, keep grinding.`;
  } else if (currentHours > 12 && currentHours < 13) {
    outputP.innerHTML = `Oh, its ${localTimeString}, thats lunchtime. Go get something to eat.`;
  } else if (currentHours > 13 && currentHours <= 24) {
    outputP.innerHTML = `It is ${localTimeString}, thats prime programming time.`;
  } else if (currentHours > 1 && currentHours < 6) {
    outputP.innerHTML = `It is ${localTimeString}. You are a real programmer. Keep up the hard work!`;
  }
}
