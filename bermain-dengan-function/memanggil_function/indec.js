// Melakukan deklarasi function tidak meminta JavaScript untuk menjalankannya.
// Lagi-lagi ini mirip dengan variabel,
// kita perlu menyebutkan identifier untuk memanggilnya.
// Itu artinya kita tinggal sebut namanya saja, dong? Benarkah? Markicob (mari kita coba).

function convertCelciusToFarenheit(Temperature){
    const temperatureFarenheit = (9 / 5) * Temperature + 32;
    console.log('Konversi temperature Celcius ke Farenheit:',`${temperatureFarenheit}°F` );
};


// kita panggil identifier function yang kita buat 
console.log(convertCelciusToFarenheit); // ouput: [Function: convertCelciusToFarenheit]

// Singkatnya, kita dapat mengirimkan input data ke function body agar dapat diproses

// Hasilnya tidak sesuai dengan ekspektasi, ya?
// Memang ada cara tersendiri dalam memanggil function.
// Berikut notasi pemanggilannya.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-9fa8c2d4d34d9901e919bf658cbb745420240801100542.jpeg

// Untuk menjalankan tugas function,
// sebutkan function identifier dan diikuti dengan parentheses. 
// Pemanggilan function ini akan menjalankan seluruh kode dalam function body 
// atau semua statement di antara curly braces ketika mendeklarasikan function.

// nilai temperature dalam Farenheit
const temperatureInCelcius = 90;

// kita akan menjalankan seluruh isi kode didalam 
// function yang kita buat

convertCelciusToFarenheit(temperatureInCelcius); // Output: Konversi temperature Celcius ke Farenheit: 194°F

// dalam menyebutkan sebuah nama funtion lalu diisi dengan nilai dari parameter tersebut
// yang berisikan sebuah nama nilai variable
// kita juga bisa menambahkan hanya dengan sebuah nilainya
convertCelciusToFarenheit(80); // Output: Konversi temperature Celcius ke Farenheit: 176°F

//  Namun, jika diperhatikan, kodenya seakan-akan seperti membalik ke baris-baris sebelumnya.
//  Padahal, kita tahu sebuah program berjalan secara sekuensial atau dari atas kebawah.

// Oke, mari kita telaah bersama-sama. Perhatikan ilustrasi berikut.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-f83544f260784139706557502bf6626520240801100542.jpeg

// Sebelum mengakhiri materi ini, ada hal yang perlu kita ketahui.
// Ia adalah fitur hoisting dalam JavaScript. 
// Fitur ini memungkinkan kita menulis kode pemanggilan sebelum kode pendeklarasian function. 
// Berikut contohnya.

selamatPagiDunia()
function selamatPagiDunia(){
    console.log('selamat pagi dunia');
};

// Output: selamat pagi dunia

// Lihat! Kita menjalankan function selamatPagiDunia sebelum kode function declaration.
// Sebetulnya, ini bukanlah praktik yang baik,
// tetapi kami ingin Anda mengetahui bahwa JavaScript mampu melakukan ini.
//  Jika ingin lebih dalam memahami fitur hoisting, Anda dapat menyimak artikel Hoisting dari MDN.

// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting