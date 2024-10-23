// Menstrukturkan Data dengan Set
// Terakhir, struktur data yang kita bahas adalah set.
// Set adalah struktur data yang spesial
// dibandingkan dengan map, array, dan object. Kenapa dikatakan spesial?

// Jawabannya adalah karena set tidak memiliki key dan indeks ketika menyimpan data.
// Selain itu, data yang disimpan di dalam set akan bernilai unik
// artinya tidak akan ada data yang duplikat. Spesial, bukan?

// ------------------------------------------------
// Membuat Data Set
// 
// Set dapat dibuat dengan cara menuliskan object constructor
// set seperti contoh berikut ini.

const set = new Set();

// mari kita buat contoh sederhana

const numbersInt = new Set([1, 2, 3]);
console.log(numbersInt)

// --------------------------------------------------------
// Menyimpan nilai Set
// 
// Method add hanya menerima satu argument sebagai nilai yang ingin
// kita tambahkan ke dalam set. Jika kita memberikan nilai yang sama,
// set hanya akan menyimpan sekali saja. Oleh karena itu,
// data yang ada di dalam set tidak akan terduplikat.

// buat data set yang kosong untuk ditambahkan
const addDataSet = new Set();

// tambahkan datanya dengan method add

addDataSet.add(1); // baris pertama
addDataSet.add(1); // baris kedua

console.log(addDataSet); // Output: Set(1) { 1 }

// dalam contoh kode diatas terlihat data set hanya menerima data yang baris
// pertama sebagai data set karena data Set tidak menerima data yang sama berulang kali


// ----------------------------------------
// Mengakses Nilai di Set
// 
// Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan (looping).
// Cara pertama adalah menggunakan keyword for seperti berikut ini.

// buat data sebuah data Set kosong
const playStation = new Set();

// add
playStation.add(4);
playStation.add(5);

// looping For
for (const view of playStation) {
    console.log(`playStation ${view}`)
}
// Output: playStation 4 playStation 5

// mengaksesnya dengan foreach
playStation.forEach((value) => console.log(value));

// ----------------------------------------------------
// Menghapus nilai Set
// 
// untuk menghapus nilai di set, gunakanlah method delete. 

const deleteDataSet = new Set();
deleteDataSet.add(2);
deleteDataSet.add('gigi');
console.log(deleteDataSet); // Set(2) { 2, 'gigi' }

// delete
deleteDataSet.delete('gigi');
console.log(deleteDataSet) // Set(2) { 2, 'gigi' }


// ++++ CATATAN ++++
// Ingat bahwa set tidak memiliki urutan atau index,
// jadi argumen yang dimasukkan ke dalam fungsi delete
// adalah nilai yang ingin dihapus, bukan index-nya.