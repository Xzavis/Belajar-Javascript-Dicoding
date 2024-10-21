// Menstrukturkan Data dengan Object
// Struktur data pertama yang kita bahas adalah Object.
// Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif.
// Jika tipe data primitif hanya dapat menyimpan satu jenis data seperti string atau number,
// tipe data object dapat menyimpan data yang beragam dan kompleks.
// Object dapat menyimpan data secara tidak terurut.
// Selain tipe data seperti string, number, symbol, boolean, null, dan undefined dalam JavaScript,
// semuanya dianggap sebagai object.
// Sebagai informasi tambahan, object di bahasa pemrograman lain
// disebut dengan hash-table, map, dan dictionary.

// cara membuat object
// Ada berbagai cara untuk membuat object seperti menggunakan
// object constructor atau yang paling mudah adalah dengan menggunakan object literals.
// Membuat object dengan object literals sangat mudah yaitu cukup dengan menulis kurung kurawal {}.

const product = {namaBarang: 'air mineral', harga: 3000};

// Dapat dilihat bahwa selain membuat object dengan beberapa properti,
// kita juga dapat membuat object dengan properti kosong.
// Properti yang ada di dalam object dapat ditambah dan dihapus.
// Di dalam kurung kurawal tersebut dapat ditulis properti dari object. 

// Properti memiliki key dan value.
// Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun,
// Seperti string, number, atau boolean. Properti yang ada di dalam object dipisahkan oleh koma.

const user ={
    nama: 'Xza',
    jabatan: 'Manager',
    umur: 18, 
};
// cetak
console.log(user)

// Kenapa kita menambahkan koma pada properti terakhir?
// Tujuannya adalah mempermudah kita untuk membacanya dan menghindari error
// karena lupa menulis koma ketika menambahkan properti baru setelah properti age.
// Beberapa bahasa pemrograman juga menyarankan untuk menuliskan koma pada akhir properti seperti contoh kode di atas.

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-0219a1d0d0271b5e360bdd57045edc6020240801131127.jpeg


// Mengakses properti object
// Setelah berhasil membuat object, tentunya kita akan mengakses properti yang ada di object tersebut.
// Object yang sudah dibuat dapat diakses dengan beberapa teknik.

// Mengakses menggunakan dot
// Cara pertama untuk mengakses nilai properti yang ada di object adalah menggunakan dot notation (.).
// Contohnya ketika ingin mengakses properti name dari object user dapat ditulis seperti berikut ini.

const siswa = {
    nama: 'Xza',
    kelas: 12,
    sekolah: 'SMKN 6',
};
// teknik dot
console.log(siswa.nama) // Output: Xza

// caranya
// Kita dapat memanggil nama object,
// kemudian menuliskan tanda titik yang diikuti dengan nama propertinya.
// Sebelum titik adalah nama object-nya dan setelah titik adalah nama properti yang ingin diakses.

// kekurangannya
// Kekurangan dari dot notation adalah nama key yang ingin diakses harus valid;
// tidak boleh mengandung spasi;
// tidak boleh diawali angka;
// dan tidak boleh mengandung spesial karakter.


// Mengakses menggunakan square bracket
// Untuk menutupi kekurangan menggunakan dot notation,
// ada cara lain yaitu menggunakan square bracket. Contoh:

// const siswa = {
    // nama: 'Xza',
    // kelas: 12,
    // asalSekolah: 'SMKN 6',
// };

// teknik squer bracket
console.log(siswa['kelas']); // Output: 12

// caranya
// Tulislah nama object terlebih dahulu dan di dalam kurung siku
// kita menuliskan nama properti yang ingin diakses.
//  engan menggunakan square bracket, key yang memiliki spasi pun dapat diakses.


// Mengakses menggunakan object destructuring
// Selain itu nilai properti dari object dapat diakses juga dengan
// cara lainnya yaitu menggunakan object destructuring.
// Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan
// nilai dari properti object ke dalam satuan yang lebih kecil (variabel).
// Contohnya seperti berikut.

// const siswa = {
    // nama: 'Xza',
    // kelas: 12,
    // Sekolah: 'SMKN 6',
// };

// teknik object destructuring
const {nama, kelas, sekolah} = siswa ;
console.log(`Nama: ${nama} kelas: ${kelas} asal Sekolah: ${sekolah}`);
// Output: Nama: Xza kelas: 12 asal Sekolah: SMKN 6


// Destructuring object yang key-nya tidak ada akan mengembalikan nilai undefined.
// Oleh karena itu, 

const school = {
    Jurusan:{
        RPL: 1,
        MPLB: 2,
    },
};

// kita bisa memanfaatkan default value ketika destructuring object seperti berikut ini agar nilainya tidak undefined.
const {Jurusan, jumlahRuangan = 3} = school;
console.log(Jurusan, `Jumlah ruangan sekolah: ${jumlahRuangan}` )
// Output: { RPL: 1, MPLB: 2 } Jumlah ruangan sekolah: 3

// Karena di object user tidak ada properti jumlahRuangan,
// ketika properti tersebut diakses akan mengembalikan nilai 3 sesuai dengan nilai default yang kita berikan.


// Object destructuring sangat berguna sekali ketika Anda memiliki object
// dengan properti yang banyak dan ingin mendapatkan
// nilai masing-masing properti seperti contoh berikut.

const accountMahasiswa = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};

const {id, email, name, nickname} = accountMahasiswa;
console.log(`id: ${id};`, `Email: ${email};`, `Name: ${name};`, `Nickname: ${nickname};`)

// Hasilnya, object destructuring sangat memudahkan hidup para programmer JavaScript
// karena kita tidak perlu lagi melakukan hal yang rumit
// hanya untuk mendapatkan nilai properti dari object.

// Perlu dicatat bahwa mengakses properti yang tidak ada di dalam object
// akan menyebabkan error dan nilai kembaliannya adalah undefined yang
// mana hal ini jika tidak ditangani akan mengganggu program yang dibuat.


// Mengubah Nilai di Properti Object
// Untuk mengubah nilai properti di object sangat mudah asalkan
// kita mengetahui nama object dan nama properti yang ingin diubah.
// Memodifikasi object dapat dilakukan dengan assignment operator (=).

const accountBank = {
    userBank: 'Xza',
    Wallet: 'Bank Jago',
    Ballance: 12000000,
    credit: 10
};

accountBank.Ballance = 11800000;
console.log(`Cek saldo-- Saldo: RP.${accountBank.Ballance}`)

// Object account yang awalnya memiliki nilai properti balance 12000000 berubah menjadi 11800000.
// Sebentar, sepertinya ada yang aneh. Object account diinisialisasi menggunakan const,
// kok bisa berubah nilainya? Bukannya const bersifat immutable (tidak dapat diubah)?
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-9edd8d733cef677cff21504b829dda3620240801131127.jpeg

// Nilai yang ada di object dapat diubah karena object berbeda dengan number, string, dan boolean yang nilainya tidak mungkin berubah.
// Selain itu, nilai properti dapat diubah karena kita hanya mengubah nilainya bukan menginisialisasi ulang properti dari object tersebut.
// Ingat, mengubah dan menginisialisasi ulang adalah hal yang berbeda.


// Menghapus Properti di Object
// Untuk menghapus properti pada object dapat menggunakan operator delete
// dengan menuliskan nama object lalu tanda titik dan diikuti nama propertinya.
// Contohnya seperti di bawah ini.

delete accountBank.credit;
console.log(accountBank)
// Output : { userBank: 'Xza', Wallet: 'Bank Jago', Ballance: 12000000, credit: 10 }

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-c611efa1e6709d903f7b3f53b000628c20240801131127.jpeg

// Selain menggunakan dot notation (.), kita juga bisa menggunakan operator delete dengan tanda kurung siku seperti berikut ini.

delete accountBank['Wallet'];
console.log(accountBank); //ouput: {   userBank: 'Xza', Ballance: 11800000, }