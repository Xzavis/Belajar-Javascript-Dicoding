// CONDISIONAL
// 
// Sepintas mungkin akan terpikir oleh Anda,
// apakah komputer selalu mengeksekusi
// kode dari atas ke bawah? Jawabannya adalah tidak.
// Tidak semua program berjalan lurus seperti jalan tol.
// Seperti contoh di kasus sebelumnya (memesan makanan secara daring),
// kode program tidak akan dieksekusi semuanya ketika dijalankan.
// Kode program akan menjadi dua alur atau lebih. Kode akan dieksekusi
// tergantung dari kondisi yang ditetapkan
// dan ini disebut dengan conditional flow.

// !! GAMBARAN ILUSTRASI KONSEP CONDISIONAL !!
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-4e8480b7e00125b1e3796e64fc56dde520240802174311.png

// PENGERTIAN
// Conditional flow adalah cara untuk menentukan apakah kode
// akan dieksekusi atau dilewatkan. Jika suatu kondisi terpenuhi,
// kode akan dieksekusi dan kode yang lainnya akan diabaikan.
// Kondisi ini ditentukan dari inputan yang diberikan oleh pengguna.

// CONTOH ANALOGI
// 
// jika anda berjalan-jalan disebuah mall dan anda
// merasa lapar secara tidak langsung anda akan berpikir sejenak
// dan mulai berpikir untuk mengamnbil sebuah keputusan.
// 
// apakah anda akan makan disebuah restoran didalam mall yang harganya
// cenderung lebih mahal atau anda berfikir lagi untuk makan makanan kaki lima
// atau bahkan makan dirumah saja?
// 
// semua pilihan itu memiliki suatu kondisi anda sekarang saat berfikir saat itu
// apakah anda sudah gajian atau sekarang sudah tanggal tua atau bahkan anda berfikir
// apakah dirumah masih menyimpan sebuah makan diatas meja?

// CONTOH FLOWCHART CONDISIONAL
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-d8fdb260968cc452c2e6a2a5c87157ca20240802104725.jpeg



// =========================================================================
// IF STATEMENT
// 
// Adakalanya kita membuat program yang hanya dijalankan ketika suatu kondisi terpenuhi.
// Untuk melakukan hal itu, kita bisa menggunakan if statement.
// If statement merupakan fundamental statement yang memungkinkan JavaScript
// untuk membuat keputusan apakah mengeksekusi program atau tidak.
// Bentuk umumnya adalah seperti berikut ini.

// if(Expression){
//     Statement
// }

// If statement akan mengeksekusi blok jika kondisi terpenuhi (true).
// Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi.
// Perhatikan contoh berikut ini.

// buat sebuah varible yang bernilai true
const gajian = false;

console.log('Jalan jalan di mall');

if(gajian){
    console.log('makan dimall restoran')
}; // Jika program didalam if bernilai true maka akan menampilkan : makan dimall restoran

console.log('pulang kerumah')

// Apakah if statement hanya bisa menangani satu cabang kondisi saja?
// Jawabannya adalah tidak. Kita bisa menggunakan keyword else untuk menambah
// pengecekan kondisi lainnya. Perhatikan contoh berikut ini.

// Program kelulusan

// buat wadah nilai
const nilai = 76;

// percabangan lebih besar >
if(nilai > 75){
    console.log('Selamat anda lulus');
} else{
    console.log('Maaf anda tidak lulus')
};
// Selamat anda lulus


// Pada contoh tersebut, kita menggunakan operator perbandingan.
// Variabel score akan menentukan apakah masuk ke dalam blok if atau else.
// Karena variabel score bernilai 80, blok yang ada di dalam if akan dieksekusi.
// Lalu, jika memiliki cabang kondisi lebih dari dua, Anda dapat mengecek beberapa
// kondisi sekaligus dengan menggabungkan else dan if.

// nilai matematika
const scoreMath = 90;

if (scoreMath > 99 ){
    console.log('Selamat anda mendapat nilai A+');
} else if (scoreMath >= 90){
    console.log('Selamat anda mendapat nilai A');
} else if (scoreMath >= 80) {
    console.log('Selamat anda mendapat nilai B');
} else if (scoreMath >= 75){
    console.log('Selamat anda mendapat nilai C');
} else {
    console.log('Maaf anda Belum lulus');
};
//  Output: Selamat anda mendapat nilai A

// PENJELASAN
// jika program berjalan javascript akan pertama kali
// akan mengecek apakah nilai scoreMath = 90 lebih dari 99 jika tidak 
// maka program akan turun untuk melakukan pengecekan ketahap selajutnya
// jika nilai scoreMath = 90 lebh dari sama dengan 90 artinya nilai bisa setara 90 
// maka program akan mencetak 'Selamat anda mendapat nilai A'

// ILUSTRASI PERCABANGAN IF ELSE
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-42e7e4a9f28485303f13ba58efe6a61320240802104725.jpeg

// ==============================================================================
// JavaScript menyediakan sintaksis yang lebih ringkas yaitu menggunakan ternary operator.
// Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan
// tanda tanya (?). 

// Ternary operator membutuhkan tiga operan dengan
// urutan seperti berikut:

// 1. Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
// 2. Ekspresi yang dieksekusi jika kondisinya benar.
// 3. Ekspresi yang dieksekusi jika kondisi salah.

// Berikut adalah bentuk dasar dari ternary operator.
// kondisi ? ekspresiJikaTrue : ekspresiJikaFalse

const hargaDiskon = 10000;
const kuponDiskon = true;
const diskon = kuponDiskon ? 1 : 0; // diskon = true jika true = 1, jika false maka = 0

console.log(`Anda mendapatkan Discount sebesar ${diskon * hargaDiskon}`) // diskon = 10000 X 1% = 10000;
// Output: Anda mendapatkan Discount sebesar 10000


// =========================================================
// SWITCH