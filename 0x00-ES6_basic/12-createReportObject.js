export function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    }
  };
}

const engineeringEmployees = createEmployeesObject('engineering', ['John Doe', 'Guillaume Salva']);
const marketingEmployees = createEmployeesObject('marketing', ['Jane Smith', 'James Brown']);

const employeesList = {
  ...engineeringEmployees,
  ...marketingEmployees
};

const report = createReportObject(employeesList);

console.log(report.allEmployees);
console.log(report.getNumberOfDepartments());

