// 1
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }
// let Giorgi = new Person("Giorgi", "22");
// Giorgi.introduce();

// 2
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
//   static isAdult(age) {
//     return age >= 18;
//   }
// }
// let Giorgi = new Person("Giorgi", "22");
// Giorgi.introduce();
// console.log(Person.isAdult(Giorgi.age));

// 3
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     return `${this.name}, გამოსცემს რაღაც ხმას`;
//   }
// }
// class Dog extends Animal {
//   constructor(name,speak) {
//     super(name);
//     this.speak = speak;
//   }
//   spk() {
//     return `${this.name}  says: Woof!`;
//   }
// }

// let dog = new Dog( "iorki");
// console.log(dog.spk());

// 4

// class Button {
//   constructor(label, color) {
//     this.label = label;
//     this.color = color;
//   }
//   render(containerId) {
//     let button = document.createElement("button");
//     button.textContent = this.label;
//     button.style.backgroundColor = this.color;
//     let container = document.getElementById(containerId);
//     container.appendChild(button);
//   }
// }
// let buttonone = new Button("Click ", "red");
// let buttontwo = new Button("Submit", "yellow");
// buttonone.render("buttonBox");
// buttontwo.render("buttonBox");

// 5
// class Vehicle {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   describe() {
//     return `ეს არის ${this.brand} რომელიც მოძრაობს ${this.speed} კილომეტრ-საათი სიჩქარით`;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, speed, model) {
//     super(brand, speed);
//     this.model = model;
//   }

//   describe() {
//     return `ეს არის ${this.model} ${this.brand} რომელიც მოძრაობს ${this.speed} კილომეტრ-საათი სიჩქარით`;
//   }
// }

// let car1 = new Car("mercedes", 100, "c-class");
// let car2 = new Car("toyota", 110, "camry");
// let car3 = new Car("BMW", 120, "f30");

// console.log(car1.describe());
// console.log(car2.describe());
// console.log(car3.describe());

// 6
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }

//   static filterCategory(products, category) {
//     return products.filter((product) => product.category === category);
//   }
// }

// let product1 = new Product("mobile", 150, "electronics");
// let product2 = new Product("xbox", 400, "electronics");
// let product3 = new Product("t-shirt", 10, "clothing");

// let products = [product1, product2, product3];

// let electronicproducts = Product.filterCategory(products, "electronics");

// console.log("Electronics Products:");
// electronicproducts.forEach((product) => {
//   console.log(`${product.name} - $${product.price}`);
// });

// 7
// class Event {
//   constructor(name, date) {
//     this.name = name;
//     this.date = new Date(date);
//   }

//   isUpcoming() {
//     let today = new Date();
//     return this.date > today;
//   }
// }
// let event1 = new Event("tv-show", "2024-12-31");
// let event2 = new Event("film-festival", "2024-01-01");
// let events = [event1, event2];
// events.forEach((event) => {
//   console.log(`${event.name} is upcoming: ${event.isUpcoming()}`);
// });

// 8

// class Character {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }
// }
// class Warrior extends Character {
//   constructor(name, health) {
//     super(name, health);
//   }
//   attack(one) {
//     one.health -= 10;
//     console.log(
//       `${this.name} შეებრძოლა ${one.name}. ${one.name} სიცოცხლე არის ${one.health}`
//     );
//   }
// }
// let man1 = new Warrior("Giorgi", 100);
// let man2 = new Warrior("Sandro", 80);
// man1.attack(man2);
// man2.attack(man1);

// 9
// class Task {
//   constructor(title, completed = true, priority) {
//     this.title = title;
//     this.completed = completed;
//     this.priority = priority;
//   }
//   toggleCompleted() {
//     this.completed = !this.completed;
//     console.log(
//       `${this.title}  ${this.completed ? "შესრულებული" : "არაა შესრულებული"}.`
//     );
//   }
//   static filterPriority(tasks, priority) {
//     return tasks.filter((task) => task.priority === priority);
//   }
// }

// let task1 = new Task("სწავლა", true, "პრიორიტეტული");
// let task2 = new Task("ფილმის ყურება", true, "ნაკლებად პრიორიტეტული");
// let tasks = [task1, task2];
// let highPriorityTasks = Task.filterPriority(tasks, "პრიორიტეტული");
// highPriorityTasks.forEach((task) => {
//   console.log(`${task.title}  ${task.priority}`);
// });
// task1.toggleCompleted();
// task2.toggleCompleted();

// 10

// class Appointment {
//   constructor(title, date) {
//     this.title = title;
//     this.date = new Date(date);
//   }

//   isToday() {
//     let today = new Date();
//     return (
//       today.getDate() === this.date.getDate() &&
//       today.getMonth() === this.date.getMonth() &&
//       today.getFullYear() === this.date.getFullYear()
//     );
//   }
// }

// let appointment1 = new Appointment("ლექცის დღე", "2024-11-23");
// let appointment2 = new Appointment("კინოში წასვლა", "2024-11-23");

// console.log(`${appointment1.title} არის დღეს ${appointment1.isToday()}`);
// console.log(`${appointment2.title} არის დღეს ${appointment2.isToday()}`);
