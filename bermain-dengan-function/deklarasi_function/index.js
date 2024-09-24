// Deklarasi Function

// pembuatan function kurang lebih sama seperti
// kita membuat sebuah variable, dan dapat 
// kita akses dengan mengunakan sebuah nama variable/function

// hal seperti inilah yang memang kita lakukan untuk
// menyimpan dan mengikat nilai dalam variable tersebut.

// nah nama function juga terikat dengan nama
// yang disebut dengan nama 'identifier'

// Dalam mendefinisikan function,
// kita perlu memahami anatominya lebih dahulu.
// Silakan perhatikan ilustrasi notasi berikut.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-7cec93c33ce6beee693d27a0b1a8350920240801095948.jpeg

// keyword "function" harus dipaparkan dengan jelas
// terutama dalam memberikan nama function tersebut
// setelah keyword tersebut diikuti dengan identifier atau nama function
// setelah itu kita juga harus memaparkan sebuah parentheses untuk mendifinisikan
// parameter yang di perlukan dalam function body .

// sebelum itu kita perlu memahami apa itu function body?
// Function body berisi sekumpulan statement atau perintah yang akan dieksekusi oleh interpreter. 
// Ia dibungkus dengan tanda kurung kurawal buka-tutup (curly braces). 
// Di sinilah kita dapat mengelompokkan kode-kode untuk melakukan penyederhanaan
// dan dapat dipanggil kapan pun developer butuhkan.
// Dengan kata lain, kelompok kode ini adalah tugas yang perlu dieksekusi
// dan diselesaikan oleh function ketika dipanggil. 

// jika kita sadari ketika menggunakan console.log()
// didalamnya terdapat tanda kurawal yang perlu kita terangkan pada nama variable
// yang kita ingin tampilkan bukan?
// yaa tentu sama dengan penerapan parentheses function yang akan kita pelajarari

// Mari kita ambil kasus sebelumnya.
// Kita tahu bahwa implementasi rumus untuk konversi 
// angka suhu berskala celsius ke fahrenheit seperti berikut.

// 9 / 5 * {angka_suhu_celsius} + 32;
// Agar kode lebih simpel dan bersih dan akan digunakan
// berulang kali maka kita perlu membungkus kode tersebut
// dengan function.

function konversiCelsiusKeFarenheit(temperatur) {
    const rumusFarenheit = 9 / 5 * temperatur + 32;

    console.log('Hasil Konvesi Celcius ke Farenheit:', konversiCelsiusKeFarenheit);
}

// membuat sebuah function sangat mudah bukan?
// sekarang mari kita panggil function tersebut untuk
// mendapatkan hasil angka konversi suhu tersebut
// dan jika kita menjalankan funtion tersebut tidak akan ada yang terjadi
