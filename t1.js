// [ id, name, Department, Salary, Experience(years), LeavesTaken, ProjectsHandled ]

employee_data = [
  [101, "Arjun", "HR", 35000, 3, 12, 5],
  [102, "Beena", "IT", 60000, 6, 8, 12],
  [103, "Cyril", "Finance", 45000, 4, 15, 6],
  [104, "Diya", "IT", 75000, 8, 5, 15],
  [105, "Faiz", "Marketing", 30000, 2, 20, 3],
  [106, "George", "Finance", 50000, 5, 10, 8],
  [107, "Helen", "IT", 80000, 10, 7, 20],
  [108, "Iqbal", "HR", 40000, 3, 18, 4],
];



// 1️⃣ Find the employee with the highest salary.
let highestSalary = employee_data.reduce((acc, curr) =>
  acc[3] > curr[3] ? acc : curr
)
console.log(highestSalary[1]);
// 2️⃣ Find the employee with the lowest experience.
let lowestsalary=employee_data.reduce((acc,curr)=>
acc[4] < curr[4] ?acc:curr
)
console.log(lowestsalary[1])
// 3️⃣ List all employees from the IT department.

let itEmployees = employee_data.filter(emp => emp[2] === "IT")
// with onlu filter we cant print the names.it will display the whole array
.map(emp=>emp[1])
console.log(itEmployees);

// 4️⃣ Sort employees by salary descending.
let saldesc=employee_data.toSorted((a,b)=>b[3]-a[3])
.map(emp=>[emp[1],emp[3]])
console.log(saldesc)
// 5️⃣ Check if any employee has taken more than 18 leaves. 
let moreleaves=employee_data.some(emp=>emp[5]>18)
console.log(moreleaves);

// 6️⃣  employees who have handled more than 10 projects. -
let project=employee_data.filter(emp=>emp[6]>10)
.map(emp=>[emp[1],emp[6]])
console.log(project);

// 7️⃣ Find the average salary of all employees.-
let sum=employee_data.reduce((acc,curr)=>acc+curr[3],0)
let average= sum/employee_data.length
console.log(average)
// 8️⃣ Print details of employee named "Diya". -
let details=employee_data.find(emp=>emp[1] ==="Diya")
console.log(details)
// 9️⃣ List all employees with experience greater than 5 years.
let experience=employee_data.filter(emp=>emp[4]>5)
.map(emp=>[emp[1],emp[4]])
console.log(experience);

// 🔟 Calculate the total number of projects handled by all employees together. -
let totalproject=employee_data.reduce((acc,curr)=>acc +curr[6],0)
console.log(totalproject);
