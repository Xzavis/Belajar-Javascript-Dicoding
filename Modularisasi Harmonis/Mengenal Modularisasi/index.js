// Mengenal Modularisasi
// 
// Program yang bertambah besar dan memiliki banyak fitur,
// kodenya pun akan menjadi kompleks.
// Idealnya, kode yang ditulis memiliki struktur yang jelas dan ringkas.
// Untuk menjaga kode tetap terstruktur dan ringkas ketika programnya semakin kompleks,
// butuh upaya yang besar. Salah satu cara agar kode program yang kompleks menjadi tetap
// terstruktur dan jelas adalah dengan menerapkan modularisasi. 


// Modularisasi adalah cara kita untuk memecahkan kode program yang kompleks
// dan besar menjadi bentuk yang lebih sederhana dan ringkas. 
// Implementasi dari modularisasi di JavaScript adalah dengan membuat
// berkas-berkas terpisah per bagian function/method yang disebut dengan modul.
// Kode yang ada di dalam Modul dapat digunakan oleh modul
// lainnya dengan cara export dan import.

// gambaran 
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-e8a6b3a18dc66aa3c9a8c681ffaedce020240730104435.jpeg

// Manfaat dari modularisasi adalah dapat menyelesaikan masalah terkait struktur
// dan kode program. Modularisasi dapat mempermudah kita untuk
// memahami keseluruhan struktur program sehingga gampang untuk berkolaborasi. 
// Modularisasi membuat struktur kode menjadi rapi, 
// memahami struktur dan membaca kode program yang sudah kompleks pun menjadi lebih mudah. 
// Selain itu, function/method yang ditulis dapat digunakan kembali di tempat lainnya (reusable). Misalnya, satu function dapat digunakan di dua fitur yang berbeda.

// JavaScript awalnya tidak memiliki konsep modularisasi.
// JavaScript hanya mengenal scope yang sama dari function/method/variable.
// Namun, semenjak adanya ECMAScript 2015, JavaScript bisa menggunakan konsep
// modularisasi dan dapat menggunakan keyword import dan export.  

// Import memungkinkan kita untuk memasukkan function/method/variable dari modul lain.
// Export memungkinkan kita untuk mengeluarkan function/method/variable ke
// modul lain agar dapat digunakan.

import { myFunction as userFunction } from "../Import/user";
import { myFunction as customerFuction } from "../Import/user";

// as digunakan sebagai istilah yang kita gunakan dengan istilah tersebut

userFunction();
customerFuction()

// Alih-alih menggunakan myFunction, kita mengubah namanya menjadi 
// userFunction dan customerFunction. Import alias juga meningkatkan readability 
// kode yang ditulis. Kita langsung tahu konteks dan maksud dari function/method/variable 
// yang diimpor contohnya userFunction yang berasal dari modul user dan konteksnya adalah user.

// Menggunakan alias saat mengimpor tidak hanya menghindari konflik seperti kasus sebelumnya, 
// tetapi juga meningkatkan keterbacaan kode. Dengan import alias, 
// kita dapat mengetahui konteks dan maksud dari function/method/variable yang diimpor. 
// Contohnya, userFunction berasal dari modul user dan konteksnya adalah user.




