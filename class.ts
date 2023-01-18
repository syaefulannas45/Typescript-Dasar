export class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//Lebih singkat

export class Users {
  constructor(public name: string) {}
}

let user = new User("Syaeful");
let users = new Users("Syaeful");

console.log(user.name);
console.log(users.name);
