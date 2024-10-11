"use strict";
// Create two interfaces `Developer` and `Manager`. Both have a `name` but only the `Manager` has a `team`.
// - Create a function `promoteToManager` that takes a `Developer` and a team name, and returns a new object that includes both roles.
// - Return type: an intersection type combining `Developer` and `Manager`.
function promoteToManager(dev, team) {
    const result = { ...dev, team };
    console.log(result);
    return result;
}
// Expected output:
promoteToManager({ name: "Alice", skills: ["TypeScript", "React"] }, "Frontend Team");
// { name: "Alice", skills: ["TypeScript", "React"], team: "Frontend Team" }
