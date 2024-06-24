export default function createReportObject(employeesList) {
  const allEmployees = employeesList.reduce((acc, employee) => {
    const { department } = employee;
    acc[department] = acc[department] || [];
    acc[department].push(employee.name);
    return acc;
  }, {});

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return { allEmployees, getNumberOfDepartments };
}
