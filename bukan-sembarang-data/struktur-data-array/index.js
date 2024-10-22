// Struktur data Array

// Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
// Letak perbedaan array dengan object
// adalah data yang disimpan di dalam array terurut, sedangkan di object tidak terurut.
// Di array, kita bisa menambahkan nilai di antara data yang sudah ada.
// Data yang ada di array dapat diakses menggunakan pola indeks.
// Nilai yang disimpan di dalam array disebut dengan element.

// Array dapat menyimpan nilai dengan tipe data apa pun, seperti number, object, dan string.
// Oleh karena itu, array bersifat dinamis sehingga kita dapat menambahkan element baru di dalam array.
// Array juga merupakan sebuah object.
// Anda dapat memanfaatkan method typeof
// untuk melihat jenis tipe data dari array tersebut seperti berikut.

const dataArray = [1, 3];
console.log(typeof dataArray) // Output: object


// ----------------------------------------------------------
// Membuat Array

// Membuat Array dapat dilakukan dengan tiga cara di bawah ini.


// A.
// Menggunakan object constructor
// Array dapat dibuat dengan constructor new Array() seperti berikut.

const users = new Array();
console.log(users); // Output: [] 
// => array yang kosong atau tidak memiliki element 

const product = new Array(5);
console.log(product) // Output: [ <5 empty item> ] 
// => memiliki element tetapi tidak memiliki nilai

const egg = new Array('chicken boiler');
console.log(egg) // Output: [ chicken boiler ]  

const Milk = new Array('Ultra Milk', 'Diamond');
console.log(Milk[1]) // Output: Diamond 
// => Array object dengan indeks 1 = Diamond tanpa ada tanda kurung siku'[]'  

// logikanya seperti gambar dbawah ini
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-c843385fa75a9ecc48f5df2107642e1620240801133433.jpeg

// Pada array numbers, kita menambahkan angka 5 pada constructornya
// sehingga itu menjadi initial length dari array.
// Meskipun sudah menetapkan panjangnya 5,
// kita masih bisa menambahkan dan menghapus element di array numbers tersebut.



// B.
// Menggunakan Array.from
// Cara lainnya untuk membuat array adalah menggunakan Array.from. Contohnya seperti di bawah ini.

const susu = Array.from('UHT');
console.log(susu) // Output: ['U', 'H', 'T']

// Array.form merupakan method 
// untuk membuat array yang diperkenalkan di ES6.

// Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.

const indomie = new Array('goreng', 'rendang', 'aceh', 'soto');
const warmindo = Array.from(indomie);
console.log(`Selamat datang di Warmindo mau pesen indomie rasa apa? kita ada indomie: ${warmindo}`)
// Ouput: Selamat datang di Warmindo mau pesen indomie rasa apa? kita ada indomie: goreng,rendang,aceh,soto

// pelanggan memutuskan untuk memilih
const pelangganWarmindo = Array.from(indomie);
console.log(`Saya mau Indomie`,pelangganWarmindo[2]); // Output: Saya mau Indomie aceh


// C.
// Menggunakan Array Literal
// Terakhir, cara yang paling mudah, singkat, dan disarankan untuk membuat array
// adalah menggunakan object literals.
// Membuat array dengan literals lebih disarankan karena lebih sederhana dan mudah untuk dibaca.
// Contohnya seperti berikut ini.

// ini adalah Array litral hanya membuat variable yang berisi value Array = []
const TotalBuah = ['Apel', 'Pisang', 'Salak', 'Durian', 'Rambutan', 'Melon'];
const jumlahPembelian = [1,2,3,4,5,6,7,8,9];

console.log(TotalBuah);
// Output: ['Apel', 'Pisang', 'Salak', 'Durian', 'Rambutan', 'Melon']

console.log(`Saya pesan: ${TotalBuah[3]} ${jumlahPembelian[1]} buah`)

// output: Saya pesan Durian 2 buah


// bagaimana cara mengakses nilai array
// Untuk mengakses nilai di dalam array, gunakan tanda kurung siku [] yang di dalamnya berisi angka
// yang merupakan posisi dari nilai yang ingin diakses seperti berikut

const myArray = [27, 10 ,26];
console.log(myArray[0]); // Output: 27

// Ketika mengakses indeks di luar dari ukuran array akan menghasilkan undefined. Jadi, jangan sampai mengakses array melebihi ukurannya, ya!
console.log(myArray[3]) // Output: undefined



// ---------------------------------------------------------
// Manipulasi Array

// Kita sudah mengetahui cara untuk membuat array.
// Terkadang, program kita membutuhkan manipulasi array.
// Jika program Anda membutuhkan itu, tak usah khawatir karena manipulasi nilai
// pada array dapat dilakukan dengan menggunakan indexing dan method push.

// Menggunakan indexing
// Misalnya, kita memiliki sebuah array seperti berikut.

// isi array
const myNumbersArray = [4,5,62,47,12,42];
// mari kita ubah element ke-3
myNumbersArray[1] = 1999;
console.log(myNumbersArray); // before => [4,5,62,47,12,42]; after => [4,1999,62,47,12,42] di indeks ke 1 mulai dari 0


// menggunakan Push 
// Push adalah cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element terakhir.
// Misalnya kita memiliki array seperti berikut.

const myRandomNumbers = [42,25,9,4,25]
// Push
myRandomNumbers.push('push');

console.log(myRandomNumbers) // Output: [42,25,9,4,'Push']
// Nilai yang ditambahkan dengan method push akan selalu di element terakhir didalam Array


// -----------------------------------------------------
// Menghapus Element dan Data Array

// Data pada array dapat dihapus menggunakan keyword delete.
// Untuk menghapus data yang diinginkan,
// kita perlu mengetahui nilai indeksnya terlebih dahulu.
// Contohnya seperti di bawah ini yang akan menghapus data array pada indeks ke-1.

const myRandomWords = ['Me', 'I`m', 'Dude'];
delete myRandomWords[1];
console.log(myRandomWords) // Output: ['Me', < 1 empty item >, 'Dude']

// perlu diingat output yang dihasilkan tersebut belum sepenuhnya terdelet
// key delete hanya menghapus nilai dari element tersebut
// bagaimana cara untuk menghapus element dan datanya?
// Untuk melakukan hal itu dapat dilakukan dengan menggunakan method splice() seperti berikut ini.

myRandomWords.splice(1, 1);
console.log(myRandomWords) // Output: ['Me', 'Dude'];

// ! jika kamu hanya mengisikan sebuah input
// indeks pertama kamu akan kehilangan element dibelakangnya

myRandomWords.splice(1) // indeks ke-1
console.log(myRandomWords) // Output: ['Me'] => kita akan kehilangan element dibelakangnya

// ------ ATURAN ------
// Method splice membutuhkan dua parameter yaitu indeks dari
// element yang ingin dihapus dan jumlah element yang ingin dihapus.
// Pada contoh di atas, kita menghapus element indeks ke-1 dan jumlah element yang dihapus adalah 1.
// Lalu, bagaimana caranya kita ingin menghapus dua element dari array?

const myArrayAddress = ['Mampang', 'Bangka', 'Poncol'];

myArrayAddress.splice(1, 2); // indeks ke-1 menghaous 2 element
console.log(myArrayAddress) // Ouput: ['Mampang']

// macam-macam method array
// Terakhir, ada cara lainnya yaitu menggunakan method shift dan pop.
// Kekurangan dari kedua method ini adalah tidak sefleksibel delete dan splice
// karena shift hanya menghapus element pertama dan pop menghapus element terakhir.

// shift
const myArrayAddressA = ['Mampang', 'Bangka', 'Poncol'];
myArrayAddressA.shift(); // menghapus element pertama
console.log(myArrayAddressA); // ['Bangka', 'Poncol'];

// pop
const myArrayAddressB = ['Mampang', 'Bangka', 'Poncol'];
myArrayAddressB.pop(); // menghapus element terakhir
console.log(myArrayAddressB); // ['Mampang', 'Bangka'];


// Array Destructuring
// Destructuring digunakan untuk melihat isi dari array.
// Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku
// yang di dalamnya adalah nama variabel yang kita assign.
// Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.

const introduction = ['hello', 'Xza'];
// array destructuring
const [greeting, name] = introduction;
console.log(greeting) // Output: hello
console.log(name) // Output: Xza

// Array destructuring merupakan sebuah penamaan pada setiap element
// artinya kita bisa membuat sebuah nama tanpa harus
// menyebutkan indeks keberapa,
// dengan menggantikannya dengan sebuah kata bebas
// tetapi pengunaan array ini harus sesuai
// dengan urutannya sesuai dengan indeks didalam array

// penggunaan array destructuring ini hanya bisa digunakan
// ketika kita membuat element yang tidak bernilai dengan 
// null atau undefined.
// Ketika melakukan destructuring pada array yang bernilai null atau undefined
// akan menyebabkan error.


// Array Method 
// sebenarnya kita daritadi juga menggunakan sebuah array method 
// kita akan membahas beberapa method saja mengingat js memiliki banyak method
// bawaan yang memudahkan kita dalam proses pengelolaan data dan penggunaan
// jadi kita akan belajar Array Method yang sering digunak oleh
// para programer Javascript.

// Reverse
// Reserve adalaha method yang digunakan untuk membalikkan
// nilai array.method reverse() untuk membalikan array dengan 
// dibalik.

const brandHp = ['Vivo', 'Oppo', 'Realme', 'Xiomi', 'Samsung', 'Iphone'];
brandHp.reverse();
console.log(brandHp) // Output [ 'Iphone', 'Samsung', 'Xiomi', 'Realme', 'Oppo', 'Vivo' ]

// Element pertama array akan menjadi element terakhir akhir dan sebaliknya.
// Method reverse tidak akan membuat array baru, tetapi mengatur ulang elemen
// tersebut di dalam array yang sudah ada.


// sort 
// Sort adalah method yang digunakan untuk mengurutkan nilai array.
// Loh, katanya array sudah menyimpan data secara terurut kok masih
// perlu mengurutkan array menggunakan sort? Memang array sudah
// mengurutkan data sesuai dengan indeks-nya tetapi mengurutkan
// berdasarkan indeks saja belum cukup. 

// Terkadang, kita butuh untuk mengurutkan array berdasarkan
// kriteria tertentu sesuai kebutuhan aplikasi.
// Secara default, array akan diurutkan secara ascending.
// Contohnya seperti berikut.

const GOTY = ['black myth wukong', 'Elden ring', 'Warhammer 40K: Space Marine 2', 'Helldivers 2', 'Final Fantasy VII Rebirth'];
GOTY.sort();
console.log(GOTY);
// Output: ['Elden ring', 'Final Fantasy VII Rebirth', 'Helldivers 2', 'Warhammer 40K: Space Marine 2', 'black myth wukong']

// Secara default, method sort akan mengurutkan berdasarkan abjadnya.