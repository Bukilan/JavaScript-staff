// //1
// function isPrime(num) {
//     let flag = true;
//     for (let i = 2; i<num; i++){
//         if((num % i) == 0){
//             flag = false;
//         }
//     }
//     return flag;
// }
//
// console.log(isPrime(111));

// //2
// function fractonial(num) {
//     let arr = [];
//     let total = 1;
//
//     for(let i = 1; i<=num; i++){
//         arr.push(i);
//     }
//
//     arr.forEach(foo = (num) => {total *= num});
//     return total;
// }
//
// console.log(fractonial(3));

// //3 // 0:0 1:1 2:1 3:2 4:3 5:5 6:8 7:13 8:21 9:34 10:55
// function fib(num) {
//     if (num <= 2 ){
//         if (num == 0) {return 0}
//         else {return 1}
//     }
//
//     let tmp1 = 1;
//     let total = 1;
//
//     for (let i = 2; i<num; i++){
//         let tmp2 = tmp1 + total;
//         tmp1 = total;
//         total = tmp2;
//     }
//     return total;
// }
//
// console.log(fib(7));

// //4
// function isSorted(arr) {
//     let flag = true;
//     for ( let i = 1; i < arr.length; i++){
//         if (arr[i]<arr[i-1]) {
//             return flag = false;
//         }
//     }
//     return flag;
// }
//
// let arr1 = [-14, -10, -1, 0, 123];
//
// console.log(isSorted(arr1));

//5 не знаю
// function filter(arr,foo=(n)=>{})
// {
//     arr.forEach((item,i)=>{if (item)}
// }

//6 тоже самое

// //7
// function myReverse(arr) {
//     let arr2 = [];
//     for(let i = arr.length-1; i>=0; i--) {
//         arr2.push(arr[i]);
//     }
//     return arr2;
// }
//
// let a = [1, 4, 7, 123];
// let b = myReverse(a);
// console.log(b);

// //8
// function myIndexOf(arr,value) {
//     for(let i = 0; i<arr.length-1; i++){
//         if (value === arr[i]) {return i}
//     }
//     return -1;
// }
//
// let a = [1,3,66,123,-1];
// console.log(myIndexOf(a,123123213));

// //9
// function isPalindrom(str) {
//     let str1 = str.split(' ').join('').toLowerCase();
//     let str2 = str1.slice(str1.length/2).split("").reverse().join("");
//     return str1.search(str2) !== -1;
// }
//
// let a = 'asd';
// console.log(isPalindrom(a));

// //10
// function missing(arr) {
//     arr.sort(compareFn);
//     // arr.forEach((item,i)=>{
//     //     if (item !== (i+1)){return i}
//     // });
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] !== i+1){return i+1}
//     }
//     return undefined;
// }
//
//
// function compareFn(a,b) {
//     if (a>b) return 1;
//     if (a<b) return -1;
// }
//
// let a = [2,1,3,5];
// console.log(missing(a));

//11
// function isBalanced(str){
//     let arr1 = str.match(/{/gi);
//     let arr2 = str.match(/}/gi);
//     return arr1.length === arr2.length;
// }
//
// let a ='foo { bar { baz } boo }';
// let b = 'foo { bar } }';
// console.log(isBalanced(a));
// console.log(isBalanced(b));