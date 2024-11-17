// Menggunakan Module
// Sebelumnya, kita sudah tahu konsep modularisasi di JavaScript. 
// Anda mungkin sudah tahu juga cara menggunakan impor atau ekspor. Di materi ini, 
// kita akan coba menggunakan module di JavaScript.

// ==========================================
// Mengekspor Variable
// Misalnya, ada suatu module yang ditulis di berkas module.mjs. Di dalam berkas tersebut, 
// kita akan menulis satu variabel yang akan kita ekspor. 
// Untuk mengekspornya dapat berikut.

// export const name = 'Github';

// Selain mengekspor variable yang bertipe string, 
// kita juga dapat mengekspor variable yang bertipe array.

// Mengekspor Function
// Cara untuk mengekspor function tak berbeda jauh 
// dengan cara mengekspor variable.

// export function sayHi(name) {
//   console.log(`Hi, ${name}!`);
// }

// Agar tidak perlu menulis kata kunci export di setiap nilai yang ingin diekspor, 
// anda dapat mengekspor di akhir berkas seperti berikut.

// file module.mjs Nilai yang telah diekspor tersebut siap digunakan di mana pun.

// Mengimpor Variable
// 
// Tadi kita sudah mengekspor beberapa nilai dan function di berkas module.mjs. Sekarang, 
// tambahkan berkas baru bernama index.js yang akan kita gunakan untuk mengimpor 
// dan menggunakan variable dan function yang telah diekspor sebelumnya.

import {nama, favoriteFood, person} from './module.mjs';

console.log(`Nama: ${nama}`)
console.log(`Makanan Favorit: ${favoriteFood}`)
person('Xza');

// Selain mengimpor dengan named import, kita juga dapat mengimpornya menggunakan 
// import alias. Tenang saja, hasilnya akan tetap sama.

import {favoriteFood as food} from './module.mjs';

console.log(`makanan: ${food}`);

// Karena kita mengimpor seluruh nilai yang ada di module tersebut, 
// gunakanlah keyword * agar lebih ringkas.


// import seluruh module dengan istilah user
import * as user from './module.mjs';

console.log(user.nama);
console.log(user.favoriteFood);
person('Xza')
