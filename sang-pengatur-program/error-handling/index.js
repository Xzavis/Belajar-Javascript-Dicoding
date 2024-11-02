// Error Handling
// 
// Sepandai-pandainya tupai melompat, akan jatuh juga.
// Sebaik apa pun kita menulis program, suatu saat akan terjadi error.
// Error yang terjadi bisa berasal dari
// expected error (error yang terduga) dan
// unexpected error (error yang tidak terduga).

// Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun.
// JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling.
// Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan
// oleh kesalahan syntax atau error lainnya.

// =====================================================
// Trowing error
//
// Saat terjadi error, sinyal yang disebut dengan exception akan bangkit.
// Cara lain untuk membuat exception adalah menggunakan keyword throw untuk
// generate sebuah error. Sintaks dasarnya adalah seperti berikut.

// trow <object error>

// JavaScript memiliki built-in constructor untuk standar error
// meliputi Error, SyntaxError, dan sebagainya.  Perhatikan contoh berikut ini.

const errorProgram = new Error('Terjadi error');
console.error(errorProgram)

// Pada contoh di atas, kita menggunakan built-in constructor milik JavaScript,
// Error. Kenapa kita perlu membangkitkan exception secara sengaja? 
// Jawabannya adalah karena kita ingin program yang dibangun
// tidak mengalami crash ketika terjadi sesuatu di luar dugaan.

// Misalnya, kita memiliki program yang menerima inputan pembayaran dari pembeli.
// Normalnya adalah jumlah yang dibayarkan harus lebih besar dari harga barang.
// Lalu, ada sebuah kasus dimana pembeli membayar lebih kecil dari harga barang.
// Hal ini akan menyebabkan error di program milik kita. Oleh karena itu,
// kita perlu throw error ketika pembayaran kurang dari harga barang seperti contoh berikut.

// buat sebuah variable data yang berisi sebuah harga barang dan pembayaran
const paid = 80;
const price = 100;

// kita buat sebuah percabagan logika untuk mengenai sebuah barang yang dibayarkan
if (paid < price){
    throw new Error('barang belanjaan anda tidak mencukupi')
};


// Contoh di atas akan membangkitkan error. Lalu,
// bagaimana caranya untuk menangani error yang telah dibangkitkan?
// Caranya adalah menggunakan konsep Catching Error.

// ===============================================
// Catching Error
// 
// Sebelumnya, Anda sudah tahu cara untuk membangkitkan error.
// Kini, saatnya Anda mengetahui cara untuk menangkap error yang
// dihasilkan oleh program JavaScript yang Anda tulis.

// Try-Catch
// 
// Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error.
// Try-catch memiliki dua blok utama yaitu try dan catch.
// Try merupakan blok kode yang akan menangani error,
// sedangkan catch merupakan blok kode yang dibangkitkan ketika
// terjadi error di dalam blok try. Perhatikan struktur dari try-catch berikut.


// try {

// code

// } catch(err){

// error handling

// }
 

try {
    console.log('Memulai program');
    // throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
  }

// Kode tersebut tidak akan mengeksekusi kode di dalam blok catch.
// Jika ingin blok kode catch dieksekusi, tambahkan error di dalam blok try.
// Perhatikan contoh berikut ini.

// Catatan
// Ketika error dibangkitkan, kode yang ada di bawahnya tidak akan tereksekusi.
// Pada kasus ini, program akan langsung lompat ke blok catch.


// Supaya Anda lebih memahami terkait try-catch, cermati diagram berikut. 
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-fae0a2008fb11576dd10eef9329beb7f20240802135024.jpeg

// ======================================
// finally
// 
// Finally adalah blok kode yang berada di akhir try-catch.
// Bilamana catch dieksekusi hanya ketika ada error di dalam blok try,
// blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.

try{
    console.log('program berjalan');
} catch(err){
    console.log('program error')
} finally{
    console.log('program berakhir')
};
















