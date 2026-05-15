
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

function average(...nums) {
let total = 0
for(let num of nums){

console.log(total+=num);

}


}

average(10, 20, 30);




// ======================================
// 3️⃣ Faqat musbat sonlarni chiqaring
// ======================================

function positiveNumbers(...nums) {

}

positiveNumbers(-1, 5, -3, 8, 2);




// ======================================
// 4️⃣ Array destructuring
// ======================================

// Birinchi elementni first ga,
// qolganlarini others ga oling.

const fruits = ["apple", "banana", "orange", "grape"];

// kod yozing






// ======================================
// 5️⃣ Object destructuring
// ======================================

// title ni ajrating,
// qolganlarini info ga yig‘ing.

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,
  year: 2018
};

// kod yozing






// ======================================
// 6️⃣ Eng kichik sonni toping
// ======================================

function minNumber(...nums) {

}

minNumber(8, 3, 15, 1, 9);




// ======================================
// 7️⃣ Birinchi user va qolgan users
// ======================================

function users(firstUser, ...otherUsers) {

}

users("Ali", "Vali", "Sardor", "Bekzod");




// ======================================
// 8️⃣ Toq sonlarni chiqaring
// ======================================

function oddNumbers(...nums) {

}

oddNumbers(1, 2, 3, 4, 5, 6, 7);




// ======================================
// 9️⃣ Arraydagi birinchi 3 ta element
// ======================================

// first
// second
// third
// others

const numbers = [10, 20, 30, 40, 50, 60];

// kod yozing






// ======================================
// 🔟 Objectdan 2 ta property ajratish
// ======================================

// name va age ni ajrating,
// qolganlarini otherInfo ga yig‘ing.

const student = {
  name: "Hasan",
  age: 21,
  course: "Frontend",
  city: "Tashkent"
};

// kod yozing






// ======================================
// 1️⃣1️⃣ Ko‘paytma topish
// ======================================

function multiply(...nums) {

}

multiply(2, 3, 4);




// ======================================
// 1️⃣2️⃣ Stringlarni birlashtirish
// ======================================

// Rest orqali kelgan barcha so‘zlarni
// bitta gap qilib chiqaring.

function joinWords(...words) {

}

joinWords("I", "love", "JavaScript");




// ======================================
// ⭐ BONUS
// ======================================

// Faqat 5 dan katta sonlarni chiqaring.

function biggerThanFive(...nums) {

}

biggerThanFive(1, 6, 3, 10, 2, 8);