// 1.1 arrow functions
const sayHello = (name = "human") => "Hello " + name;
const nicolas = sayHello("Nicolas");
console.log(nicolas);

// button event with arrow function
// const button = document.querySelector("button");
// button.addEventListener("click", (event) => console.log(event));

// 1.2 Template Literlas
const sayHello2 = (name = "human") => `Hello ${name}`;
const nicolas2 = sayHello2("Nicolas");
console.log(nicolas2);

// 1.3 Object Destructuring
const human = {
  name: "Nico",
  lastName: "Serrano",
  nationality: "with i was korean",
  favFood: {
    breakfast: "sab",
    lunch: "doncas",
    dinner: "sanb + doncas",
  },
};
const {
  name: diffName,
  lastName,
  nationality,
  favFood: { breakfast, lunch, dinner },
} = human;

console.log(diffName, lastName, nationality);
console.log(breakfast, lunch, dinner);

// 1.4 Spread Operator
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = days + otherDays;
console.log(allDays);
// Mon,Tues,WedThu,Fri,Sat -> string

const allDays2 = [days + otherDays];
console.log(allDays2);
// [ 'Mon,Tues,WedThu,Fri,Sat' ] -> one array with string

const allDays3 = [days, otherDays];
console.log(allDays3);
// [ [ 'Mon', 'Tues', 'Wed' ], [ 'Thu', 'Fri', 'Sat' ] ]

const allDays4 = [...days, ...otherDays, "Sun"];
console.log(allDays4);
// [ 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]

const ob = {
  first: "hi",
  second: "hello",
};
const ab = {
  third: "bye bye",
};
const two = { ...ob, ...ab };
console.log(two);
// { first: 'hi', second: 'hello', third: 'bye bye' }

// 1.5 Classes
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const nico = new Human("nico", "serrano");
console.log(nico);
console.log(nico.name);

class Baby extends Human {
  cry() {
    console.log("Waaaaaa");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const myBaby = new Baby("mini", "me");
console.log(myBaby);
myBaby.cry();
myBaby.sayName();

// 1.6 Array map
const days2 = ["Mon", "Tues", "Wed", "Thu", "Fri"];
const smilingDays = days2.map((day, index) => `#${index + 1} 🤣 ${day}`);
console.log(smilingDays);

// 1.7 Array filter
const numbers = [
  2,
  24,
  6454,
  22,
  456,
  23,
  67,
  11,
  443,
  66,
  223,
  2,
  4,
  6,
  89,
  4,
  2,
  1,
];

const biggerThanFifteen = numbers.filter((number) => number > 15);
console.log(biggerThanFifteen);

let posts = ["Hi", "Hello", "Bye"];
posts = posts.filter((post) => post !== "Bye");
console.log(posts);

// 1.8 forEach includes push
posts = ["Hi", "Hello", "Bye"];
posts.forEach((post) => console.log(post));

posts.push("new");
console.log(posts);

let greetings = ["Hi", "Howdy", "Suup"];
if (!greetings.includes("Hello")) {
  greetings.push("Hello");
}

console.log(greetings);
console.log(greetings.reverse());
