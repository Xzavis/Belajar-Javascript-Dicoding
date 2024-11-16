// Import
// 
// JavaScript memungkinkan kita untuk menggunakan function/method dari modul
// lainnya dengan dua syarat: 

// Harus meng-import function/method tersebut.

// * Function/method tersebut sudah di-export (export akan dibahas di materi selanjutnya).

// * Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh
//   nama function/method/variable. Perhatikan contoh berikut ini.

import myFunction from "./another.js"; // import dulu beserta lokasi file modulnya

myFunction(); // Ouput: ini adalah function export default

// Pada contoh di atas, export default-nya adalah myFunction.
// Default import juga memungkinkan kita untuk 
// import function/method/variable yang namanya tidak harus sama
// dengan function/method/variable aslinya.
// Simak contoh berikut agar lebih terbayang.

import result from './another.js'; // nama import juga bisa bebas

result(); // Ouput: ini adalah function export default

// Apa pun nama yang kita tulis ketika mengimpor function dari berkas anotherFile.mjs
// di main.mjs, function myFunction akan tetap terimport.
// Begitulah cara kerja default import. Lalu, bagaimana ketika kita 
// ingin mengimpor dari suatu modul yang memiliki banyak 
// function/method/variable yang di-export?
// Jawabannya adalah kita dapat menggunakan named import.

// Berbeda dengan default import yang tidak memerlukan nama spesifik,
// named import memungkinkan kita mengimpor function/method/variable 
// tertentu berdasarkan namanya. Saat menggunakan named import, 
// pastikan nama fungsi yang ingin diimpor sesuai.

import { myFunction2 } from "./another2.js";
myFunction2();

// Ketika menggunakan named import, selain memastikan nama function sesuai, 
// kita juga akan menuliskan nama function yang diimpor dalam kurung kurawal {}. 
// Selain itu, kita juga dapat mengimpor lebih dari satu function/method/variable. 
// Perhatikan contoh berikut ini.


import {name, email, age} from './another3.js';

console.log(name);
console.log(email);
console.log(age);

// Apa yang dilakukan pada contoh di atas sebenarnya sah-sah saja. 
// Namun, ada cara lainnya yaitu menggunakan import *. 
// Import * dapat dilakukan ketika function/method/variable 
// yang ingin kita impor dari modul yang sama sangat banyak.

// Jika function/method/variable yang ingin kita import sangat banyak, 
// kita dapat menggunakan import *. 
// Perhatikan contoh berikut.

import * as variable from './another3.js';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

// Selain menggunakan tanda bintang (*), kita juga dapat menambahkan as variable (sebagai alias)
// untuk mengimpor seluruh variable yang berasal dari modul lainnya 
// (pada contoh anotherfile.mjs).

// Apa perbedaan antara import {} dan import *?

// import * memungkinkan kita untuk mengimpor seluruh module yang di export. Namun, 
// kekurangannya adalah sulit untuk dibaca karena tidak eksplisit, 
// sedangkan menggunakan import {} akan menjadi eksplisit sehingga kita 
// bisa tahu apa saja function/method/variable yang ingin di-import.

// Pada contoh sebelumnya, Anda telah melihat contoh penggunaan keyword as. 
// Keyword tersebut digunakan pada import yang disebut dengan import alias. 
// Import alias digunakan untuk mengubah nama dari function/method/variable yang berasal 
// dari modul lain menjadi nama yang kita inginkan. 
// Tujuan dari import alias adalah mempermudah ketika kita memiliki 
// nama function/method/variable yang sama di beberapa modul.

// Misalnya, Anda memiliki function dengan nama myFunction di dua modul berbeda, 
// yaitu user.mjs dan customer.mjs. Lalu, Anda ingin menggunakan kedua function 
// tersebut di satu modul yaitu main.mjs.

// Tanpa menggunakan import alias, 
// Anda akan mendapatkan error seperti berikut.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-83d2a2e697ce4008bb56a8935c50f02320240730105404.jpeg

// Error tersebut terjadi karena myFunction diimpor sebanyak dua kali. 
// Untuk mengatasi hal tersebut, gunakanlah import alias.
