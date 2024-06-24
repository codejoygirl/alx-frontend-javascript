// Function to create an employees object for a department
export function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

// Function to create a report object based on the employees list
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    }
  };
}

// Example usage
const engineeringEmployees = createEmployeesObject('engineering', ['John Doe', 'Guillaume Salva']);
const marketingEmployees = createEmployeesObject('marketing', ['Jane Smith', 'James Brown']);

// Combining both departments into one employees list
const employeesList = {
  ...engineeringEmployees,
  ...marketingEmployees
};

const report = createReportObject(employeesList);

console.log(report.allEmployees);
// Output: { engineering: ['John Doe', 'Guillaume Salva'], marketing: ['Jane Smith', 'James Brown'] }

console.log(report.getNumberOfDepartments());
// Output: 2

