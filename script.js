/* Practice exercise 3.1
 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
 "Apples."
 2. Check your list length in the console.
3. Update "Bread" to "Bananas."
4. Output your entire list to the console.*/

fruits=["milk","bread","apples"]
fruits[1]="bananas"
console.log(fruits.length)
console.log(fruits)

  // excercise 3.2
  let shoppingList = [];

// Add items to the shopping list
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

// Update "Bread" with "Bananas" and "Eggs"
shoppingList[1] = "Bananas";
shoppingList.push("Eggs");

// Remove and output the last item from the array
console.log("Removed item: " + shoppingList.pop());

// Sort the list alphabetically
shoppingList.sort();

// Find and output the index value of "Milk"
let indexOfMilk = shoppingList.findIndex(item => item === "Milk");
console.log("The index of 'Milk' is: " + indexOfMilk);

// Add "Carrots" and "Lettuce" after "Bananas"
shoppingList.splice(indexOfMilk + 1, 0, "Carrots", "Lettuce");

console.log(shoppingList);

      // EXCERCISE 3.3
    array=[1,2,3]
    nested_array=[array,array,array]
    console.log(nested_array[1][1])

// excercise-3.4
const myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver",
  isAutomatic: true,
  hasSunroof: false,
  mileage: 15000,
  owners: ["John", "Alice"],
  features: ["Air Conditioning", "Power Windows", "Bluetooth Connectivity"],
};
let propertyName = "color";
myCar[propertyName] = "Red"; 
propertyName = "forSale";
myCar[propertyName] = true; 
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
console.log("For Sale:", myCar.forSale);
  // excercise-3.5
const people = {
  friends: []
};
const friend1 = {
  firstName: "John",
  lastName: "Doe",
  ID: 1
};
const friend2 = {
  firstName: "Alice",
  lastName: "Smith",
  ID: 2
};
const friend3 = {
  firstName: "Bob",
  lastName: "Johnson",
  ID: 3
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);
  // chapter project
  const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// Remove the first and last items
theList.shift();
theList.pop();
// Add "FIRST" to the start of the array
theList.unshift("FIRST");
// Assign "MIDDLE" to the third index value
theList[2] = "MIDDLE";
// Assign "hello World" to the fourth item value
theList[3] = "hello World";
// Add "LAST" to the last position in the array
theList.push("LAST");
// Output the modified array to the console
console.log(theList);
    //  another question
const inventory = [];
const item1 = {
  name: "Laptop",
  model: "Model 123",
  cost: 800,
  quantity: 10
};
const item2 = {
  name: "Smartphone",
  model: "Model XYZ",
  cost: 500,
  quantity: 15
};
const item3 = {
  name: "Headphones",
  model: "Model ABC",
  cost: 50,
  quantity: 30
};
inventory.push(item1, item2, item3);
console.log("Quantity of the third item:", inventory[2].quantity);
const item4 = {
  name: "Tablet",
  model: "Model 456",
  cost: 300,
  quantity: 20
};
inventory.push(item4);
console.log("Updated inventory:", inventory);

              // CHAPTER 4
          // EX-4.1
 let myVariable = true;
console.log("myVariable:", myVariable);
if (myVariable) {
  console.log("The variable is true.");
}
if (!myVariable) {
  console.log("The variable is not true.");
} else {
  console.log("The variable is true when using an 'else' statement.");
}
myVariable = false;
if (myVariable) {
  console.log("The variable is true.");
} else {
  console.log("The variable is now false.");
}
//  excercise-4.2
const userInput = prompt("Please enter your age:");
const userAge = parseInt(userInput);
let message;
if (userAge >= 21) {
  message = "Confirm entry to the venue and the ability to purchase alcohol.";
}
else if (userAge >= 19) {
  message = "Confirm entry to the venue but deny the purchase of alcohol.";
}
else {
  message = "Deny entry.";
}
alert(message);

    //  excercise-4.3
const hasValidID = true; 
const x = hasValidID ? "You are allowed into the venue." : "Sorry, you cannot enter the venue.";
console.log(x);
     // ex-4.4
const randomValue = Math.floor(Math.random() * 6);
const userQuestion = prompt("Ask the Magic 8-Ball a yes or no question:");
let response;
switch (randomValue) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "Without a doubt.";
    break;
  case 2:
    response = "Reply hazy, try again.";
    break;
  case 3:
    response = "Don't count on it.";
    break;
  case 4:
    response = "My sources say no.";
    break;
  case 5:
    response = "Outlook not so good.";
    break;
  default:
    response = "Error: Invalid random value.";
    break;
}
const finalResponse = `You asked: "${userQuestion}"\nMagic 8-Ball says: ${response}`;
console.log(finalResponse);
    // excercise-4.5
let prize = prompt("Select a number between 0 and 10 to reveal your prize:");
prize = parseInt(prize);
let y = "My Selection: ";
switch (prize) {
  case 0:
    y += "Sorry, no prize for you!";
    break;
  case 1:
   y += "You win a free coffee!";
    break;
  case 2:
   y += "Congratulations, you've won a gift card!";
    break;
  case 3:
  case 4:
   y += "You win a T-shirt!";
    break;
  case 5:
  case 6:
  case 7:
   y += "You get a discount coupon!";
    break;
  case 8:
  case 9:
  case 10:
    y += "Wow! You've won a brand new car!";
    break;
  default:
   y += "Invalid selection. Please choose a number between 0 and 10.";
    break;
}
console.log(y);






