// Function Expression
// Kita akan membahas mengenai function expression.

// Function expression terdiri dari dua kata, yaitu "function" dan "expression".
// Kita sudah mengenal function, begitu juga dengan expression.
// Lantas, function expression dapat kita artikan sebagai kode yang mengembalikan nilai function.
// Bagaimana bentuknya, ya?

// Kali ini, kita sudah mahir membuat function.
// Tata caranya adalah keyword function, identifier, parentheses untuk parameter, dan function body.
// Disadari ataupun tidak, sebetulnya kita sedang membuat, sebut saja, function statement.
// Artinya, kita memerintahkan JavaScript membuat function dengan statement tersebut.
//  Tentunya, ini tidak akan mengembalikan nilai apa pun.
// Nah, kita dapat membuat function dengan gaya expression layaknya membuat variabel seperti kode di bawah ini.

const result = 3 * 4;
console.log(result); // Output: 12

// Anda sudah penasaran, kan? Oke, mari kita mulai dengan mempelajari notasinya.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-d0fc42318b09f04a469b971c4bf8266820240801103952.jpeg

// Sebetulnya, sintaksis pembuatan function expression tidak jauh berbeda dengan function statement.
// Bahkan, tidak ada perbedaan apa pun dari segi fiturnya.
// Sebagaimana Anda lihat dalam gambar di atas, kita menyimpan function pada sebuah variabel.
// Kini variabel menjadi identifier bagi function.

// Lalu, bagaimana cara menjalankan function expression ini? Jawabannya,
// tidak ada yang berbeda dengan cara kita sebelumnya.
// Cukup sebut identifier dan diikuti dengan parentheses.

// Oke, mari ubah function pengonversi suhu kita menjadi function expression.

// ini adalah function expression 
const convertCelsiusToFarenheit = function (temperature){
    const hasilRumus = (9 / 5) * temperature + 32;
    return hasilRumus;
};

// simpan nilai pada parameter
const valueFarenheit = convertCelsiusToFarenheit(180);
console.log(`Hasil Konversi Celscius = ${valueFarenheit}°F`); // Output: 356°F

// Perbedaan lainnya dari function expression ialah tidak memiliki hoisting
// padanya sehingga kita tidak dapat memanggil atau menjalankan function ini sebelum dideklarasikan.


// Menjadi First-Class Citizen

// Jika ada bahasa pemrograman yang mengatakan bahwa function dapat diperlakukan layaknya variabel,
// function tersebut dinyatakan sebagai first-class citizen.
// Apa maksud dari diperlakukan mirip variabel?

// Pada JavaScript, function dapat kita jadikan sebagai nilai dan disimpan dalam variabel,
// nilai argumen function lain, mengembalikan nilai function dari suatu function, dsb.
// Mari kita lihat contohnya.

// function rumus
function rumus (a, b){
    return a * b;
};

// function utama yang akan menampung dua angka yang siap untuk di kalkulasi
// oleh function rumus
function kalkulasi (operasi, numA, numB){
    return operasi(numA, numB);    
};

const hasil = kalkulasi(rumus, 3, 4)
console.log(hasil); // Ouput: 12

// Kita memiliki program kalkulator sederhana.
// Berdasarkan contoh program di atas, kita punya dua function.
// Function rumus untuk melakukan operasi perkalian,
// sedangkan calculate sebagai function utama yang perlu dijalankan
// jika ingin melakukan proses aritmetika dua angka.

// Identifier function rumus kita jadikan sebagai nilai argumen pertama dari kalkulasi saat pemanggilannya.
// Artinya, parameter operasi akan bernilai function dari rumus.
// Oleh karena itu, kita bisa melakukan invoke (menjalankan) parameter tersebut layaknya function.

// Bagaimana dengan mengembalikan nilai function dari suatu function? 
// Mari kita lihat contohnya.

function multiplier(x){       // multiplier yang sudah di return itu = (x, num)
    return function(num){     // return diluar function atau menambahkan parameter ke multiplier
        return x * num;     // mengakalkulasi nilai x dan num dari multiplier
    };
};

const double = multiplier(2); // multiplier (x = 2 , num ?)
const triple = multiplier(3); // multiplier (x = 3 , num ?)

console.log(double(3)); // mencetak dari double(function(x, num)) => double(x = 2 * num = 3) Output: 6
console.log(triple(4)); // mencetak dari triple(function(x, num)) => triple(x = 4 * num = 3) Output: 12

// Function multiplier:

// Ini adalah fungsi yang menerima satu parameter x.
// Yang menarik, fungsi ini mengembalikan fungsi lain (disebut inner function).


// Inner function:

// Fungsi yang dikembalikan oleh multiplier menerima satu parameter num.
// Fungsi ini melakukan perkalian antara x (dari fungsi luar) dan num.


// Konsep closure:

// Inner function "mengingat" nilai x dari fungsi luar, meskipun fungsi luar sudah selesai dieksekusi.
// Ini memungkinkan kita membuat "fungsi khusus" untuk perkalian dengan angka tertentu.


// Penggunaan:

// const double = multiplier(2): Membuat fungsi baru yang selalu mengalikan dengan 2.
// const triple = multiplier(3): Membuat fungsi baru yang selalu mengalikan dengan 3.


// Hasil:

// double(3) akan mengembalikan 6 (2 * 3)
// triple(4) akan mengembalikan 12 (3 * 4)



// Cara mudah untuk mengingatnya:

// multiplier adalah "pabrik fungsi" yang membuat fungsi perkalian khusus.
// Setiap fungsi yang dihasilkan "mengingat" angka pengalinya.
// Kita bisa membuat banyak fungsi perkalian khusus tanpa menulis ulang kode.

// Mantap! Oke, mari coba kami rangkum mengenai function sebagai first-class citizen dalam beberapa keuntungan berikut.

// • Dapat disimpan sebagai nilai dalam variabel.
// • Dapat dikembalikan dari suatu function.
// • Dapat dikirimkan sebagai parameter bagi function lain.
// • Dapat disimpan dalam elemen array dan object literal.
// • Dapat memiliki method dan properties sendiri.
// ________________________________________________________________-

// Itulah pelajaran kita mengenai function expression dan function sebagai first-class citizen.
// Hal ini dapat mengubah cara kita membuat sebuah program.
// Berikutnya, kita akan membahas topik yang berbeda, tetapi masih punya relevansi dengan function expression.
// Ayo!