// Spread Operator
// 
// Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan.
// Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array.
// Spread operator yang ditandai dengan sintaks tiga titik  (...)
// adalah fitur yang menarik dan membantu dalam pengelolaan object dan array.
// Dengan menggunakan spread operator,
// nilai object dan array dapat di-iterable menjadi beberapa element.

// --------------------------------------------
// Object 
// 
// Spread operator di object dapat dilakukan seperti berikut ini.
// 
// kita akan membuat sebuath 2 data object
const school = {NamaSekolah: 'SMKN6'};
const addressSchool = {alamat: 'Jln Prof Jokosutomo' }

// Lalu kita spread dengan menggunakan operator (... nama object) 
const spreadDataSchool = {...school, ...addressSchool }
console.log(spreadDataSchool);
// Output: { NamaSekolah: 'SMKN 6', alamat: 'Jln Prof Jokosutomo' }

// validasi setiap nila element
const validasiObjectSpread = {...school.NamaSekolah}
console.log(validasiObjectSpread) 
//  { '0': 'S', '1': 'M', '2': 'K', '3': 'N', '4': '6' }


// menggunakan operator spread memudahkan kita untuk menggabungkan dua data
// object, selain menggabungkan kita juga bisa menggunakannya untuk menyalin 
// data object lainnya. seperti ini!

const addressHome = {alamat: 'Jln Bangka 4 RT 20 Rw 03', patokan: 'Depan plang'};
const copyAndSpread = {...addressHome}
console.log(copyAndSpread) // Output: { alamat: 'Jln Bangka 4 RT 20 Rw 03', patokan: 'Depan plang' }


// ------------------------
// Spread Array
// 
// Selain di object, spread operator juga dapat digunakan
// di array seperti berikut ini.

// Versi Array yang menggunakan operator spread
const classA = ['RPL', 12];
const [Jurusan, Kelas] = classA; 
// console.log(`Jurusan: ${Jurusan}`,`Kelas: ${Kelas}`);

const fillInfoClass = [35, 30];
const [jumlahSiswaKelas, JumlahLaptop] = fillInfoClass;

// spread 2 data array jadi satu
const classInfo = [...classA, ...fillInfoClass,];
console.log(classInfo);
// [ 'RPL', 12, 35, 30 ]

// menyalin array dengan spread
const salinArray = ['copas'];
const copy = [...salinArray]
console.log(copy)
// [ 'copas ]

// valisai setiap karakter element
const validasiArraySpread = ['test'];
const [test] = validasiArraySpread;

const testA = [...test];
console.log(testA) 
// [ 't', 'e', 's', 't' ]