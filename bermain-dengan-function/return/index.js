// Return Value

// Kita sudah belajar cara memasukkan nilai ke function sebagai input data.
// Ini dilakukan dengan menambahkan parameter function dalam parentheses.
// Selain ada data yang masuk, function juga bisa mengeluarkan nilai, lo.
// Ini kita sebut sebagai return value.

// intinya ada input ada output

// Saat kita menjalankan function JavaScript,
// mesin akan menjalankan seluruh kode dalam function body.
// Ada hasil yang akan dievaluasi. Secara bawaan (default),
// function akan mengembalikan undefined. Sudah ada contoh yang pernah kita lihat,

// const result = console.log("javascript keren!"); // Output: javascript keren!
// console.log(result); // Output: undefined

// Lihat! Ternyata variabel result berisi undefined.
// Hal ini karena memang method console.log tidak mengembalikan
// nilai apa pun dan JavaScript tidak menganggap ini sebagai error.

// Untuk memberikan kemampuan function mengembalikan nilai (return statement),
// kita gunakan kata kunci return dan diikuti nilai kembaliannya.
// Perhatikan notasinya pada gambar berikut.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-5df0cc3436468092bdd8b6c85f69a4d720240801103141.jpeg

function sumNumbers(a, b){
    const result = a + b;
    return result;
}

// Kita memiliki function dengan identifier sumNumbers.
// Ia menerima dua input, yaitu a dan b untuk diproses operasi penjumlahan.
// Agar function ini dapat mengembalikan nilai,
// kita tambahkan return statement beserta nilai yang diharapkan ingin keluar.

const result = sumNumbers(2, 4);
console.log('2 + 4:',result); //Output: 2 + 4: 6

// Hal berikutnya yang perlu kita ketahui sebagai developer aplikasi JavaScript
// adalah program dalam function akan terhenti jika eksekusi kode sudah mencapai return statement.

// Artinya, seluruh kode yang mengikuti statement ini tidak akan dijalankan. 

function generatePesan(){
    return "pesan baru 1"; // function akan berhenti disini dan tidak akan berjalan lagi
    console.log('pesan tidak sampai'); // ini tidak dianggap 
};

const hasil = generatePesan();
console.log(hasil); // Output: pesan baru 1

// mari kita buat buat function sedehana menggunakan return value

function convertCelciusToFarenheit(temperature){
    const rumus = 9 / 5 * temperature + 32;
    return rumus;
};

const resultConvert = convertCelciusToFarenheit(90);
console.log(`Hasil Konversi: ${resultConvert}°F`)

// Return statement menjadi fitur yang sangat hebat dalam function.
// Kita dapat mengembalikan suatu nilai dari hasil proses yang berjalan dan menyimpannya ke variabel.