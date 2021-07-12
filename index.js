// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// for (var i = 1; i < 6; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 2000);
// }

// var a = 'abc';
// var b = 1;
// var c;
// console.log(c);
// var d = c + b;
// console.log(d);

// var a = 1;
// var b = '1';
// if (a == b) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// (a == b?console.log('true'):console.log('false'))

// var a = 10;
// var b = 10;

// function abc() {
//   if (a == 10) {
//     let b = a + 10;
//   }
//   console.log(b);
// }

// abc();

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 5566,
//   fullName: function() {
//     return person.firstName;
//   }
// };

// person.age = 30;
// var fun = person.fullName;
// console.log(person);

function emp(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
var e = new emp(103, 'Vimal Jaiswal', 20000);

document.write(e.id + ' ' + e.name + ' ' + e.salary);

console.log(e);
