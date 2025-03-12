class student {
    constructor(id, name, age, scores){
        this.id = id,
        this.name = name,
        this.age =age,
        this.scores =scores
    }

    diemtrungbinh(){
        let tong = this.scores.reduce((item, sum)=> item + sum, 0);
        return (tong / this.scores.length);
    }
}

// let students = [
//     new student(1, 'name1', 20, [8, 7, 9]),
//     new student(2, 'name2', 21, ),
//     new student(3, 'name3', 22, 10),
//     new student(4, 'name4', 23, 7)
    
// ]

// const a = new student (5, 'name5', 24, 10);

// students.unshift(a);

// console.log(students);

// function xoa(id){
//     students = students.filter(item => item.id !==id);
    
    
// }

// xoa(5);
// console.log(students);

// console.log(students.diemtrungbinh);

// tim hoc sinh co diem trung binh cao nhat

let nam = new student(10, 'nam', 10, [1, 1, 2]);
console.log(nam.diemtrungbinh());
 
