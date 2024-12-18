// Penanganan dengan Callback
// Salah satu metode untuk menangani asynchronous process adalah menggunakan callback. 
// Namun, kita harus paham dahulu makna dari callback. Apa itu?

// Callback adalah sebuah function yang dijadikan sebagai parameter bagi function yang lain. 
// Ini persis dengan hal yang pernah kita pelajari pada materi Function Expression. 
// Contoh callback yang pernah kita temui sebelumnya adalah memberikan function pada 
// setTimeout dalam parameter pertama. Setelah mencapai nilai timeout, callback akan 
// dibangkitkan atau dijalankan.

// Jadi, bagaimana implementasi callback dalam menangani proses asinkron? Perhatikan 
// hasil pengembangan contoh kode sebelumnya pada kode berikut.

import { makeCoffeePremium, sendCoffee } from "./makeCofee.mjs";

console.log('Saya memesan kopi di kafe.');

makeCoffeePremium(() => {
    sendCoffee(() => {
        console.log('Pramusaji memberikan kopi pesanan.');
        console.log('Saya mendapatkan kopi dan menghabiskannya.');
    })
})
// Pada kode di atas, kita memiliki beberapa perubahan. makeCoffee memiliki satu parameter yang akan menerima 
// function alias callback agar dijalankan setelah proses pembuatan kopi selesai. Function apa yang akan kita 
// masukkan? Function tersebut adalah tugas untuk pramusaji memberikan kopi kepada customer dan kemudian 
// customer menghabiskan kopinya. Hal yang pasti adalah kita berhasil memastikan bahwa suatu tugas benar-benar 
// dijalankan hanya ketika proses asinkron selesai. Inilah callback untuk penanganan asynchronous process.

// Mungkin ada yang berpikir bahwa proses pemberian kopi juga berupa asinkron dan kita masih bisa melanjutkan 
// tugas lain pada waktu itu. Pramusaji tentunya membutuhkan waktu untuk memindahkan kopi ke cangkir dan 
// mempercantiknya serta perlu waktu untuk berjalan menuju meja customer. Tepat! Mari kita sesuaikan kodenya 
// seperti kode berikut.



