// apa perbedaan antara function deklarasi dengan function Expression

// function declaration

console.log(kalkulator(2)) // Output: 7
function kalkulator(a){
    return a + 5;
} // fungsi ini naik seolah olah naik seperti bisa memanggil kode sebulum dibuat

// function Expression 
console.log(numeric(4)) // Cannot access 'numeric' before initialization
const numeric = function(num){
    const a = 2 * num + 32;
    return a;
}


// 1. Apa perbedaan function expression dan declaration?
// Perbedaan function expression dan declaration yg pertama adalah
// terletak pada pembuatan functionnya seperti yang dijelaskan pada contoh kode di atas.
// Perbedaan kedua adalah perilakunya,
// function declaration seakan-akan naik ke atas dieksekusi lebih dulu saat kita menjalankan kode javascript.
// Itulah sebabnya kamu bisa memanggil fungsi yang dibuat dengan declaration sebelum fungsi itu dibuat.
// Hal ini tidak dapat dilakukan oleh function expressions karena perilakunya mirip seperti membuat variabel;

// 2. Kenapa kita harus menggunakan arrow function kalo pada dasarnya arrow function cuma bisa function expression?

// Kita tidak harus menggunakan arrow function ya kak.
// Arrow function maupun regular function memiliki keunggulan dan kekurangan masing-masing.
// Semua tergantung kebutuhan. Misalnya jika kamu ingin membuat fungsi rekursif,
// atau fungsi yang ingin bisa dipanggil terlebih dahulu sebelum dibuat,
// maka kamu cocok menggunakan function declaration.
// Jika kamu ingin membuat fungsi yang hanya dipanggil setelah didefinisikan,
// atau ingin membuat fungsi anonim (tanpa nama), atau membuat fungsi yang akan dijadikan argumen pada fungsi lainnya, mungkin lebih mudah menggunakan arrow function expression.


