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

let students = [
    new student(1, 'name1', 20, 8),
    new student(2, 'name2', 21, 9),
    new student(3, 'name3', 22, 10),
    new student(4, 'name4', 23, 7)
    
]

console.log(localStorage.getItem(students));