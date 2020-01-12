function multiply(multplier, ...args) {
  return args.map(arg => arg * multplier);
}

console.log(multiply(5, 1, 2, 3, 4, 5, 6));
