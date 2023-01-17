//Membuat custom tipe data

type Age = number;

let age: Age = 1;

type add = (val1: number, val2: number) => number;

const Add: add = (val1, val2): number => {
  return val1 + val2;
};

const result = Add(1, 3);

console.log(result);
