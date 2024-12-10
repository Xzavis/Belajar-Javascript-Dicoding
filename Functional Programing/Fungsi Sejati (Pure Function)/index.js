// Fungsi Sejati (Pure Function)
// FP menawarkan banyak manfaat, selain membuat kode jadi lebih ringkas, kode yang Anda tulis akan lebih 
// mudah untuk diuji. Sebab, dengan menerapkan FP, fungsi yang kita buat hasilnya selalu terprediksi. 
// Untuk mencapai manfaat tersebut, hal dasar yang perlu kita terapkan adalah konsep pure function.

// Pure function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut.

// Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
// Contoh, ketika fungsi diberikan argumen X, ia harus selalu mengembalikan nilai Y meski dipanggil 
// dalam kondisi dan waktu yang beda. Jadi, nilai yang dihasilkan oleh fungsi selalu terprediksi. 
// Untuk mencapai ini, fungsi tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.

// Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
// Dalam konteks ini, efek samping merujuk pada segala perubahan yang dilakukan oleh fungsi pada 
// variabel atau keadaan di luar cakupannya, seperti mengubah variabel global, berinteraksi dengan input dan output.
// Jika tidak memenuhi sifat tersebut, fungsi akan dikategorikan sebagai impure function.

let value = 0;

function addWith(addingValue){
    value += addingValue;
    console.log(`saldo rekening anda sekarang: Rp.${value}`);
    return value;
};

const result1 = addWith(3000);
// lalu berubah lagi
const result2 = addWith(500);
// berubah lagi
const result3 = addWith(1500)

// jawabany dari kode di atas adalah Impure function
// Fungsi addWith dikategorikan sebagai impure karena sifat pure function tidak terpenuhi.

// (X) Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
// Contoh kode di atas menunjukkan bahwa nilai yang dikembalikan oleh fungsi addWith yang diberikan argumen 1 
// selalu berbeda. Hal ini dipengaruhi oleh keadaan variabel value yang selalu berubah setiap kali pemanggilan 
// terjadi. Ups! Ada efek sampingnya juga di sini.

// (X) Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
// Pemanggilan fungsi addWith memiliki efek samping. Selain mengubah variabel value, fungsi ini juga menulis 
// sesuatu ke I/O melalui pemanggilan console.log. Efek samping ini membuat hasil dari pemanggilan fungsi 
// tidak hanya bergantung pada argumen yang diberikan, tetapi juga keadaan di luar fungsi tersebut.



// contoh pure function
function addWithA(Value, AddingValue){
    return Value + AddingValue;
};

const Result1 = addWithA(0,1);
console.log(Result1);

const Result2 = addWithA(1,1);
console.log(Result2);

const Result3 = addWithA(1,2);
console.log(Result3);


// Sekarang fungsi addWith menjadi pure function karena seluruh sifatnya telah terpenuhi.

// (✓) Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
// Saat ini, fungsi addWith menerima dua argumen, yaitu value dan addingValue. Selama kedua nilai argumen 
// tersebut sama, addWith akan mengembalikan nilai yang sama, kapan pun dan saat kondisi apa pun. Ini karena 
// fungsi addWith sudah tidak bergantung pada nilai di luar dari cakupannya.

// (✓) Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
// Fungsi addWith sudah tidak mengubah nilai di luar cakupannya, tetapi ia menghasilkan nilai baru. Dengan 
// dihapusnya kode console.log dari dalam fungsi, ia juga sudah tidak melakukan operasi I/O yang dapat 
// menyebabkan efek samping.

// Agar Anda semakin paham membedakan pure function dan impure function, simak beberapa contoh fungsi 
// dalam masing-masing kategorinya.

function calculateTotalPrice(orderItems){
    return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    } ,0)
};

const orderItems = [
    { price: 10000, quantity: 2},
    { price: 20000, quantity: 12},
    { price: 50000, quantity: 24},
    { price: 14000, quantity: 9},
];

// menghitung total harga
const totalPrice = calculateTotalPrice(orderItems);

// menampilkan total harga
console.log(`Total Harga: ${totalPrice}`)


// Memfilter dan memetakan data tanpa mengubah array asli 
function getActiveUsernames(users){
    return users
    .filter(user => user.isActive)
    .map(user => user.username);
};

// data user
const users = [
    { id: 1, username: 'admin', isActive: true },
    { id: 2, username: 'user1', isActive: false },
    { id: 3, username: 'user2', isActive: true },
    { id: 4, username: 'user3', isActive: false },
];

const activeUser= getActiveUsernames(users);

console.log(`Username Active: ${activeUser}`)


// Keuntungan menggunakan pure function termasuk kemampuan untuk mengoptimalkan 
// kode melalui memoization, yakni hasil dari fungsi disimpan dan digunakan kembali 
// jika input yang sama ditemukan. Teknik memoization termasuk praktik advance 
// yang tidak akan kami jelaskan rinci di kelas ini. Sebagai informasi saja, dalam 
// beberapa kasus, teknik memoization ini bisa meningkatkan performa secara 
// signifikan. Jika Anda tertarik untuk mendalami teknik ini, 
// artikel “Functional Programming: Understanding Memoization” menarik untuk dibaca.

const factorial = function(num) {
      debugger;  if (num === 0 || num === 1) {
            return 1  
        } else {    
            return num * factorial(unm - 1)  
        }
    }

//    https://cdn-media-1.freecodecamp.org/images/KioR-yl8aB2lxriDCulsNMTivQ1J5xlmEyrg

//     Tempat tumpukan eksekusi factorial() dengan 5 saat argumen berlalu. Kasus dasar salah, jadi masukkan kondisi rekursif.
// Tempat tumpukan eksekusi factorial() kedua kalinya dengan num-1 = 4 sebagai argumen. Kasus dasar salah, masukkan kondisi rekursif.
// Tempat tumpukan eksekusi factorial() ketiga kalinya dengan num-1 (4 – 1) = 3 sebagai argumen. Kasus dasar salah, masukkan kondisi rekursif.
// Tempat tumpukan eksekusi factorial() keempat kalinya dengan num-1(3 – 1) = 2 sebagai argumen. Kasus dasar salah, masukkan kondisi rekursif.
// Tempat tumpukan eksekusi factorial() kelima kalinya dengan num-1 (2 – 1) = 1 sebagai argumen. Sekarang kasus dasar benar, jadi kembalikan 1.


// function fibonaci
const fibonaci = function(n){
    if(n <= 1){
        return n ;
    } else {
        return  fibonaci(n - 1) + fibonaci(n - 2) 
    }
}

console.log(fibonaci(4));

// 