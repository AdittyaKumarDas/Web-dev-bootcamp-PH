const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function employeeSalary(employees) {
  let totalSalary = 0;

  for (let pay of employees) {
    let monthlyIncrement = (pay.experience * pay.increment) / 12;
    totalSalary += monthlyIncrement + pay.starting;
  }

  return totalSalary;
}

console.log(
  "Company One Month Employee Salary Expense is: " +
    Math.round(employeeSalary(employees))
);
