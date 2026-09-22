

const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];
console.log("-------------------------");
// Print students who scored above 80
let score=students.filter(std =>std[3]>80)
.map(std=>std[1])
console.log(score);
console.log("-------------------------");
// Print all students in BCA course
let bca=students.filter(std=>std[2]=== "BCA")
.map(std=>[std[1],std[2]])
console.log(bca);
console.log("-------------------------");
// Print all students from Kochi
let kochi=students.filter(std=>std[4]==="Kochi")
.map(std=>[std[1],std[4]])
console.log(kochi);
console.log("-------------------------");

// Create a new array with only names and marks
let nameandmarks=students.map(std=>[std[1],std[3]])
console.log(nameandmarks)
console.log("-------------------------");
// Print total marks of all students
let totalmark=students.reduce((acc,curr)=>acc+curr[3],0)
console.log(totalmark)

console.log("-------------------------");
// Print average mark of students

let average=totalmark/students.length
console.log(average);


console.log("-------------------------");

//  Sort students by marks in descending order

let markdesc=students.toSorted((a,b)=>b[3]-a[3])
console.log(markdesc);

console.log("-------------------------");

// Find the highest scoring student
let highest=students.reduce((acc,curr)=>acc[3]>curr[3] ? acc:curr)
console.log(highest[1]);

console.log("-------------------------");
//  Print students who scored less than 70
let below70 = students
  .filter(student => student[3] < 70)
  .map(student => student[1]);

console.log(below70); 