export default function createReportObject(employeesList) {
  const allEmployees = employeesList.reduce((acc, { department, name }) => {
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(name);
    return acc;
  }, {});

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
