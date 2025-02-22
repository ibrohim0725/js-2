// indexOf / lastIndexOf (3 ta masala)

// 1-Topshiriq
// Berilgan massivda "apple" so‘zi mavjud bo‘lsa, uning indeksini toping. Agar yo‘q bo‘lsa, -1 qaytaring.
let arr = ["anor", "nok", "apple"];
let res = arr.indexOf("apple");
console.log(res);

// 2-Topshiriq
// Massivda eng birinchi va oxirgi 7 sonining indekslarini toping.
let arr1 = [1, 7, 2, 6, 4, 8, 7, 5];
let res1 = arr1.indexOf(7);
let res2 = arr1.lastIndexOf(7);
console.log(res1, res2);

// 3-Topshiriq
// Massivda "banana" so‘zi faqat bitta marta qatnashganligini indexOf va lastIndexOf yordamida aniqlang.
let arr2 = ["apple", "grape", "banana", "melon"];
let res3 = arr2.indexOf("banana");
let res4 = arr2.lastIndexOf("banana");
if (res3 == res4 && res3 != -1) {
  console.log("Banana faqat bir marta ishlatilgan");
} else {
  console.log("Banana sozi kop marta yoki umuman ishlatilamagan");
}

// . includes (2 ta masala)
// 4-Topshiriq
// Foydalanuvchi kiritgan son massivda mavjud yoki yo‘qligini includes yordamida aniqlang.
let arr3 = [21, 32, 54, 65, 62, 21, 10, 99];
let num3 = +prompt("son kiriting");
let res5 = arr3.includes(num3);
if (res5 == true) {
  console.log("siz kiritgan son mavjud");
} else {
  console.log("siz kiritgan son mavjud emas");
}

// 5-Topshiriq
// Massivda "watermelon" so‘zi mavjud yoki yo‘qligini tekshirib, mavjud bo‘lsa "Bor", aks holda "Yo‘q" degan natija qaytaring.
let fruits = ["melon", "carrot", "onion", "watermelon"];
let res6 = fruits.includes("watermelon");
if ((res6 = true)) {
  console.log("bor");
} else {
  console.log("yo'q");
}

//  reverse (2 ta masala)
// 6-Topshiriq
// Berilgan massivning elementlarini teskari tartibda chiqarib bering.
let arr4 = [1, 2, 3, 4, 5];
let result = arr4.reverse();
console.log(result);

// 7-Topshiriq
// Foydalanuvchi kiritgan stringni massiv shaklida harflarga ajratib, uni reverse yordamida teskarisiga aylantirib qaytaring.
let str6 = prompt("yozuv kiriting");
let mass8 = str6.split("");
let result1 = mass8.reverse();
console.log(result1);

// 8-Topshiriq
// Massivdagi har bir elementni ekranga chiqaruvchi funksiya yozing.
let mass1 = [1, 2, 3, 4, 5, "salom"];
mass1.forEach(function (value) {
  console.log(value);
});

// 9-Topshiriq
// Massivdagi har bir sonni 2 ga ko‘paytirib, natijani konsolga chiqaring.
let mass2 = [2, 4, 6, 8];
let sum = 0;
mass2.forEach(function (value) {
  sum = value * 2;
  console.log(sum);
});

// 10-Topshiriq
// Massiv ichidagi har bir stringni "Salom, " qo‘shimchasi bilan ekranga chiqaruvchi sikl yozing.
let sozlar = ["farg'ona", "rishton", "Toshkent"];
let sum1;
sozlar.forEach(function (value) {
  sum1 = value + " salom";
  console.log(sum1);
});

// 11-Topshiriq
// Massivdagi har bir elementga "!!!" qo‘shib, natijani ekranga chiqaring.
let elementlar = [115, "rishton", "Toshkent"];
elementlar.forEach(function (value) {
  console.log(value + " !!!");
});

// 12-Topshiriq
// Foydalanuvchi kiritgan massivdagi har bir raqamni kvadratga oshirib ekranga chiqaring.
let number = [2, 3, 4, 5, 6, 7, 8];
number.forEach(function (value) {
  console.log(value ** 2);
});

// 13-Topshiriq
// Massivdagi faqat musbat sonlarni ekranga chiqaring.
let number1 = [-12, 65, 1, 89, -9, 21, -12, 23];
number1.forEach(function (value) {
  if (value > 0) {
    console.log(value);
  }
});

// 14-Topshiriq
// Massiv ichidagi har bir elementning uzunligini ekranga chiqaring
let massiv = ["salom", "hi"];
massiv.forEach(function (value) {
  console.log(value.length);
});

// 15-Topshiriq
// Massivdagi har bir sonni index bilan birga konsolga chiqaring (Element: 5, Index: 2).
let arr5 = ["salom", 5, "hi", 8, "bye"];
arr5.forEach(function (value, index) {
  console.log(index, value);
});

// 16-Topshiriq
// Massiv ichidagi har bir elementni "Element: qiymat" shaklida ekranga chiqaring.
let arr6 = ["salom", "hi", 123, true];
arr6.forEach(function (value) {
  console.log(`Element ${value}`);
});

// 17-Topshiriq
// Massiv ichidagi har bir elementni kichik harflarga o‘tkazib ekranga chiqaring
let mass3 = ["Hello World", "Jinoyat va Jazo"];
mass3.forEach(function (value) {
  console.log(value.toLowerCase());
});

// 18-Topshiriq
// Massiv elementlari ichida "uz" bilan tugaydigan so‘zlarni ekranga chiqaring.
let mass4 = ["KUN.uz", "DARYO.uz", "Google.com"];
mass4.forEach(function (value) {
  if (value.endsWith("uz")) {
    console.log(value);
  }
});

// map (11 ta masala)
// 19-Topshiriq
// Berilgan sonlar massivini kvadratga oshirib, yangi massiv hosil qiling.
let num = [2, 6, 9, 4, 15];
let newNum = num.map(function (value) {
  return value ** 2;
});
console.log(newNum);

// 20-Topshiriq
// Har bir stringni katta harflarga o‘tkazib, yangi massiv yarating.
let str = ["uzbekistan", "stanford"];
let newStr = str.map(function (value) {
  return value.toUpperCase();
});
console.log(newStr);

// 21-Topshiriq
// Massiv ichidagi har bir sonni 3 ga ko‘paytirib, yangi massiv hosil qiling.
let num1 = [65, 1, 48, 89, 26];
let newNum1 = num1.map(function (value) {
  return value * 3;
});
console.log(newNum1);

// 22-Topshiriq
// Har bir stringning uzunligini qaytaradigan yangi massiv yarating.
let str1 = ["apple", "samsung", "xaomi"];
let newStr1 = str1.map(function (value) {
  return value.length;
});
console.log(newStr1);

// 23-Topshiriq
// Massiv ichidagi har bir sonning oldiga "Son: " qo‘shilgan yangi massiv yarating.
let num2 = [10, 20, 30, 40, 50];
let newNum2 = num2.map(function (value) {
  return "Son:" + value;
});
console.log(newNum2);

// 24-Topshiriq
// Massivdagi har bir stringning oxiriga "!!!" qo‘shilgan yangi massiv hosil qiling.
let fruits1 = ["olma", "behi", "nok"];
let newfruit = fruits1.map(function (value) {
  return value + "!!!";
});
console.log(newfruit);

// 25-Topshiriq
// Foydalanuvchi kiritgan massivdagi har bir elementning uzunligini ifodalovchi yangi massiv yarating.
let str2 = prompt("element vergul  bilan ajratib  kiriting");
let mass5 = str2.split(",");
let newStr2 = mass5.map(function (value) {
  return value.length;
});
console.log(newStr2);

// 26-Topshiriq
// Massiv ichidagi har bir elementni "Element: qiymat, Index: indeks" shaklida o‘z ichiga olgan yangi massiv hosil qiling.
let elements = ["olma", 10, "Toshkent", 20];
let newElements = elements.map(function (value, index) {
  return `Element ${value} index ${index} `;
});
console.log(newElements);

// 27-Topshiriq
// Massivdagi barcha sonlarni ikkiga bo‘lib, yangi massivga o‘tkazing.
let numbers = [10, 90, 982, 150];
let newNumber = numbers.map(function (value) {
  return value / 2;
});
console.log(newNumber);

// 28-Topshiriq
// Massiv ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartirib yangi massiv hosil qiling.
let mass6 = ["massiv", "filter", "map"];
let newMass = mass6.map(function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
});
console.log(newMass);

// 29-Topshiriq
// Massiv ichidagi sonlarni string shaklida chiqaradigan yangi massiv yarating.
let mass7 = [10, 50, 90, 60, 70, 40];
let newMass1 = mass7.map(function (value) {
  return String(value);
});
console.log(newMass1);

//  filter (11 ta masala)
// 30-Topshiriq
// Massiv ichidagi faqat musbat sonlarni ajratib yangi massiv yarating.
let arr7 = [12, -54, -10, 12, 18, -52];
let newNum3 = arr7.filter(function (value) {
  return 0 < value;
});
console.log(newNum3);

// 31-Topshiriq
// Massiv ichidagi faqat juft sonlarni ajratib, yangi massiv hosil qiling.
let arr8 = [12, 54, 13, 12, 17, 52];
let newNum4 = arr8.filter(function (value) {
  return value % 2 == 0;
});
console.log(newNum4);

// 32-Topshiriq
//Massivdan "apple" so‘zini olib tashlab yangi massiv yarating.
let meva = ["apple", "banana", "orange", "apple", "grape"];
let yangiMeva = meva.filter(function (value) {
  return value !== "apple";
});
console.log(yangiMeva);

// 33-Topshiriq
// Faqat 5 ta harfdan uzun so‘zlarni yangi massivga o‘tkazing.
let massiv1 = ["salom", "uzbekistan", "ananas"];
let massiv2 = massiv1.filter(function (value) {
  return value.length > 5;
});
console.log(massiv2);

// 34-Topshiriq
// Faqat "a" harfi bilan boshlanuvchi so‘zlarni ajratib yangi massiv hosil qiling.
let massiv3 = ["apple", "google", "amazon"];
let massiv4 = massiv3.filter(function (value) {
  return value.startsWith("a");
});
console.log(massiv4);

// 35-Topshiriq
// Faqat "gmail.com" bilan tugaydigan email manzillarini ajratib yangi massiv yarating.
let findGmail = ["johndoe@gmail.com", "bobmark", "jonejons@gmail.com"];
let gmail = findGmail.filter(function (value) {
  return value.endsWith("gmail.com");
});
console.log(gmail);

// 36-Topshiriq
// Massiv ichidagi 10 dan katta sonlarni ajratib, yangi massiv yarating.
let massiv5 = [1, 5, 62, 9, 25, 21, 12, 9, 650];
let mass = massiv5.filter(function (value) {
  return value > 10;
});
console.log(mass);

// 37-Topshiriq
// Massiv ichidan true qiymatga ega elementlarni ajratib yangi massiv hosil qiling.
let massiv9 = [true, false, 0, 1, "salom", true, null, undefined, true];
let newMassiv = massiv9.filter(function (value) {
  return value === true;
});
console.log(newMassiv);

// 38-Topshiriq
// Foydalanuvchi kiritgan qiymatdan katta bo‘lgan barcha sonlarni ajratib, yangi massiv yarating.
let numbers1 = [
  34, 67, 12, 89, 450, 23, 78, 560, 91, 10, 33, 72, 48, 5, 87, 290, 64, 17, 50,
  82,
];
let yourNumber = +prompt("son kirting");
let newMass2 = numbers1.filter(function (value) {
  return value > yourNumber;
});
console.log(newMass2);

// 39-Topshiriq
// Faqat "uz" bilan tugaydigan domen nomlarini ajratib yangi massiv hosil qiling.
let finduz = ["kun.uz", "daryo.uz", "news.com"];
let domein = finduz.filter(function (value) {
  return value.endsWith("uz");
});
console.log(domein);

// 40-Topshiriq
// Massiv ichidagi faqat string ma’lumot turiga ega elementlarni ajratib yangi massiv hosil qiling.
let typs = ["nol", 50, 40, "uzbek", "javaScript"];
let newtypes = typs.filter(function (value) {
  return typeof value == "string";
});
console.log(newtypes);
