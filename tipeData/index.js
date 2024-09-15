/*
String adalah tipe data yang merepresentasikan teks.

Data seperti nama, alamat, atau email adalah contoh data
yang dikelola dalam bentuk string. Dalam JavaScript, 
nilai string diapit oleh tanda kutip.
Ada tiga jenis tanda kutip yang dapat digunakan untuk
membuat nilai string, 
yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).
*/

// "Ini merupakan contoh string di JavaScript"
// 'Ini merupakan contoh string di JavaScript'
// `Ini merupakan contoh string di JavaScript`

// baris baru (karakter yang terbentuk ketika Anda menekan tombol Enter).
// Baris baru hanya bisa dituliskan secara langsung ketika Anda menggunakan backticks.
// Untuk tanda kutip tunggal atau ganda, kita harus menggunakan notasi \n.

// "Baris pertama.\nBaris kedua."
// 'Baris pertama.\nBaris kedua.'
// `Baris pertama.
// Baris kedua.`

// Backticks sering disebut juga sebagai template literals
// karena memungkinkan kita menyisipkan JavaScript expressions
// untuk membentuk nilai string menggunakan notasi ${}.

// contoh

const WaktuTahun = new Date().getFullYear();
const text = `Tahun sekarang: ${WaktuTahun}.`;

console.log(text); // Tahun sekarang

// Number

// Semua data berupa angka direpresentasikan dalam
// tipe data number, baik itu bilangan bulat maupun pecahan.
// Untuk membuat nilai number, kita cukup menuliskan angkanya
// secara langsung tanpa menggunakan tanda khusus.
// Berikut adalah contoh nilai number dalam JavaScript.

// 40 
// 3.14
// 5
// 3.333

// Selain angka normal, tipe data number juga memiliki nilai spesial,
// yaitu Infinity dan NaN. Nilai Infinity dihasilkan ketika kita melakukan 
// operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. 
// Contohnya kode di bawah ini.

// Contoh

const result = 50 / 0 ;
console.log(result); // output: infinite

// Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number.
// Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.

// contoh 
// kita akan membuat sebuah NaN yang tipe datanya number tetapi isinya adalah sebuah string 
 
const hasil = Number("aku string");
console.log(hasil);

// Boolean

// Boolean adalah tipe data yang hanya 
// memiliki dua nilai: true dan false.
// Boolean umumnya digunakan untuk 
// merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false.

// Untuk membuat nilai boolean, 
// kita bisa menuliskan true atau false secara langsung. 
// Contohnya seperti kode di bawah ini.

const benar = true;
const salah = false;

console.log(`benar: ${benar}, salah: ${salah}`);
console.log(benar,salah);

// Nilai boolean juga biasa diperoleh 
// dari hasil penggunaan operator perbandingan.


const perbandinganBenar = 5 < 2 ;
console.log(perbandinganBenar);

// Lebih dari: >
// Kurang dari: <


// Nilai Kosong

// JavaScript memiliki dua nilai spesial
// yang merepresentasikan nilai kosong,
// yaitu null dan undefined. 
// Keduanya digunakan untuk menunjukkan 
// ketiadaan nilai (the absence of something).

// Null banyak diadopsi dalam berbagai bahasa pemrograman sebagai tipe data standar
// untuk menunjukkan nilai yang tidak ada. Untuk membuat null, kita cukup menulis sintaksis null.

// Null
const pesan = null ;
console.log(pesan);

// undefined
const pesan2 = undefined;
console.log(pesan2);

// Perbedaan Null dengan undefined itu hampir sama yang memberdakanya 
// hanya perilakunya saja contoh

const kata1 = {first:"aku", last: null,};
const kata2 = {first:"aku", last: undefined};

console.log(JSON.stringify(kata1));
console.log(JSON.stringify(kata2));

// Properti yang diberi nilai undefined tidak akan tampak
// ketika diubah ke JSON karena 
// JSON tidak mendukung tipe data undefined.
// Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.

// latihan

const dataSiswa = {
    nama: "Xza",
    umur: 17,
    Kelas: {
        noKelas: "12A",
        jurusan: "PPLG"
    },
};

console.log(dataSiswa);
console.log(JSON.stringify(dataSiswa));
console.log(JSON.stringify(dataSiswa, null, 3));