// Potensi Tersembunyi Sebuah Fungsi (High-Order Function)
// Kita sudah memahami bahwa fungsi dalam JavaScript bersifat first-class citizen. Fungsi dapat diperlakukan 
// sebagai expression yang dapat disimpan dalam sebuah variabel atau dikirim sebagai argumen fungsi lain. 
// Hal ini membuka banyak potensi menarik karena kita bisa menggunakan fungsi secara leluasa.

// Ada konsep dalam FP yang sangat mengandalkan kemampuan function expression. Konsep tersebut adalah 
// high-order function (selanjutnya akan disingkat menjadi HOF). HOF adalah fungsi yang menerima fungsi 
// lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain. Umumnya, teknik HOF digunakan 
// untuk berbagai hal berikut.

// Mengabstraksi fungsi aksi dari sebuah proses asynchronous (kita akan belajar asynchronous dalam 
// modul selanjutnya) dalam bentuk callback.
// Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
// Menerapkan teknik matematika, seperti currying dan function composition.
// HOF memungkinkan kita untuk membuat fungsi yang fleksibel. Misalnya, kita bisa membuat fungsi apply 
// yang menerima fungsi operation sebagai argumen untuk melakukan sebuah operasi pada dua nilai argumen lain.

function apply(operation, ...args) {
    // kita bisa menambahkan kode lain sebelum operation dijalankan.
    
    return operation(...args)
  }
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  function discount(disc, value) {
    return value - ((disc / 100) * value);
  }
  
  const productPrice = apply(sum, 100, 100, 200);
  const withDiscount = apply(discount, 25, productPrice);
  
  console.log('Product price:', productPrice); // Output: Product price: 400
  console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

// Dengan HOF, kita bisa dengan mudah mengubah logika operasi tanpa harus mengubah struktur fungsi apply. 
// Selain itu, kita juga bisa menambahkan kode lain di dalam fungsi apply sebelum sebuah operasi dipanggil 
// jika dibutuhkan. Menarik, kan?
// 
// Oh iya, implementasi memoization pure function juga dilakukan dengan teknik HOF. Caranya adalah fungsi 
// memoize menerima fungsi pure function sebagai argumen dan menyimpan hasil dari pemanggilan pure 
// function untuk digunakan ketika terjadi pemanggilan ulang dengan argumen yang sama. Jadi, jika 
// terjadi pemanggilan dengan argumen yang sama, cukup mengembalikan nilai dari yang sudah tersimpan.


// menerima argumen sebuah fungsi
function memoize(fn) {
    const cache = new Map();
  
    // mengembalikan nilai berupa fungsi
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(...args);
      cache.set(key, result);
  
      return result;
    };
  }
  
  
  function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  
  
  const memoizedSumArray = memoize(sumArray);
  const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);
  
  console.time('Memoized Sum First Call');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum First Call');
  
  console.time('Memoized Sum Second Call (Cached)');
  console.log('Total:', memoizedSumArray(largeArray));
  console.timeEnd('Memoized Sum Second Call (Cached)');


// Hal lain yang umum dilakukan dengan HOF adalah membuat fungsi yang menerapkan teknik currying. 
// Dengan teknik currying, sebuah fungsi biasanya tidak mengambil semua argumen secara langsung. 
// Ia mengambil satu argumen dulu, lalu mengembalikan sebuah fungsi baru yang menerima argumen kedua, 
// begitu seterusnya hingga seluruh argumen dimanfaatkan dan melakukan operasi secara utuh.

// Berikut adalah contoh teknik currying pada fungsi adjectivfy dan multipleBy.

function adjectivfy(adjective){
    return function(noun){
        return `${noun} ${adjective}`
    };
};

function multipleBy(x){
    return function(y){
        return x * y;
    };
};

function perkalian(x, y){
    return x * y;
}

const test1 = perkalian(5, 7)
console.log(test1);

const coolifier = adjectivfy('keren');
const funfier = adjectivfy('seru');

console.log(coolifier('Github'));
console.log(coolifier('Javascript'));

// multiply
const multipleByFive = multipleBy(2);
console.log(multipleByFive(2))
console.log(multipleByFive(4))

// Fleksibilitas dan Penggunaan

// perkalian:
// Fungsi ini lebih sederhana dan langsung. Anda harus memberikan kedua argumen setiap 
// kali Anda ingin melakukan perkalian.

// multipleBy: 
// Fungsi ini lebih fleksibel dalam hal penggunaan. Anda dapat membuat fungsi baru yang 
// "terikat" pada nilai tertentu dari x, dan kemudian menggunakan fungsi tersebut 
// berkali-kali dengan nilai y yang berbeda tanpa harus menyebutkan x lagi.
// Misalnya, Anda bisa membuat fungsi untuk mengalikan dengan 5, 10, atau nilai 
// lainnya, dan menggunakan fungsi tersebut berulang kali.



// HOF juga bisa digunakan untuk komposisi fungsi, yaitu kita menggabungkan beberapa 
// fungsi kecil menjadi satu fungsi yang lebih kompleks. Berikut adalah contoh praktik 
// dari komposisi fungsi.

// fungsi mini
function tambahSatu(x){
  return x + 1;
};

function kuadrat(x) {
  return x * x;
};

// function yang lebih kompleks
function compose(f, g){
  return (x) => {
    return f(g(x));
  };
};

const addOneThenSquare = compose(tambahSatu, kuadrat);
console.log(addOneThenSquare(5));

const squareThenAddOne = compose(kuadrat, tambahSatu)
console.log(squareThenAddOne(5));

// Sudah paham dengan HOF?

// Secara tidak sadar, mungkin Anda juga sebetulnya sudah pernah memanfaatkan teknik HOF, 
// tetapi belum mengenal namanya saja. Beberapa contoh HOF yang umum digunakan dalam 
// JavaScript adalah penggunaan fungsi Array.map. Fungsi Array.map menerima sebuah fungsi 
// sebagai argumen yang digunakan untuk memproses setiap elemen array. Fungsi Array.map 
// mengembalikan array baru yang hasilnya adalah nilai dari pemanggilan fungsi pada 
// setiap elemen array asli.

// kita akan membuat setiap angka didalam array akan dikalikan dengan 3

// data array
const dataNumbers = [2, 5, 9, 10 ,3 ,12];

// kita akan menggunakan fungsi array.map untuk menerima element array
const pengalian3 = dataNumbers.map((number) => number * 3);

console.log(pengalian3)

