// Mengubah ke String

// Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara,
// yaitu menggunakan fungsi String() dan method .toString().
// Berikut adalah contoh dari penggunaan kedua cara tersebut.

// mari kita coba

const number = 354;
const boolean = true;
const objek = {
    nama: "Xza",
    umur: 17,
    sekolah: "SMKN 6",
};

// bagaimana kita bisa mengubah nilai dari tipe data yang berbeda
// ke bentuk string

const strNumber = String(number); // output: "123" tipe data string
const strBoolean = boolean.toString(); // output: "true" string
const strObjek = String(objek);

// setelah kita membuat variable baru dan mengubah nilai
// dari tipe data yang berbeda kita dapat menampilkannya berupa sebuah string

console.log(strNumber);
console.log(strBoolean);
console.log(strObjek);

// Kita bisa mengkustom sebuah method toString
// dengan mengunakan sebuah function

objek.toString = function(){
    return `Nama saya ${this.nama} Umur ${this.umur} sekolah di ${this.sekolah}`
};

console.log(objek.toString());

// Dalam JavaScript, this adalah kata kunci spesial
// yang merujuk pada objek yang "memiliki" atau "mengeksekusi" kode saat ini.
// Nilai dari this bisa berubah-ubah tergantung pada konteks dimana ia digunakan. 

// kita juga bisa membuat nilai dalam sebuah parameter objek function 

function Sekolah(Jurusan, Kelas, noKelas){
    this.Jurusan = Jurusan;
    this.Kelas = Kelas;
    this.nokelas = noKelas;
};

// kita akan menambahkan variable nilai disetiap
// parameternya

const sekolahSaya = new Sekolah("PPLG", "12", "A");
// cetak isi semua nilai objek
console.log(sekolahSaya);
// cetak isi nilai parameter Jurusan dll
console.log(sekolahSaya.Jurusan);



// Mengubah ke Number

// Secara umum, untuk mengubah bentuk numerik,
// seperti “10”, “3.14” dapat dilakukan dengan 
// menggunakan fungsi Number(). Berikut contoh penggunaannya.

// kita akan mengubah sebuah nilai numerik
// yang awalnya strung menjadi tipe data number

const strAngka = "123";
const strFloat = "3.14";
const boolean2 = false;

const numberAngka = Number(strAngka);
const numberLingkaran = Number(strFloat);
const numberBoolean = Number(boolean2);

console.log(numberAngka); // output: 123
console.log(numberLingkaran); // output: 3.14
console.log(numberBoolean); // false output: 0 , true output: 1;

// selain fungsin number() ada juga cara yang lebih spesifik,
// seperti fungsi parseInt() dan parseFloat().

// Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer).
// Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu.
// Ketika menemukan karakter yang tidak bisa diubah menjadi angka,
// proses konversi terhenti di sana.

// Dengan kemampuan ini,
// parseInt() dapat digunakan untuk mengubah nilai string,
// seperti "20CM", "64px", atau angka dengan satuan lainnya.

// contoh

// isi nilai
const cm = "12cm";
const px = "64px";

// mengubah menguraikan nilai dengan parseInt
const intDariCM = parseInt(cm);
const intDaripx = parseInt(px);

// cetak nilai yang sudah diproses oleh fungsi parseInt
console.log(intDariCM); // output: 12
console.log(intDaripx); // output: 64


// ParseFloat

// Adapun fungsi parseFloat()
// digunakan untuk mengonversi string 
// menjadi angka desimal (floating-point number).
// Sama seperti parseInt(),
// fungsi ini juga memiliki kemampuan membaca karakter
// string satu per satu sehingga dapat mengubah numerik yang mengandung satuan.

// kita akan membuat nilai string yang bisa di uraikan menjadi angka desimal

// nilai
const cmDetail = "12.24cm"; 
const pxDetail = "64.84cm";

// menguraikan nilai string dengan parseFloat
const cmDesimal = parseFloat(cmDetail);
const pxDesimal = parseFloat(pxDetail);

// cetak
console.log(cmDesimal);
console.log(pxDesimal);


// Mengubah ke boolean

// Untuk mengubah suatu nilai ke tipe data boolean,
// kita bisa gunakan fungsi Boolean().
// Sama seperti fungsi sebelumnya,
// kita cukup memberikan nilai yang akan diubah di antara tanda kurung.
//  Berikut adalah contoh penggunaan fungsi Boolean().

// nilai
const angka = 123;
const string = "halo";
const kosong = null;

// menguraikan nilai ke dalam boolean

const angkaBoolean = Boolean(angka);
const stringBoolean = Boolean(string);
const kosongBoolean = Boolean(kosong);

// cetak
console.log(angkaBoolean); // output: true
console.log(stringBoolean); // output: true
console.log(kosongBoolean); // output: false

// Pengertian true dan false
// Seluruh nilai yang dikonversi dalam boolean
// menghasilkan true disebut nilai truthy, 
// sedangkan sebaliknya disebut dengan falsy.

// false
// 0
// -0
// 0n
// ''
// null
// undefined
// NaN



// Konversi Implisit

// Konversi implisit terjadi ketika JavaScript secara otomatis mengubah
// tipe data tanpa instruksi eksplisit dari programmer.
// Ini biasanya terjadi dalam konteks tertentu,
// seperti operasi aritmetika, perbandingan, dan konteks logika.
// Meskipun konversi implisit bisa sangat berguna dan menghemat penulisan kode,
// penting untuk memahami alasan hal ini terjadi untuk menghindari
// bug dan perilaku yang tidak terduga dalam kode.

// Berikut adalah beberapa contoh konversi implisit 
// yang sering terjadi dalam berbagai konteks.

// contoh PERTAMBAHAN ARITMATIKA
const age = 20;
const pesanBaru1 = "umur: " + age;


// cetak
console.log(pesanBaru1);
console.log(`saya ber${pesanBaru1}`);

// secara tidak langsung tipe data 'age' menjadi tipe data string 
// karena mengunakan operator + yang digunakan untuk mengabungkan string

// contoh PERKALIAN ARITMATIKA
const strNumber1 = "123";
const hasil = strNumber1 * 2;

console.log(hasil); // 123 x 2 = output 246

// secara tidak langsung strNumber1 yang awalnya adalah sebuah string
// menjadi sebuah number dan bisa langsung diolah datanya
// dan bisa digunakan dengan operator perkalian 

// kita bisa mengunakan tipe data boolean menjadi sebuah angka yang bisa diolah
const bool = true; // true = 1
const result = bool - 3 ; // 1 - 3 = -2 

// cetak
console.log(result);