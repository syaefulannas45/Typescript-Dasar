enum Gender {
  Male,
  Female,
  Unknown,
}
let jenisKelamin: Gender = Gender.Male;

//Merubah nilai enum
enum gender {
  Male = 1,
  Female = 2,
  Unknown = -1,
}
//Enum string
enum genderr {
  Male = "MALE",
  Female = "FEMALE",
  Unknown = "Unknow",
}

let genderrr: genderr = genderr.Female;

console.log(genderrr);
