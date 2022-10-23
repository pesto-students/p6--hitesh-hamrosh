// Examples of EXplicit Binding of this

// A example for .bind

let obj = {
  name: "Hamrosh",
  age: 39,
};
function show() {
  console.log(this.name, this.age);
}
const show2 = show.bind(obj);
show2();

// Second example of bind

function product(a, b) {
  return a * b;
}

const doDouble = product.bind(null, 2);

console.log(doDouble(122));

// .call

function sayHello(time, noofmails) {
  let full_name = [this.first_name, this.last_name].join();
  console.log(
    `Hello ${full_name}, Good ${time}, How are you Today?you have ${noofmails} unread mails today.`
  );
}

let names = [
  { first_name: "Hamrosh", last_name: "V" },
  { first_name: "Sameer", last_name: "M" },
  { first_name: "Raj", last_name: "T" },
];

sayHello.call(names[0], "Morning", 3);
sayHello.call(names[1], "Afternoon", 4);
sayHello.call(names[2], "Evening", 5);

// .apply
function sayHello2(time, noofmails) {
  let full_name = [this.first_name, this.last_name].join();
  console.log(
    `Hello ${full_name}, Good ${time}, How are you Today? you have ${noofmails} unread mails today.`
  );
}

let names2 = [
  { first_name: "Hamrosh", last_name: "V" },
  { first_name: "Sameer", last_name: "M" },
  { first_name: "Raj", last_name: "T" },
];

sayHello2.apply(names2[0], ["Morning", "2"]);
sayHello2.apply(names2[1], ["Afternoon", "5"]);
sayHello2.apply(names2[2], ["Evening", "6"]);
