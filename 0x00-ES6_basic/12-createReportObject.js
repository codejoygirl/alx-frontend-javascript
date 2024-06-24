export default function createReportObject(employeesList) {
  const allEmployees = {};

  // Populate allEmployees object using spread syntax
  for (let departmentName in employeesList) {
    allEmployees[departmentName] = [...employeesList[departmentName]];
  }

  // Define method property using ES6 method syntax
  const reportObject = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
