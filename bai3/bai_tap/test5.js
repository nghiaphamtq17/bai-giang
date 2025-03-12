const students = [
    { id: 1, name: "An", age: 16, scores: [8, 7, 9] },
    { id: 2, name: "Bình", age: 15, scores: [6, 8, 7] },
    { id: 3, name: "Châu", age: 17, scores: [9, 10, 8] }
];

const arr = students.filter(item => item.age > 15);
console.log("hoc sinh co tuoi > 15:", arr );


function dtb(scores){
    return scores.reduce((item, sum) => item + sum,0) / (scores.length);
}

const sapXep = students.sort((a, b) => dtb(b.scores) - dtb(a.scores));

console.log(sapXep);
