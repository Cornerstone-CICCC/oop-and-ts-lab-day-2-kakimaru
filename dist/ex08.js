"use strict";
// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.
function updateCompany(company, updates) {
    const updatedEmployees = company.employees.map((employee, index) => {
        if (updates.employees && updates.employees[index]) {
            return { ...employee, ...updates.employees[index] };
        }
        return employee;
    });
    return {
        ...company,
        ...updates,
        employees: updatedEmployees
    };
}
// Expected output:
const company = { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Developer", salary: 100000 }] };
updateCompany(company, { employees: [{ name: "Alice", role: "Senior Developer" }] });
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }
