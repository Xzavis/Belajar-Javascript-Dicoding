// Looping
// 
// Ketika Anda memprogram, ada banyak sekali instruksi yang Anda
// tulis untuk dieksekusi oleh komputer.
// Misalnya, Anda ingin mencetak semua nama makanan yang ada
// di list pada terminal/console seperti berikut.

const food = ['sate', 'ketoprak', 'siomay'];
console.log(food[0])
console.log(food[1])
console.log(food[2])

// hal tersebut memang memungkikan, tetapi tidak praktis
// karena kita terus mengulanginay berkali kali, bagaimana jika 
// ada 10 makanan atau bahkan 100 makanan, pasti akan merepotkan

// Untuk menghindari hal itu, perkenalkan inilah looping.
// Looping (perulangan) adalah statements yang memungkinkan
// kita untuk mengeksekusi kode yang sama secara berulang. 
// Di JavaScript terdapat banyak jenis
// perulangan, seperti for loop, for in, for of, while, dan do-while.

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-9c154de0aaaf77c5767a3d71bee20af620240802133651.jpeg



// ===========================================================================
// For
// For adalah cara looping yang paling umum dilakukan di JavaScript. Semenjak kehadiran ES6,
// for terbagi lagi menjadi beberapa jenis. Saat ini, for terdiri dari for loop, for in, for of.
// Simak penjelasan berikut ini.


// ------------------
// For Loop
// pertama kita akan membahasa tentang for loop
// dari for loop tampak seperti berikut ini.

// for (variable awal; test kondisi; increment){
    // sesuatu
// }

// Variabel awal adalah nilai variabel sebelum looping dilakukan. Test kondisi adalah evaluasi dari looping,
// jika bernilai false, looping akan berhenti. Increment adalah nilai variabel yang bertambah setiap
// looping dilakukan. Perhatikan contoh berikut ini.

for (let i = 0; i <= 5 ; i++){
    console.log(`Angka ke-${i} adalah ${i}`)
};

// Pada contoh di atas, nol merupakan nilai awal sebelum looping dijalankan.
// Pengecekan kondisi i <= 5 sebelum looping,
// ketika bernilai false, looping akan terhenti.
// Terakhir, i++ artinya adalah nilai i akan bertambah setiap looping dilakukan.
// Jika dijalankan, kode tersebut akan mencetak tampilan di terminal/console seperti berikut ini.
// Angka ke-0 adalah 0
// Angka ke-1 adalah 1
// Angka ke-2 adalah 2
// Angka ke-3 adalah 3
// Angka ke-4 adalah 4
// Angka ke-5 adalah 5

// ------------------------------------------
// For in
// 
// For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan
// iterasi ke seluruh data di dalam objek. Bahkan, ia juga dapat melakukan iterasi ke properti inheritance
// dari object seperti length. Berikut contoh penggunaan for in.

// data objek
const accountUSer = {name: 'Fulan', origin: 'Bandung', Year: 2006};
console.log(accountUSer.name)

// for in console.log
for (const properti in accountUSer){
    console.log(`${properti} bernilai ${accountUSer[properti]}`)
}
// Output:
// name bernilai Fulan
// origin bernilai Bandung
// Year bernilai 2006


// Sintaks dari for in tidak berbeda jauh dengan for loop.
// Dengan menggunakan for in kita tidak perlu menuliskan nilai variabel awal,
// test kondisi dan increment. For in akan melakukan perulangan item yang ada
// di dalam object (pada contoh object person). Pada contoh di atas,
// for akan melakukan looping semua item yang ada di dalam objek person. 

//-------------------------------------------------------
// for of
// 
// Kehadiran for of dimulai pada ECMAScript 2015 (ES6). For of berbeda dengan for in.
// For of lebih sederhana karena kita tidak perlu memikirkan property dan key.
// Perhatikan contoh berikut.

// data array 
const hewanUnggas = ['ayam', 'bebek', 'angsa']

// for of
for (const AnimalsItem of hewanUnggas){
    console.log(`hewan unggas ada ${AnimalsItem}`)
}
// Output:
// hewan unggas ada ayam
// hewan unggas ada bebek
// hewan unggas ada angsa

// ------------------------------------------------
// While
// perulangan di JavaScript tak hanya menggunakan for, tetapi ada cara lainnya yaitu while statement.
// While statement akan mengeksekusi statement ketika kondisinya bernilai truthy.
// Berikut struktur dari while statement.

// while(condition){
//    statement
// }

// Iterasi akan berjalan ketika kondisi bernilai true.
// Oleh karena itu, perlu untuk berhati-hati ketika mengecek kondisi tersebut.
// Akan terjadi infinite loop saat kondisinya bernilai true. 

// buat variable i
let i = 0;

// while
while (i < 5){
    console.log(`angka ke-${i} adalah ${i}`);
    i++;
}

// sama seperti contoh kode for 
// Kode di atas akan mencetak tampilan di terminal/console sebanyak 5 kali.
// Keunggulan dari while adalah ia tidak perlu tahu jumlah data yang akan di-looping. 

// While hanya peduli dengan kondisi yang kita berikan.
// Oleh karena itu, jangan lupa untuk mengubah kondisi tersebut,
// misalnya pada contoh kita memberikan kondisi i < 5. Ketika while dieksekusi,
// jangan lupa untuk mengubah variabel i agar kondisinya berubah menjadi true atau false.

// Contoh berikut adalah contoh ketika kondisi i < 5 selalu bernilai true sehingga menyebabkan
// infinite loop (perulangan tanpa henti).

// let i = 0;
// 
// while (i < 5) {
//   console.log(`Angka ke-${i} adalah ${i}.`);
// }

// Apa yang membuat infinite loop terjadi? Jawabannya adalah karena kita tidak mengubah nilai variabel
// i sehingga dia akan selalu bernilai 0 yang mana nol lebih kecil dari lima (kondisi akan selalu true). 

// ------------------------------------------
// Do-while
// 
// Sebenarnya, while dan do-while tidak berbeda jauh.
// Perbedaan mereka terdapat pada urutan pengecekan kondisi.
// While melakukan evaluasi kondisi di awal, 
// sedangkan do-while melakukannya di akhir.
// Berikut struktur dari do-while.

// do {
    // sesuatu
// } while(condition)

// Karena do-while melakukan evaluasi kondisi di akhir,
// blok yang ada di dalam do setidaknya akan dijalankan satu kali.
// Perhatikan contoh berikut ini.

let s = 0;

do{
    console.log(`Angka ke-${s} adalah ${s}`);
    s++;
} while(s > 3)

//Ouput: Angka ke-0 adalah 0

// terlihat jika nilai 0 lebih besar dari 3 maka hasilnya false
// meskipun nilainya false do-while akan mencetaknya terlebih satu kali
// dan dia akan berhenti

// ---------------------------------------------
// Control Statement
// 
// Ketika melakukan perulangan, ada yang namanya control statement.
// Control statement berfungsi untuk menghentikan eksekusi kode.
// Beberapa statement yang masuk ke dalam kategori control statement adalah break dan continue.
// Pada contoh yang diberikan sebelumnya, mungkin Anda sudah ngeh bahwa kita menggunakan break statement.
// Untuk lebih detail, ikuti pembahasan berikut ini.


// Break
// Break statement adalah cara kita untuk memberitahukan interpreter
// yang sedang mengeksekusi kode untuk berhenti dan langsung berpindah ke akhir
// dari percabangan atau perulangan. Perhatikan contoh berikut.

for (A = 1; A <= 10; A++){
    if(A > 5){
        break;
    }
    console.log(`Nilai ke-${A}`)
}

// Continue statement sama seperti break statement.
// Namun, alih-alih menghentikan eksekusi program, continue akan melanjutkan iterasi ke iterasi berikutnya.
// Continue statement hanya dapat digunakan di dalam body looping. Perhatikan contoh berikut ini.


// for (let i = 0; i < 10; i++) {
    // if (i === 5) {
        // continue;
    // }
    // console.log(i);
//   }

// 0
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9

// Looping akan berjalan seperti biasa. Namun, ketika nilai variabel i sama dengan 5, iterasi akan dihentikan dan lanjut
// ke iterasi berikutnya sehingga di terminal/console tidak akan menampilkan angka 5.
// Untuk mencoba hal itu, Anda dapat menjalankan interactive kode di atas.


// segitiga 
let a = 5;
let h = '';

for (let l = 1; l <= a; l++){
    // printing space
    for(let j = 0; j < a - l; j++){
      h += ' '
    }
    // printing star
    for(let k = 0; k < l; k++){
        h+= '*'
    }
    h += '\n'
}
console.log(`-----segitiga-----`)
console.log(h)



