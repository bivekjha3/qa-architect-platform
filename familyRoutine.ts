// Every day in our family starts with numbers and names
// A "variable" is like a labeled tiffin box that holds a value

let babyMilkQuantity: number = 120;
let daughterAge: number = 5;
let daughterName: string = "Anaya";   // Change to your daughter's name
let isWeekend: boolean = false;

// A "function" is a recipe — ingredients go in, result comes out
function getMorningRoutine(
  milk: number,
  age: number,
  name: string,
  weekend: boolean
): string {
  let routine: string = "";
  if (weekend) {
    routine = "Today is weekend! " + name + " (age " + age + ") can sleep late. Baby needs " + milk + "ml milk.";
  } else {
    routine = "Weekday: Wake up " + name + " (age " + age + ") at 6:30 AM. Give baby " + milk + "ml milk.";
  }
  return routine;
}

// Call the recipe and print to screen
let todayMessage: string = getMorningRoutine(
  babyMilkQuantity,
  daughterAge,
  daughterName,
  isWeekend
);
console.log(todayMessage);