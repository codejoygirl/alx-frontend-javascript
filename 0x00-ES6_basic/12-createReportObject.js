export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const employee of employeesList) {
    const { department } = employee;

    if (!allEmployees[department]) {
      allEmployees[department] = [];
    }

    allEmployees[department].push(employee.name);
  }

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return { allEmployees, getNumberOfDepartments };
}
