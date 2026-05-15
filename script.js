// ======================================
// 🚀 REST OPERATOR VAZIFALAR
// VS CODE uchun tayyor
// ======================================

// ======================================
// 1️⃣ Barcha sonlarni chiqarish
// ======================================

// Function yozing.
// Rest operator orqali kelgan barcha sonlarni consolega chiqaring.

// function showNumbers(...nums) {
// console.log(...nums);

// }

// showNumbers(1, 2, 3, 4);

// ======================================
// 2️⃣ O‘rtacha qiymat topish
// ======================================

// Function yozing.
// Rest orqali kelgan sonlarning average qiymatini toping.

// function average(...nums) {
//   let total = 0;

//   for (let num of nums) {
//     total += num;
//   }

//   let avg = total / nums.length;

//   console.log(avg);
// }

// average(10, 20, 30);

// average(10, 20, 30);

// ======================================
// 3️⃣ Faqat musbat sonlarni chiqaring
// ======================================

// function positiveNumbers(...nums) {
//   let savat = [];
//   for (let num of nums) {
//     if (num > 0) {
//       savat.push(num);
//     } else {
//       console.log("musbat emas");
//     }

//     console.log(savat);
//   }
// }

// positiveNumbers(-1, 5, -3, 8, 2);

// ======================================
// 4️⃣ Array destructuring
// ======================================

// Birinchi elementni first ga,
// qolganlarini others ga oling.

// const fruits = ["apple", "banana", "orange", "grape"];
// const mevalar = [ first, ...others] = fruits
// console.log(first);
// console.log(others);

// kod yozing

// ======================================
// 5️⃣ Object destructuring
// ======================================

// title ni ajrating,
// qolganlarini info ga yig‘ing.

// const book = {
//   title: "Atomic Habits",
//   author: "James Clear",
//   pages: 320,
//   year: 2018,
// };
// const kitob = ({ title, ...info } = book);
// console.log(title);
// console.log(info);

// kod yozing

// ======================================
// 6️⃣ Eng kichik sonni toping
// ======================================

// function minNumber(...nums) {
//   let min = nums[0];
//   for (let num of nums) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   console.log(min);
// }

// minNumber(8, 3, 15, 1, 9);

// ======================================
// 7️⃣ Birinchi user va qolgan users
// ======================================

// function users(firstUser, ...otherUsers) {
//   console.log(firstUser);
//   console.log(otherUsers);

// }

// users("Ali", "Vali", "Sardor", "Bekzod");

// ======================================
// 8️⃣ Toq sonlarni chiqaring
// ======================================

// function oddNumbers(...nums) {
//   let savat = [];
//   for (let num of nums) {
//     if (num % 2 !== 0) {
//       savat.push(num);
//     }
//   }
//   console.log(savat);
// }

// oddNumbers(1, 2, 3, 4, 5, 6, 7);

// ======================================
// 9️⃣ Arraydagi birinchi 3 ta element
// ======================================

// first
// second
// third
// others

// const numbers = [10, 20, 30, 40, 50, 60];
// const numjonlar = ([first, second, third, ...others] = numbers);
// // kod yozing
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(others);

// ======================================
// 🔟 Objectdan 2 ta property ajratish
// ======================================

// name va age ni ajrating,
// qolganlarini otherInfo ga yig‘ing.

// const student = {
//   name: "Hasan",
//   age: 21,
//   course: "Frontend",
//   city: "Tashkent",
// };
// const yetimlar = ({ name, age, ...otherInfo } = student);
// console.log(name);
// console.log(age);
// console.log(otherInfo);

// kod yozing

// ======================================
// 1️⃣1️⃣ Ko‘paytma topish
// ======================================

// function multiply(...nums) {
//   let savat = 1;
//   for (let num of nums) {
//     savat *= num;
//   }
//   console.log(savat);

// }

// multiply(2, 3, 4);

// ======================================
// 1️⃣2️⃣ Stringlarni birlashtirish
// ======================================

// Rest orqali kelgan barcha so‘zlarni
// bitta gap qilib chiqaring.

// function joinWords(...words) {
//   let gap = "";
//   for (let word of words) {
//      gap += word + " ";
//   }
//   console.log(gap);
// }

// joinWords("I", "love", "JavaScript");

// ======================================
// ⭐ BONUS
// ======================================

// Faqat 5 dan katta sonlarni chiqaring.

// function biggerThanFive(...nums) {
//   let savat = [];
//   for (let num of nums) {
//     if (num > 5) {
//       savat.push(num);
//     }
//   }
//   console.log(savat);
// }

// biggerThanFive(1, 6, 3, 10, 2, 8);
