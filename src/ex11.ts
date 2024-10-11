// Create two interfaces `Flyable` and `Swimmable`. Each should have unique methods.
// Create a class `Duck` that implements both interfaces.
// Write a function `getCapabilities` that accepts an object with both interfaces and logs the duck's capabilities.
// Return type: void.

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Both extends Flyable, Swimmable{}

class Duck implements Both{
  fly() {
      console.log("Duck is flying");
  }
  swim() {
      console.log("Duck is swimming");
  }
}

function getCapabilities(duck: Both): void {
  duck.fly()
  duck.swim()
}

// Expected output:
getCapabilities(new Duck())
// Duck is flying
// Duck is swimming