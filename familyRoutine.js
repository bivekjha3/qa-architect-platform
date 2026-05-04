"use strict";
// Every day in our family starts with numbers and names
// A "variable" is like a labeled tiffin box that holds a value
Object.defineProperty(exports, "__esModule", { value: true });
let babyMilkQuantity = 120;
let daughterAge = 5;
let daughterName = "Anaya"; // Change to your daughter's name
let isWeekend = false;
// A "function" is a recipe — ingredients go in, result comes out
function getMorningRoutine(milk, age, name, weekend) {
    let routine = "";
    if (weekend) {
        routine = "Today is weekend! " + name + " (age " + age + ") can sleep late. Baby needs " + milk + "ml milk.";
    }
    else {
        routine = "Weekday: Wake up " + name + " (age " + age + ") at 6:30 AM. Give baby " + milk + "ml milk.";
    }
    return routine;
}
// Call the recipe and print to screen
let todayMessage = getMorningRoutine(babyMilkQuantity, daughterAge, daughterName, isWeekend);
console.log(todayMessage);
//# sourceMappingURL=familyRoutine.js.map