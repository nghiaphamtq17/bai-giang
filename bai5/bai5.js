//arraya
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [
//     {
//         name: 'nam',
//         age: 10
//     },
//     {
//         name: 'trang',
//         age: 12
//     },
//     {
//         name: 'ha',
//         age: 5
//     }
// ]

//forEach lăpj qua từng item con, nhưng k trả về giá trị

// arr1.forEach((item) => console.log("item", item));
// arr2.forEach(item=> console.log('ten: ', item.name , 'tuoi: ', item.age))

//map Tạo ra mảng mới với các phần tử được biến đổi
// const mapArr1 = arr1.map((item) => item + 5);
// console.log("mang moi", mapArr1);

// //filter Tạo ra mảng mới với điều kiện thoả mãn
// const flArr1 = arr1.filter((item) => item % 2 === 0);
// console.log("flArr", flArr1);

// //reduce
// const tinhTong = arr1.reduce((item, num) => item * num, 1);

// //some
// const some = arr1.some((item) => item > 10);
// console.log("some value", some);

// //every
// const ev = arr1.every((item) => item > 1);

// console.log("ev", ev);

// const arr1 = [1, 2, 3, 4, 5, 6];

// //push
// arr1.push(7);
// console.log('push', arr1);

// //pop
// arr1.pop()
// console.log('pop', arr1);

// //unshift
// arr1.unshift(10);
// console.log('unshift', arr1);

// // shif
// arr1.shift();
// console.log('shift', arr1);

// // splice
// arr1.splice(3,2,22,11,100,99);
// console.log('slice', arr1);

// //slice
// const newArr = arr1.slice(1,3);
// console.log('slice', newArr);

// const arr1 = [1, 2, 3, 2, 5, 6];

// //indexOf Tìm ra bị trí đầu tiên của item trong mảng
// console.log("indexOf", arr1.indexOf(2));

// // lastIndexOf ngược lại cua indexOf
// console.log("lastIndexOf", arr1.lastIndexOf(2));

// find Tìm phần tử đầu tiên thoả mãn điều kiện
// const newArr = arr1.find(item => item > 5);
// console.log("newArr", newArr);

// // findIndex Tìm vị trí thoả mãn
// const indexs = arr1.findIndex(item => item > 5)
// console.log('find index',indexs);
// console.log('value', arr1[indexs]);

// includes
// console.log('kiem tra', arr1.includes(3));

// // // sort
// console.log('sap xep', arr1.sort());

// // reverse
// // console.log('arr 1', arr1);

// console.log('dao nguoc', arr1.sort().reverse());

// const students = [
//   { name: "An", age: 20 },
//   { name: "Bình", age: 18 },
//   { name: "Châu", age: 22 },
// ];

// console.log(students.sort((a, b) => a.age - b.age));

const students = [
  { name: "An", age: 20 },
  { name: "Bình", age: 22 },
  { name: "Châu", age: 20 },
  { name: "Dũng", age: 23 },

];

// const result = {
//   20: [
//     { name: "An", age: 20 },
//     { name: "An", age: 20 },
//   ],
//   22: [{ name: "Bình", age: 22 }],
//   23: [{ name: "Dũng", age: 23 }],
// };

const nhom = students.reduce((prev, curent)=> {
    if (!prev[curent.age]) {
        prev[curent.age] = [];
    }
    prev[curent.age].push(curent)
    return prev
}, {})




