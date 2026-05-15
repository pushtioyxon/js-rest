// ======================================
// ! REST OPERATOR PRAKTIKA
// VS CODE uchun tayyor
// ======================================



// ======================================
// 1️⃣ Function ichida Rest operator
// ======================================

function fruits(...items) {
  console.log(items);
}

fruits("apple", "banana", "orange");



// ======================================
// 2️⃣ Yig‘indi chiqarish
// ======================================

function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  console.log("Yig'indi:", total);
}

sum(1, 2, 3);
sum(10, 20, 30);



// ======================================
// 3️⃣ Eng katta sonni topish
// ======================================

function maxNumber(...nums) {
  let max = nums[0];

  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }

  console.log("Eng katta son:", max);
}

maxNumber(5, 9, 1, 20, 7);



// ======================================
// 4️⃣ Array destructuring + Rest
// ======================================

const numbers = [10, 20, 30, 40, 50];

const [a, b, ...others] = numbers;

console.log(a);
console.log(b);
console.log(others);



// ======================================
// 5️⃣ Object destructuring + Rest
// ======================================

const user = {
  name: "Ali",
  age: 22,
  city: "Tashkent",
  job: "Developer"
};

const { name, ...info } = user;

console.log(name);
console.log(info);



// ======================================
// 6️⃣ Rest + Arrow function
// ======================================

const multiply = (...nums) => {
  let result = 1;

  for (let num of nums) {
    result *= num;
  }

  console.log("Ko‘paytma:", result);
};

multiply(2, 3, 4);



// ======================================
// 7️⃣ Birinchi element va qolganlari
// ======================================

const colors = ["red", "blue", "green", "black"];

const [firstColor, ...restColors] = colors;

console.log(firstColor);
console.log(restColors);



// ======================================
// 8️⃣ Function ichida ism ajratish
// ======================================

function students(first, ...others) {
  console.log("Birinchi student:", first);
  console.log("Qolganlar:", others);
}

students("Ali", "Vali", "Sardor", "Jamshid");



// ======================================
// 9️⃣ Objectdan bitta property ajratish
// ======================================

const car = {
  brand: "BMW",
  color: "black",
  year: 2024,
  price: 50000
};

const { brand, ...carInfo } = car;

console.log(brand);
console.log(carInfo);



// ======================================
// 🔟 Mini challenge
// ======================================

// Shu functionni tugating.
// Faqat juft sonlarni chiqaring.

function evenNumbers(...nums) {

}

evenNumbers(1, 2, 3, 4, 5, 6);



// ======================================
// 1️⃣1️⃣ Mini challenge
// ======================================

// Arraydagi birinchi 2 ta elementni ajrating,
// qolganlarini rest orqali oling.

const arr = [100, 200, 300, 400, 500];

// kod yozing




// ======================================
// 1️⃣2️⃣ Mini challenge
// ======================================

// Objectdan name ni ajrating,
// qolganlarini otherInfo ga yig‘ing.

const person = {
  name: "Sara",
  age: 19,
  country: "Uzbekistan",
  hobby: "Coding"
};

// kod yozing