// Dalam materi kali ini,
// kita akan membahas jenis-jenis operator
// yang umum digunakan pada JavaScript.

// Sebelum mengenal lebih detail jenis-jenis operator yang ada,
// mari kita ketahui dulu dua istilah penting dalam melakukan sebuah operasi,
// yakni operator dan operand (operan).

// Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah operasi,
// misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman.

// Operan adalah nilai yang menjadi target dari sebuah operasi.

// Sebagai contoh, ada sebuah operasi aritmetika 5 + 4.
// Operatornya adalah simbol + serta operannya adalah 5 dan 4.
// Mudah, kan? Simak ilustrasi di bawah ini agar dapat membedakannya.

// Operand  Operator  Operand
//   5         +         4

// Operand  Operator  Operand
//    4        <         3

// Operand  Operator
// typeof  "Dicoding"

// 3 Jenis Operator dalam javasript
// Secara umum, operator dalam JavaScript terbagi menjadi
// tiga kelompok: unary, binary, dan ternary.
// Pengelompokan ini berdasarkan jumlah operan
// yang diperlukan untuk menggunakan suatu operator.

// Operator aritmetika, seperti + termasuk dalam kelompok operator binary karena membutuhkan dua operan.

// operator tipe data, seperti typeof adalah operator unary karena hanya memerlukan satu operan.

// Adapun operator ternary tentu saja membutuhkan tiga operan.

// Berikut adalah contoh kode yang menunjukkan
// penggunaan unary, binary, dan ternary operator.

// unary operator
// let age = 25;
// typeof age;

// Binary Operator
// 5 + 5 ;
// 10 / 2 ;
// age = 18 ;

// Ternary Operator (Operator Kondisi)
const age = 20;

// ? ini adalah cara singkat untuk menulis if-else
// : tanda ini digunakan untuk sebagai pemisah antara kondisi, nilai jika benar, dan nilai salah jika salah

const umur = age < 18 ? "kamu terlalu muda" : "selamat datang";
// Struktur: kondisi ? nilai_jika_benar : nilai_jika_salah

console.log(umur); // output: selamat datang

// Assignment Operator
// assignment operator adalah operator yang digunakan
// untuk memberikan nilai kepada sebuah variabel,
// baik inisiasi nilai baru maupun mengubah nilai yang sudah ada.

// Operator ini ditulis dengan simbol sama dengan (=).
// Operator penugasan termasuk dalam kategori binary operator karena membutuhkan dua operan,
// yaitu variabel di sisi kiri dan nilai yang akan diberikan di sisi kanan.
// Operator ini ditulis di antara kedua operan.

// INI VARIABLE   Assignment Operator  Nilai Variable
const nama = "Xza Abdul Malik";
let lokasi = "DKI Jakarta";

// contoh penggunaan untuk mengubah nilai.
lokasi = "Jakarta Selatan";

// Cetak
console.log(`Nama saya ${nama} saya tinggal di ${lokasi}`);

// Arithmetic Operator

// Operator aritmetika adalah operator standar
// yang digunakan untuk proses aritmetika,
// seperti penambahan (+),
// pengurangan (-),
// pengalian (*),
// ataupun pembagian (/).
// Selain operasi standar yang kami sebutkan,
// JavaScript juga mendukung beberapa operasi aritmetik
// yang bisa Anda lihat pada tabel di bawah ini.

//  _________________________________________________________________________________________________________
// |      Operator     |             deskripsi               |     Notasi    |           contoh             |
// |===================+=====================================+=============================================+|
// | Sisa bagi atau    | Binary operator yang mengembalikan | operan1       | 12 % 5 = sisanya 2 karena     |
// | Modulus (%)       | sisa hasil bagi operan kiri dan    | %             | 10 : 2 = 0                    |
// |                   | operan kanan.                      | operan2       | karena nilai operan 1 adalah  |
// |                   |                                    |               | 12 maka di hitung sisannya    |
// |--------------------------------------------------------------------------------------------------------|

// __Increment (++)__________________________________________________________________________________________________
// Unary operator yang digunakan untuk menambahkan satu nilai terhadap operan yang diberikan.
// Operan harus berupa variabel yang dapat diubah nilainya.

// Jika operator ini digunakan sebelum operan (++i), ia akan mengembalikan nilai x yang telah ditambahkan 1.
// Contoh ==> Jika x adalah 3, ++x mengubah x menjadi 4 dan operasi mengembalikan 4.

// operator ini digunakan setelah operan (i++), ia akan mengembalikan nilai x yang belum ditambahkan 1.
// Contoh ==> Jika x adalah 3, x++ operasi mengembalikan 3. Setelah itu, mengubah x menjadi 4.

let a = 5;
let b = 1 + ++a; // a ditingkatkan menjadi 6, lalu ditambahkan ke 1, hasilnya b = 7
console.log(b) ;

let c = 5;
let d = 2 + c++; // c asli (5), c = 6, lalu d ditingkatkan menjadi 7
console.log(d);

console.log("a:", a, "b:", b, "c:", c, "d:", d); // Output: a: 6 b: 8 c: 6 d: 7
// PERBEDAANNYA ADALAH NILAI AWALNYA (++a) MULAI DARI 1
// SEDANGKAN (c++) ITU AWALANNYA ADALAH 0
// ========================================================================================================================

// __Decrement (--)_________________________________________________________________________________________________________
// Sama seperti increment, tetapi alih-alih menambahkan, ia mengurangi nilai satu.

// --operan;
// Jika x adalah 3, --x mengubah x menjadi 2 dan operasi mengembalikan 2.

// operan--;
// Jika x adalah 3, x-- operasi mengembalikan 3. Setelah itu, mengubah x menjadi 2.

let A = 5;
let B = 2 + --A; // nilai A aslinya 5, lalu dikurangi menjadi 4, lalu nilai A = 4 di + 2 nilai B = 6
console.log(A);

let C = 5;
let D = 2 + c--; // nilai C aslinya 5 lalu nilai setelah akumulasi, nilai c awal adalah 6 lalu di tambah 2 = 8
console.log(D);


console.log("A:", A, "B:", B, "C:", C, "D:", D); 

// ========================================================================================================================

for (let i = 1; i < 5; i++){
    console.log("Output i:", i);
};

// __Eksponensial Pangkat (**)__________________________________________________________________________________________________
// Binary operator yang menghitung x (basis) dengan pangkat y (eksponen). Bentuk matematika: x ^ y.
// operan1 ^ operan2
// 2 ** 3 ==> 2 x 2 = 4 x 2 = 8 yng artinya langkah operasi perkalian berjumlah 3 dari hasil yang dikalikan.



// 6 + 5; // mengembalikan 11
// 7 - 2; // mengembalikan 5
// 8 * 5; // mengembalikan 40
// 10 / 3; // mengembalikan 3.33
// 10 % 2; // mengembalikan 0
// 2  (10 + 2); // mengembalikan 24 ,Operasi yang diberi tanda kurung akan dikalkulasi terlebih dulu.


// Comparison Operator

// Operator perbandingan adalah operator yang digunakan untuk
// membandingkan dua nilai dan mengembalikan 
// nilai boolean (true atau false) sebagai hasil perbandingan.

// Salah satu penggunaan operator perbandingan adalah ketika 
// kita berhadapan dengan skenario “Apakah x lebih besar dari y?” 
// dan mendapatkan hasil dalam bentuk “Ya” atau “Tidak”.



// Berikut adalah daftar operator perbandingan yang tersedia dalam JavaScript.

// sama (==) 
// Membandingkan dua operan, tanpa memperhatikan tipe data.
// Jika nilai kedua operan dianggap sama, operasi akan mengembalikan true, sebaliknya false.
//  == operan2 ==> contoh 1 == 1 mengembalikan true.

// Tidak Sama (!=)
// Membandingkan dua operan, tanpa memperhatikan tipe data. 
// Jika nilai kedua operan dianggap tidak sama, operasi akan mengembalikan true, sebaliknya false.
// operan1 != operan2
// 1 != 1 mengembalikan false. 
// Penjelasan: jika nilainya yang di bandingkan sama maka bernilai false dan jika nilainya berbeda termasuk tipe
// datanya itu akan di anggap true.

// Identik (===)
// Membandingkan dua operan beserta tipe datanya.
// Jika kedua operan identik, operasi akan mengembalikan true, sebaliknya false.
// operan1 === operan2
// 1 === 1 mengembalikan true, 1 === '1' mengembalikan false, 'Dicoding' === 'dicoding' mengembalikan false.
// penjelasan singkat: indentik ini harus bernilai sama dan juga tipe datanya

// Tidak Identik (!==)
// Membandingkan dua operan beserta tipe datanya. 
// Jika kedua operan tidak identik, operasi akan mengembalikan true, sebaliknya false.
// operan1 !== operan2
// 1 !== 1 mengembalikan false, 1 !== '1' mengembalikan true, 2 !== 6 mengembalikan true,'Dicoding' !== 'dicoding' mengembalikan true.


// ++++++ Operasi Perbandingan ++++++

// Lebih dari (>)
// Membandingkan dua operan, apakah operan pertama lebih dari operan kedua? 
// Jika pernyataan benar, mengembalikan true, sebaliknya false.
// 5 > 3 mengebalikan true, 5 > 5 mengembalikan false
// nilai operan pertama harus lebh besar dan nilanya tidak boleh sama

// Lebih dari atau Sama dengan (>=)
// nilainya harus lebih dari operan pertama dan boleh diawali nilai operan pertama maka akan mengembalikan true
// operan1 >= operan2
// 4 >= 4 mengembalikan true, 4 >= 5 mengembalikan false.
// nilai operan pertama harus lebh besar dan nilainya boleh sama 

// Kurang dari (<)
// Membandingkan dua operan, apakah operan pertama kurang dari operan kedua?
// Jika pernyataan benar, mengembalikan true, sebaliknya false.
// operan1 < operan2
// 4 < 5 mengembalikan true, 4 < 4 mengembalikan false.
// nilai operan pertama harus lebih kecil dan nilanya tidak boleh sama

// Kurang dari atau Sama dengan (<=)
// Membandingkan dua operan, apakah operan pertama kurang dari atau sama dengan operan kedua? 
// Jika pernyataan benar, mengembalikan true, sebaliknya false.
// operan1 <= operan2
// 4 <= 5 mengembalikan true, 4 <= 4 mengembalikan true.
// nilai operan pertama harus lebih kecil dan nilanya boleh 

// Contoh coding

const operan1 = 10;
const operan2 = 12;

console.log(operan1 > operan2); // 10 > lebih besar dari, ouput: false
console.log(operan1 < operan2); // 10 < lebih kecil dari, ouput: true


// ++++++ Operator Logika ++++++
// Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean.
// Dengan operator logika, kita bisa melakukan operasi gerbang logika,
// seperti AND dan OR.
// Operator logika dapat digunakan untuk menetapkan logika yang lebih kompleks.

// Berikut adalah daftar operator logika yang tersedia dalam JavaScript.

// AND (&&)
// Binary operator yang menghasilkan nilai true
// apabila kedua operan bernilai true (atau truthy).
// Jika salah satu operan bernilai false (atau falsy),
// operasi akan mengembalikan false.
// operand1 && operand2
// true && true menghasilkan true, false && true menghasilkan false, false && false menghasilkan false.

// Or (||)
// Binary operator yang menghasilkan nilai true
// apabila salah satu operan bernilai true (atau truthy). 
// Jika kedua operan bernilai false (atau falsy),
// operasi akan mengembalikan false.
// operand1 || operand2
// true || true menghasilkan true, false || true menghasilkan true, false || false menghasilkan false.

// NOT (!)
// Unary operator yang mengubah operan bernilai true menjadi false 
// dan false menjadi true.
// !operan
// !true menghasilkan false, !false menghasilkan true.
// !(1 > 2) menghasilkan true, 
// !(4 > 3) menghasilkan false.
console.log();

// Berikut adalah contoh kode yang menunjukkan berbagai penggunaan operator logika dalam JavaScript.

// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true

console.log();

// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true

console.log();

// NOT
console.log(!true); // false
console.log(!false); // true

console.log()
// ++++++ String Operator ++++++
// Operator string adalah operator yang digunakan untuk menggabungkan dua nilai string.
// Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator.

const first = 'bekerja';
const second = 'sama';
const merged = first + second;
 
console.log(merged); // Output: bekerjasama
// Perlu diperhatikan bahwa simbol + memiliki fungsi ganda tergantung pada jenis operannya. 
// Meskipun terlihat sederhana, penggunaan simbol + ini bisa sedikit membingungkan.
// Contohnya, pada operasi "2" + 2, hasilnya bukan 4, melainkan "22".
// Hal ini terjadi karena salah satu operannya adalah string sehingga simbol + berfungsi sebagai operator string.
// intinya adalah penggunaan simbol + harus di gunakan dengan tipe data yang sama seperti 
// string dengan string 
// dan number dengan number

const currency = "IDR";
let value = 10000;
value += 5000;
console.log(value);


const money = `${currency}` + " " + `${value}`;
console.log(money);