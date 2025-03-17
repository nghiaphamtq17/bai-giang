const students = [
    { id: 1, name: "An", age: 16 },
    { id: 2, name: "Bình", age: 15 },
    { id: 3, name: "Châu", age: 17 }
];

function convertArrayToObject(arr){
    return arr.reduce((item, student) =>{
        item[student.id] = {name: student.name, age: student.age};
        return item;
    },{});
}

console.log(convertArrayToObject(students));
