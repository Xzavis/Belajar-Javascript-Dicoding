// Simulasi Asynchronous Proses
// Ada banyak sekali kejadian dari asynchronous process, terutama dalam web development. 
// Kita sudah mengetahui beberapa contoh dari masalah ini dalam materi sebelumnya. Selama 
// pembelajaran ini, kita belum pernah mempelajari dan memerintahkan mesin untuk mengemban tugas besar, 
// seperti berkoneksi dengan network. Langkah awalnya, kita akan memanfaatkan satu global function dari 
// JavaScript sebagai simulasi untuk menciptakan proses asinkron, yaitu setTimeout.

// setTimeout adalah salah satu dari sekian global function yang dapat menetapkan timer (pengatur waktu) 
// bagi function agar dieksekusi. Jadi, ada dua parameter wajib, yaitu nilai berupa function dan number 
// sebagai timer. Setelah timer sudah berakhir, seluruh cuplikan kode dalam function akan dieksekusi.

// Simpelnya, perhatikan contoh berikut.

const estimationTIme = 1_000; // 1 detik

setTimeout(() => { console.log(`GoodMorning`) }, estimationTIme)

// Apakah Anda sudah menjalankan kode di atas? Program di atas seharusnya cukup mewakili dalam memahami 
// cara kerja setTimeout. Tentunya Anda bisa membuktikan bahwa teks “Hello, world!” 
// akan muncul setelah satu detik, kan?

// Lalu, manakah sisi dari proses asinkronnya? Mari kita periksa contoh kasus lain. 
// Coba tebak hasil yang akan dikeluarkan dari cuplikan kode berikut.

// index.mjs
import { makeCoffe } from "./index.mjs";

console.log(`Saya memesan Kopi di Cafe`)

makeCoffe();

console.log('Pramusaji memberikan kopi pesanan.');
console.log('Saya mendapatkan kopi dan menghabiskannya.');

// Ekspektasi yang kita miliki adalah output dengan urutan berikut.

// Saya memesan kopi di kafe.
// Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik.
// Pramusaji selesai membuat kopi.
// Pramusaji memberikan kopi pesanan.
// Saya menghabiskan kopi dan menghabiskannya.
// Apakah ekspektasi sesuai dengan kenyataan? Silakan jalankan interactive code di atas untuk mengetahuinya.

// Sebagaimana hasil yang diberikan oleh mesin, perintah console.log dalam makeCoffee dijalankan belakangan. 
// Ini ditandai dengan teks “Pramusaji sedang membuatkan kopi kesukaan saya dalam 5 detik.” muncul di akhir. 
// Bagaimana bisa pramusaji memberikan kopi dan kita menghabiskannya jika kopinya saja masih dalam proses 
// pembuatan? Tentunya ini tidak sesuai dengan urutan kode (sequential order) dan beginilah perilaku 
// dari asynchronous process. Ingat! Ini kita simulasikan dengan setTimeout.

// Bagi kita yang terbiasa dengan sequential order, ini terlihat aneh. Namun, kita bisa membuktikan bahwa 
// proses yang memakan waktu lama (asynchronous) tidak melakukan blocking process dan kode-kode setelahnya 
// tetap dapat dijalankan sembari proses asinkron diselesaikan.

// Demi kemudahan membaca kode, Anda dapat memahami gambar berikut yang menunjukkan alur jalannya program.

//https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-3897815fb0e93977b6cc831e1059f1b720240731134720.jpeg


// Pada gambar di atas, kita menemukan ada sembilan langkah yang akan terjadi. Ada satu titik lagi yang ditandai 
// dengan “?”. Apakah maksudnya langkah kesepuluh? Belum tentu atau bahkan tidak. Karena berjalan secara asinkron, 
// kode tersebut dapat dijalankan kapan pun hingga proses asinkron selesai tanpa memedulikan urutan jalannya.

// Lalu, bagaimana solusinya agar kopi kita bisa diterima dan dihabiskan setelah pramusaji menyelesaikan 
// pekerjaannya? Kita bisa memanfaatkan callback dan Promise. Oke, mari kita pelajari callback dahulu dengan 
// lanjut ke materi berikutnya.

