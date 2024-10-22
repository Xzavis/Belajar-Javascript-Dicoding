// stuktur data map
// Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value.
// Kalau sama seperti object, lalu apa fungsinya map?
// Map berfungsi untuk menutupi kekurangan dari object.
// Map dapat menggunakan key dengan tipe data apa pun,
// tidak seperti object yang hanya menerima string.
// Jadi perbedaan mendasarnya terletak pada key yang digunakan.

// -----------------------------------------
// Membuat data dengan map
// Map dapat dibuat dengan mudah yaitu menggunakan object map constructor seperti berikut ini.
const arrayMap = new Map();

// Kita telah berhasil membuat map yang bernilai kosong.
// Selain itu, kita juga dapat menambahkan data di dalam constructor
// ketika menginisialisasi map seperti berikut.

const productMap = new Map([
    ['sendal', 15000],
    ['Sepatu', 155000],
    ['Tshirt', 55000],
    ['watch', 200000]
]);

console.log(productMap);
// Output:
// Map(4) {
//     'sendal' => 15000,
//     'Sepatu' => 155000,
//     'Tshirt' => 55000,
//     'watch' => 200000
//   }

// -----------------------------------------------
// Menyimpan Nilai di Map
// Untuk menyimpan nilai ke dalam map, gunakanlah method set.
// Set menerima dua nilai yang pertama adalah
// keynya dan yang kedua adalah valuenya.
// Set memiliki struktur seperti berikut:
// set(key, value). Perhatikan contoh berikut ini.

const setDataArray = new Map() // => map array kosong, lalu bagaiman kita bisa mengisinya?

// sebutkan nama variable yang yang berisi array map lalu gunakan key set.(key, value)
setDataArray.set('name', 'Xza');
console.log(setDataArray) // Output: Map(1) { 'name' => 'Xza' } or { key => value }

// Selain menggunakan string sebagai key pada Map,
// kita juga dapat menggunakan number sebagai key-nya seperti berikut ini.

const numbersMapArray = new Map()
numbersMapArray.set(1, 'one game')
console.log(numbersMapArray) // ouput: Map(1) { 1 => 'one game' }


// -------------------------------
// Mengakses nilai di map
// Setelah berhasil menyimpan nilai ke dalam map,
// kita dapat mengakses nilainya berdasarkan key tertentu dengan method get.

// data map kosong
const getDataMap = new Map();
// isi (key, value) didalam map yang kosong
getDataMap.set('BrandHandPhone', 'Iphone');
// akses data tersebut dengan get
console.log(getDataMap.get('BrandHandPhone')) // Ouput: Iphone

// bisa kita lihat contoh diatas, key-nya adalah BrandHandPhone
// dan nilai yang dikembalikan Iphone

// -----------------------------------------
// Menghapus Nilai di Map

// Menghapus nilai di map dapat menggunakan method delete.
// Method ini akan menghapus nilai spesifik berdasarkan key yang kita tentukan.

// buat map kosong
const deleteDataMap = new Map()

// isi (key, value) untuk data yang baru
deleteDataMap.set('firstName', 'Xza')
console.log(deleteDataMap.get('firstName')) // Ouput: Xza

// isi data ke-2 lastname
deleteDataMap.set('lastName', 'Ibrahim');
console.log(deleteDataMap.get('lastName')) // Ouput: Ibrahim

// cek isi semua data map yang masuk
console.log(deleteDataMap) // Map(2) { 'firstName' => 'Xza', 'lastName' => 'Ibrahim' }

// mari kita delete key lastname
deleteDataMap.delete('lastName');
console.log(deleteDataMap.get('lastName')) // Output: undefined => yg artinya key,value tersebut sudah terhapus dengan baik

// kita cek secara keseluruhan
console.log(deleteDataMap) // Map(1) { 'firstName' => 'Xza' }

// terlihat setelah kita menghapus data map lastName kita hanya melihat satu data map saja

// Kembalian dari method delete akan bernilai true jika element tersedia atau berhasil dihapus.
// Namun, kembaliannya juga dapat bernilai false jika element yang ingin dihapus tidak ada.
