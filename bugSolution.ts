function greeter(person: string[]) {
  return "Hello, "+ person.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // This will work correctly