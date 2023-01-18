//Generic Type
//Sebuah tipe data yang dinamis

function getData(value: any) {
  return value;
}
console.log(getData("Syaeful"));
console.log(getData(123));

//Contoh
function myData<t>(value: t) {
  return value;
}
console.log(myData("Syaeful".length));
console.log(myData(123));

//Untuk arrow func

// const arrowFunc = <T> (value : <T>) => {
//      return value
// }
