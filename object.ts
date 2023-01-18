//Object
let user = {
  name: "syaeful",
  age: 15,
};

user = {
  name: "cirebon",
  age: 100,
};

//Cara lebih baik menggunakan type

type User = {
  name: string;
  age: number;
};

let users: User = {
  name: "Syaeful",
  age: 20,
};

console.log(users);
