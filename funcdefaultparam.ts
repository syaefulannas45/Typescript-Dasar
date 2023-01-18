//Default Parameter

const fullName = (first: string, last: string = "Annas"): string => {
  return first + " " + last;
};

console.log(fullName("Syaeful", "Sheaa"));
