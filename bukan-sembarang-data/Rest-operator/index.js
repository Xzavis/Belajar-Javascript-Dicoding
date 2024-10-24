// Rest Operator
// 
// Ketika bekerja dengan function, sering kali function menerima argument
// yang kemudian menjadi parameter. Ketika argument-nya masih sedikit,
// seperti satu atau dua belum menimbulkan masalah.
// Masalah terjadi ketika argument-nya sudah melebihi dua
// karena terlalu banyak argument pada function membuat kode menjadi tidak bersih
// (tidak sesuai prinsip clean code) sehingga sulit untuk dibaca dan di-maintenance.


// Solusinya adalah menggunakan rest operator.
// Rest operator memungkinkan function untuk menerima argument dalam bentuk array.
// Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter.
// Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...)
// sebelum parameter terakhir.

function bilanganBUlat(...integer){
    console.log(`Ini bilangan bulat: ${integer}`);
};
// kita panggil beserta argumentnya
bilanganBUlat(0,1,2,3,4,5)

// Penjelasan diatas 
// kita bisa memberikan argumnet yang tidak terbatas
// dari rest parameter dengan dengan operator (...)
// rest parameter akan menangani argument tersebut
// menjadi sebuah array dan meneruskannya ke function.

// Jika ada parameter lain sebelumnya, nilainya tidak menjadi
// bagian dari array yang dihasilkan rest parameter.

function hp (brand, ...transtion){
    console.log(`Brand flagship: ${brand}`);
    console.log(`Hp Transtion: ${transtion}`);
};

hp('Apple', 'Infinix', 'Techno', 'Itel');
// Ouput:
// Brand flagship: Apple
// Hp Transtion: Infinix,Techno,Itel

// Penjelasan!
// terlihat output yang dikeluarkan dari dua parameter
// yang berbeda, parameter pertama 'brand' hanya bisa menerima
// 1 argument dan tidak bisa lebih.
// parameter kedua 'transtion' yang menggunakan operator rest
// bisa menampung lebih dari saru argument itu sebabnya sisa argument 
// yang di input masuk kedalam rest parameter.

// Karena rest parameter menangani argument sebagai array, method array.
// length juga dapat digunakan pada rest parameter seperti berikut ini.

// kita akan membuat sebuha function untuk mengecek panjang argument
// array dengan method array.lenght dengan menggunakan rest parameter.

function testLengthParamRest(...testParamArray){
    // method array.length
    console.log(`Test panjang parameter array: ${testParamArray.length}`);
    console.log(`isi Parameter: ${testParamArray}`);
};

// panggil function
testLengthParamRest(2,3,4,2,6,3,6,2,3)
// Output:
// Test panjang parameter array: 9
// isi Parameter: 2,3,4,2,6,3,6,2,3



// Tak hanya method array.length, kita juga dapat menggunakan method array lainnya pada rest parameter.

// Selain pada parameter fungsi, rest operator juga kerap digunakan ketika kita melakukan
// destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array.

// kita buat array makanan favorit
const favoritFood = ['Nasi Goreng Gila', 'Kwitiau Goreng', 'Kwitiau Rebus', 'Ketoprak'];
// nama index bebas
const [first, second, ...rest] = favoritFood;

// cetak
console.log(favoritFood); // [ 'Nasi Goreng Gila', 'Kwitiau Goreng', 'Kwitiau Rebus', 'Ketoprak' ]
console.log(first); // [ 'Nasi Goreng Gila', 'Kwitiau Goreng', 'Kwitiau Rebus', 'Ketoprak' ]
console.log(second); // [ 'Nasi Goreng Gila', 'Kwitiau Goreng', 'Kwitiau Rebus', 'Ketoprak' ]
console.log(rest); // [ 'Nasi Goreng Gila', 'Kwitiau Goreng', 'Kwitiau Rebus', 'Ketoprak' ]

