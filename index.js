// EXAMPLE 1 - Update a Value in a Map using JavaScript

const map1 = new Map([
  ['name', 'bobby hadz'],
  ['age', 30],
]);

// 👇️ Map(2) { 'name' => 'bobby hadz', 'age' => 30 }
console.log(map1);

map1.set('name', 'alice');
console.log(map1.get('name')); // 👉️ "alice"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Conditionally update a value in a Map object

// const map1 = new Map([
//   ['name', 'bobby hadz'],
//   ['age', 30],
// ]);

// map1.forEach((value, key) => {
//   if (value === 30) {
//     map1.set(key, 31);
//   }
// });

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'age' => 31 }
// console.log(map1);

// console.log(map1.get('age')); // 👉️ 31

// ------------------------------------------------------------------

// // EXAMPLE 3 - Update an Array Value in a Map object

// const map1 = new Map([
//   ['name', 'bobby hadz'],
//   ['numbers', [1, 2]],
//   ['address', {country: 'Chile'}],
// ]);

// // Map(3) {
// //   'name' => 'bobby hadz',
// //   'numbers' => [ 1, 2 ],
// //   'address' => { country: 'Chile' }
// // }
// console.log(map1);

// map1.set('numbers', [...map1.get('numbers'), 3]);

// console.log(map1.get('numbers')); // 👉️ [1, 2, 3]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Update an Object value in a Map object

// const map1 = new Map([
//   ['name', 'bobby hadz'],
//   ['numbers', [1, 2]],
//   ['address', {country: 'Chile'}],
// ]);

// // Map(3) {
// //   'name' => 'bobby hadz',
// //   'numbers' => [ 1, 2 ],
// //   'address' => { country: 'Chile' }
// // }
// console.log(map1);

// map1.set('address', {...map1.get('address'), city: 'Santiago'});

// // 👇️️ {country: 'Chile', city: 'Santiago'}
// console.log(map1.get('address'));
