const raining = true;
var cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

/* second test */
 //this is a comment
 console.log("----------------");

 var cold = false;
 if (cold) {
   console.log("Make sure you pick out a scarf!");
 } else {
   console.log("Short sleeves are fine.");
}

/* third test */
console.log("----------------");

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");