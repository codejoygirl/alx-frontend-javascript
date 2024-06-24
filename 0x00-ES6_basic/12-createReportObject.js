export default function createReportObject(employeesList) {
  const allEmployees = employeesList.reduce((acc, employee) => {
    const { department, name } = employee; // Destructure department and name
    acc[department] = acc[department] || []; // Create array if not exists
    acc[department].push(name); // Push employee name
    return acc;
  }, {});

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return { allEmployees, getNumberOfDepartments };
}
