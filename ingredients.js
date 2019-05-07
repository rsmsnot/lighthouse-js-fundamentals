var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("while loop:")

var repeat = 0;
while (repeat < ingredients.length) {
  console.log(ingredients[repeat])
  repeat++
}
// Write a for loop that prints out the contents of ingredients:

console.log("for loop:")

for (var num = 0; num < ingredients.length; num++) {
  console.log(ingredients[num]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("backwards:")

for (var i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}





