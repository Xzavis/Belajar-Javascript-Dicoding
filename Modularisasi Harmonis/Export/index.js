// Export
// 
// Export adalah keyword yang kita gunakan untuk melabeli suatu function/method/variable
// agar dapat diakses dari luar modul saat ini. Export terdiri dari dua jenis, 
// yaitu default export dan named export. Perhatikan contoh named export berikut ini.

// export const name = 'Xza';
// export const email = 'Xza@gmail.com';
// export const age = 18;

// cara diatas merupakan cara export yang belom di
// deklarasikan, caranya kita perlu mendeklarsikan
// variable tersebut yang sudah di export

// export {name, email, age} ;

// Hasilnya akan tetap sama. Variable yang sudah diekspor 
// (name, email, dan age) dapat digunakan di module lainnya. 
// Cara mengimpor named export adalah dengan menuliskan nilainya 
// di dalam sebuah kurung kurawal. Perhatikan contoh berikut ini.

// Hasilnya akan tetap sama. Variable yang sudah 
// diekspor (name, email, dan age) dapat digunakan di module lainnya. 
// Cara mengimpor named export adalah dengan menuliskan nilainya di 
// dalam sebuah kurung kurawal. Perhatikan contoh berikut ini.

import { namaUser, emailuser, ageUser } from "./otherExport1.mjs";

console.log(`Nama: ${namaUser} Email: ${emailuser} Umur: ${ageUser}`);
// Output: Nama: Carl Email: carl@gmail.com Umur: 22

// Variable name, email, dan age akan diimpor dengan named 
// import (yang sudah kita bahas di materi sebelumnya) sebelum digunakan.

// Terakhir, ada teknik yang disebut dengan default export. 
// Default export adalah cara kita untuk mengekspor minimal satu 
// function/method/variable di sebuah modul. Dengan menggunakan default export, 
// modul lain yang ingin menggunakan nilainya tidak perlu tahu spesifik namanya 
// karena secara default sudah ada function/method/variable yang diekspor. 
// Perhatikan contoh berikut ini.

import goodMorning from "./otherExport1.mjs";
import goodMorningPeople from "./otherExport1.mjs";  // kita tidak perlu menggunakan nilainya secara spesifik

goodMorning() // Good Morning People
goodMorningPeople() // Good Morning People

// Mengimpor nilai dari default export tidak membutuhkan kurung kurawal seperti contoh di atas. 
// Contoh di atas akan mencetak dua tulisan Good morning! di Terminal/Console. 
// Apakah dengan menggunakan default export kita hanya bisa mengekspor 
// satu fungsi, metode, atau variabel saja? Tentu tidak. 

// Secara teknis, kita bisa mengekspor lebih dari satu fungsi, metode, atau variabel, 
// tetapi hal ini tidak disarankan ketika menggunakan export default. Sebaiknya, 
// ketika menggunakan default export, satu modul satu nilai. Di JavaScript, 
// satu modul hanya bisa memiliki satu default export. 
// Tujuan dari hal ini adalah agar struktur kode lebih jelas 
// dan memudahkan navigasi ketika ingin mencari suatu modul.

// Selain itu, apakah kita bisa mengombinasikan antara default export dan named export? 
// Tentunya itu bisa, tetapi bukan best practices karena tidak konsisten. 
// Perhatikan contoh di bawah ini.

import sayHai, {sayGoodBye} from './say.mjs';

sayHai() // Hai, ini default export dari anotherfile.mjs
sayGoodBye() // Bye, ini named export dari anotherfile.mjs

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-1ef3995658689677877dd7fbe4fd8a1920240730110056.jpeg


// Named export cocok digunakan ketika ingin mengekspor banyak nilai dari satu modul. 
// Selain itu, named export mengharuskan kita untuk menulis nama function/method/variable 
// secara spesifik ketika mengimpornya. Menulis nama secara spesifik membuat 
// codebase menjadi konsisten.

