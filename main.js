"use strict";
//! Type Narrowing
//? Type Guard: 
// typeof
// instanceof
//? Union type
let data = "Muhammad Fasih";
data = 12;
// console.log(data);
// console.log(12.length);
//? typeof
// function isString(value: string | number): string {
// if(typeof value === "string"){
//     console.log("if block");
//     return value.toUpperCase();
// }else {
//     console.log("else block");
//     return value.toString()
// }
// }
// const myAns: string = isString(10);
// console.log(myAns);
//? instance of
// class A {
//     first(){
//         console.log("This is class A.");  
//     }
// }
// class B {
//     second(){
//         console.log("This is class B.");
//     }
// }
// function typeCheck(data: A | B){
//     if(data instanceof A){
//         data.first();
//     }else{
//         data.second();
//     }
// }
// const myClass1: A = new A();
// typeCheck(myClass1)
// const myClass2: B = new B();
// typeCheck(myClass2)
// type Circle = {
//     kind: "circle";
//     radius: number;
// }
// type Square = {
//     kind: "square";
//     length: number;
// }
// type Rectangle = {
//     kind: "rectangle";
//     length: number;
//     width: number;
// }
// type Shape = Circle | Square | Rectangle;
// function getArea(myShape: Shape): number {
//     switch(myShape.kind){
//         case "circle":
//             console.log("Circle");
//             return Math.PI * myShape.radius * myShape.radius;
//             //!     area of circle = Pi * radius ka square
//         case "rectangle":
//             console.log("Rectangle");
//              return myShape.length * myShape.width;
//         case "square":
//             console.log("Square");
//              return myShape.length * myShape.length;
//     }
// }
// const myCircle: Circle = {
//     kind: "circle",
//     radius: 5,
// }
// const myAnswer1:number = getArea(myCircle);
// console.log(myAnswer1);
// const mySquare: Square = {
//     kind: "square",
//     length: 10,
// }
// const myAnswer2:number = getArea(mySquare);
// console.log(myAnswer2);
// const myRectangle: Rectangle = {
//     kind:"rectangle",
//     length: 10,
//     width: 8,
// }
// const myAnswer3:number = getArea(myRectangle);
// console.log(myAnswer3);
// let myName: string = "Muhammad Fasih";
// myName = 10 as unknown as string;
// console.log(myName);
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [7,8,9];
// const myArray: number[][] = [arr1, arr2, arr3];
// const myArray = [[1,2,3],[4,5,6],[7,8,9]]
// //!     elements    1       2      3
// //!      index       0      1       2  
// console.log(myArray[1][1]);
//! 1 => 1 => number
//! 2 => 2 => number
//! 3 => 3 => number
//! 4 => [4,5,6] => number[]
//! 5 => [7,8,9] => number[]
// const myArray = [1,2,3,[4,5,6],[7,8,9]];
//!              1 2 3    4       5
// console.log((<number[]> myArray[3])[2]);
// function isString(data: string | number): data is string {
//     return typeof data === "string";
// }
// const myAnswer: boolean = isString(10)
// console.log(myAnswer);
// const myObject = {
//     name: "Muhammad Fasih",
//     rollNum: 10,
// }
// const myKey: keyof typeof myObject = "name";
// myObject[myKey]
// type A = {
//     name: string;
//     age: number;
//     rollNum: number;
// }
// const myObj: A = {
//     name: "Muhammad Fasih",
//     age: 20,
//     rollNum:123,
// }
// type B = keyof A;
// type C = keyof typeof myObj;
//! 1. initial value + a + b
//! first time
//? initialValue + Prevalue + CurrValue
//? PreValue = 80 (a)
//? CurrValue = 85 (b)
//! second time
//? Prevalue + CurrValue
//? PreValue = 165; (a)
//? CurrValue = 90; (b)
const myData = [80, 85, 90];
const myAns = myData.reduce((a, b) => { return a + b; }, 5);
console.log(myAns);
