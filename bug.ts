function greeter(person: string) {
  return "Hello, "+ person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // This will cause a compile time error because the function expects a string and not an array of strings