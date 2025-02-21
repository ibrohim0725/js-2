// let arr = [2, 7, 5, 12];
// let sum = 0;
// arr.forEach(function (value, index) {
//   if (value % 2 != 0) {
//     sum += value;
//   }

// });
// console.log(sum);

// let arr=[1,2,3,4,5];  //[2,6,6,12,10]
// let res=arr.map(function(value,index){
//     return value *2;
// })
// console.log(res);

// let arr = [1, 2, "03", 4, "5"];
// let res = arr.filter(function (value, index) {
//   return typeof value == "string";
// });
// console.log(res);

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
// let arr3 = [21, 32, 54, 65, 62, 21, 10, 99];
// let num = +prompt("son kiriting");
// let res5 = arr3.includes(num);
// if (res5 == true) {
//   console.log("siz kiritgan son mavjud");
// } else {
//   console.log("siz kiritgan son mavjud emas");
// }

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
// let str=prompt('yozuv kiriting');
// let mass=str.split('');
// let result1=mass.reverse()
// console.log(result1);

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
let arr5=['salom',5,'hi',8,'bye'];
arr5.forEach(function(value,index){
    console.log(index,value);
    
})

// 16-Topshiriq
// Massiv ichidagi har bir elementni "Element: qiymat" shaklida ekranga chiqaring.
let arr6=['salom','hi',123,true];
arr6.forEach(function(value){
   console.log(`Element ${value}`);
   
})

// 17-Topshiriq
// Massiv ichidagi har bir elementni kichik harflarga o‘tkazib ekranga chiqaring
