// pengertian Function

// Apa itu function dan masalah yang dapat dipecahkan oleh function?
// Mari kita cari tahu bersama-sama!

// dibangku sekolah pasti kamu pernah mengenal tentang sekala suhu
// seperti celsius, fahrenheit, kelvin, dan reaumur?
// Misalnya, angka suhu berskala celsius diubah menjadi suhu berskala fahrenheit,
// diubah menjadi suhu berskala reaumur, atau lainnya. 

// Ada rumus yang menjadi panduan perubahannya.
// Kita ambil satu contoh rumus mengubah skala suhu celsius ke fahrenheit.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-84a2b0efede44fef3448d1bcc7c6937a20240801095045.png

// Bagaimana jika kita buat implementasi dalam JavaScript berdasarkan rumus di atas? 
// Anda pasti sudah jago membuatnya.
// Berikut hasilnya.

// 9 / 5 * {angka_suhu_celsius} + 32 ;
// sederhana, bukan? Bisa jadi itu hal yang super sederhana.

// Kita tinggal terapkan saja rumus di atas dalam program JavaScript.
// Misalnya, kita memiliki angka suhu 90 derajat celsius dan ingin diubah ke skala suhu fahrenheit.

const temperatureInCelsius = 90;
const temperatureInFarenheit =  9 / 5 * temperatureInCelsius + 32;

console.log(`hasil konversi Celsius ke Farenheit: ${temperatureInFarenheit}°F`);
// output: hasil konversi Celsius ke Farenheit: 194°F

// bagaimana jika perlu mengitung ke nilai yang berbeda dengan cara ini?
// yaa tentu saja dengan cara meng-copy pastenya secara berulang-ulang
// untuk mendapatkan jawabanya
// ini sangat tidak efektif dan membuat code semakin berat dan tidak efesien

// ketimbang dengan menggunakan dengan cara ini kita akan mengenal yang namanya Function
// apa itu function seperti namanya yaitu funsi dia akan membuat sebuah 
// bungkus kode yang dapat di panggil berulang-ulang tanpa harus membuatnya secara terus menerus
// dan function tersebut memberikan kita kebebasan dalam mengunakan kode tersebut
// mudah bukan ?

// sebelumnya kita juga sudah menggunakan sebuah function dalam tes-tes 
// kemarin Contohnya String, Number, parseInt, parseFloat, dsb.
// ni adalah implementasi nyata meskipun kita tidak bisa melihat
// pembuatan function ini karena sudah tersedia secara bawaan JavaScript.

// Pada materi selanjutnya, kita akan mempelajari function dalam JavaScript,
// mulai dari pembuatannya, pemanggilannya, dst.
// hingga dapat mencapai kode yang simpel dan bersih.
