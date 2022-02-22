let coffeeImg = document.getElementById("coffeeImg");
let currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

function getProgrammingTime(){
let outputP = document.getElementById("output");

if(currentHours > 6 && currentHours < 12){
    outputP.innerHTML = `Wait, it is ${currentHours}:${currentMinutes}. I like you, keep grinding.`;

}else if(currentHours > 12 && currentHours < 13){
    outputP.innerHTML = `Oh, its ${currentHours}:${currentMinutes}, thats lunchtime. Go get something to eat.`;

}else if(currentHours > 13 && currentHours <= 24){
   outputP.innerHTML = `It is ${currentHours}:${currentMinutes}, Thats prime programming time.`;
    console.log("test");
}else if(currentHours > 1 && currentHours < 6){
    outputP.innerHTML = `It is ${currentHours}:${currentMinutes}. You are a real programmer. Keep up the hard work!`;

}
}