"use strict";
// 1 task tushunishim bo'yicha o'zgaruvchilarga type berish kerak edi type berdim pastdagi xolatda yoki interface qilib ishlatish kerak bo'lsa deb interface orqali ishlatdim
// let fullName :string = "John Doe";
// let age:number = 30;
// let isStudent:boolean = true;
// let hobbies:string[] = ["Reading", "Gaming", "Coding"];
//
//   interface Person {
//     fullName: string;
//     age: number;
//     isStudent: boolean;
//     hobbies: string[];
//   }
//
//
//   const Person: Person= {
//     fullName: "Azamatjon",
//     age: 22,
//     isStudent: true,
//     hobbies: ["Reading", "Cooking", "Coding"]
// };
//
//
// function greet(person: string): string {
//     return `Hello, ${person}`;
//
//   }
//   console.log(greet(Person.fullName));
// 2 task array ichida nechta pozitive yani musbat son bor ekanini aniqlab beradi
// function countPositiveNumbers(arr: number[]) : number {
// let filteredArr = arr.filter(item => item > 0);
// let sum = filteredArr.length
// return sum;
// }
// let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10,12,3];
// console.log(countPositiveNumbers(arr));
// 3 task agar kiritilgan son 3 ga qoldiqsiz bo'linsa fizz agar 5 ga qoldiqsiz bo'linsa buzz agar   3 ga qoldiqsiz  va 5 ga qoldiqsiz bo'linsa fizzbuzz ko'rsatadi
// function fizzBuzz(n: number){
//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log(`${n} FizzBuzz`);
//     }else if (n % 3 === 0) {
//         console.log(`${n} Fizz`);
//     }else if (n % 5 === 0) {
//         console.log(`${n} Buzz`);
//     }else{
//         console.log(`${n} Not Fizz or Buzz`);
//     }
// }
// (fizzBuzz(15));
// 4 task array ichida barcha sonlarni yigindisini topadi
// function sumArray(arr: number[]) {
//     let sum = arr.reduce((a, b) => a + b, 0);
//     console.log(sum)
// }
// let arr:number[] = [1, 2, 3, 4, 5,6,7,8,9,10];
// sumArray(arr);
// 5 task nechta so'zdan tashkil topganini topib beradi va consolega chiqaradi
// function countWords(str:string):number {
//     let stringToArray = str.split(" ");
//     let wordCount = stringToArray.length;
//     return wordCount;
// }
// console.log(countWords("Azamatjon Ergashev Umarjon O'gli"))
// 6 task array ichidagi eng katta sonni qaytaradi
// function findMax(arr: Array<number>) : number  {
//   let maxNumber = Math.max(...arr);
//   return maxNumber;
// }
// let arr = [1, 5, 3, 8, 2, 9, 12, 4, 6,90, 7];
// console.log(findMax(arr));
// 7 task array ichidagi eng kichik sonni qaytaradi
// function findMin(arr: Array<number>){
//     let minNumber = Math.min(...arr);
//     return minNumber;
// }
// let arr = [ 5, 3, 8, 2, 9, 12, 4, 6, 90, 7];
// console.log(findMin(arr));
// 8 task array ichidagi sonlarni teskari tartibda  chiqaradi 
// function reverseArray(arr: Array<number>) {
//   let reverseArray = arr.reverse();
//   console.log(reverseArray)
// }
// let arr = [1, 2, 3, 4, 5,6,7,8,9,10];
// (reverseArray(arr));
// 9 task stringda berilgan so'zlarni har birini bosh xarfini katta xarflarda chiqarib beradigan funksiya qildim 
// function capitalizeWords(str:string) {
//   let words = str.split(" ");
//   let copitalizedWords = words.map(item=> item.charAt(0).toUpperCase() + item.slice(1));
//   let res = copitalizedWords.join(" ");
//   console.log(res)
// }
// let str = "this is a cat and I don't like any cats";
// (capitalizeWords(str));
