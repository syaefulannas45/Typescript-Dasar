//public = bisa diakses di semua class / dari luar
// protected = hanya bisa diakses dari class tersebut dan kelas terusannya
// private = hanya bisa diakses dari class itu sendiri

export class User {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Kurang panjang";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this.email;
  }
}
let admin = new Admin("0838238", "Syaeful", 20);
admin.getName();
admin.getRole();
admin.setName("Shea");
admin.email = "syaeful@gmail.com";

//Static method
let admins = Admin.getRoleName;

console.log(admin);
console.log(admins);
