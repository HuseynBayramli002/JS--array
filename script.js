//! Task6.1
// let arr = [1, 2, 4, 0];
// let arr_Clone = arr
// console.log(arr_Clone)


//! Task6.2
// let arr = [1, 2, 4, 0];
// function giveUp(num) {
//     let arr_Clon = [];
//     for (i = 0; i < num; i++) {
//         arr_Clon.push(arr[i])
//     }
//     console.log(arr_Clon)
// }
// giveUp(3)


//! Task6.3
// let arr = ["Red", "Green", "White", "Black"]
// console.log(arr.join(','))


//! Task6.4
// arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let maxSay = 0;
// let elem;
// for (i = 0; i < arr.length; i++) {
//     let say = 0;
//     for (j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             say++;
//         }
//     }
//     if (maxSay < say) {
//         maxSay = say;
//         elem = arr[i];
//     }
// }
// console.log(maxSay);
// console.log(elem);


//! Task6.5
// let arr = [1, 2, 3, 4, 5, 6];
// let hasil = 1;
// let cem = 0;
// for (i = 0; i < arr.length; i++) {
//     hasil = hasil * arr[i];
//     cem = cem + arr[i];
// }
// console.log(`Cem-${cem}
// Hasil-${hasil}`)


//! Task6.6
// let arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// let dublikat = [];
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j] && !dublikat.includes(arr[i])) {
//             dublikat.push(arr[i]);
//         }
//     }
// }
// console.log(dublikat)


//! Task6.7
// function removeElement(arr, elem) {
//     if (arr.includes(elem)) {
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] == elem) {
//                 arr.splice(i, 1)
//             }
//         }
//     }
//     console.log(arr)
// }
// removeElement([1, 2, 3, 4], 2)


//! Task6.8
// function returArr(arr, num) {
//     if (arr.length > num && num > 0) {
//         let silmeNum = arr.length - num;
//         for (i = 0; i < silmeNum; i++) {
//             arr.shift()
//         }
//     }else if(num < 0){
//         arr=arr.pop()
//     }
//     console.log(arr)
// }
// returArr([7, 9, 0, -2], -3)
// returArr([7, 9, 0, -2], 0)
// returArr([7, 9, 0, -2], 3)


//! Task6.9
// function swapCase(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             result += str[i].toLowerCase();
//         } else {
//             result += str[i].toUpperCase();
//         }
//     }
//     console.log(result)
// }
// swapCase('The Quick Brown Fox.')