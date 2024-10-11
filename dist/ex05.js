"use strict";
// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }
function generateSummary(users) {
    let count = 0;
    let totalAge = 0;
    users.forEach(user => {
        if (user.active === true) {
            count++;
            totalAge += user.age;
        }
    });
    const averageAge = count > 0 ? totalAge / count : 0;
    const result = { activeCount: count, averageAge: averageAge };
    console.log(result);
    return result;
}
// Expected output:
generateSummary([
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true }
]);
// { activeCount: 2, averageAge: 32.5 }
