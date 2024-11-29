// Encapsulation
// 
// Setelah kelar membahas pilar OOP pewarisan, berikutnya kita akan membahas pilar utama berikutnya dari OOP 
// yaitu encapsulation. Encapsulation adalah proses untuk membungkus data di suatu wadah yang 
// disebut dengan class. Menyembunyikan data adalah bagian kunci dari encapsulation.

// Desain OOP yang baik adalah object hanya akan menampilkan data yang dibutuhkan oleh object lain. 
// Data akan diisolasi dan tidak dapat diakses langsung dari luar. Secara sederhana, 
// encapsulation adalah membuat data yang ada di class sebagai private.

// Di dunia nyata, kita bisa lihat contohnya pada mesin kopi. Mesin kopi memiliki data dan method yang 
// bersifat private seperti pengatur suhu, pemanas, dan method memanaskan air. 
// Data dan method tersebut tidak bisa diakses oleh pihak luar (kita sebagai pengguna).



// Properti dan Method
// 
// Seperti yang Anda ketahui, di dalam sebuah class kita dapat mendefinisikan dua hal, yaitu property dan method. 
// Karena kita menerapkan encapsulation, kita harus mengatur akses dari keduanya. Secara umum, 
// property yang ada di dalam instance class bersifat mutable (dapat diubah). Perhatikan contoh berikut ini.


// Kita buat SuperClass Machine Coffe
class coffeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this.temperature = 90; // kita bisa membuat nilai default
    }
    // Method Membuat Coffe
    makeCoffe(){
        console.log(`Mesin sedang membuat Kopi dengan suhu ${this.temperature}°C`);
    };
};

// mari kita buat buat kopi dengan program yang sudah kita buat
const coffe1 = new coffeMachine(100);
coffe1.temperature = 60;

// print
coffe1.makeCoffe();

// PENJELASAN
// 
// Pada contoh di atas, kita menetapkan temperature mesin kopi 90 derajat Celcius, 
// tetapi ada pengguna yang iseng mengubahnya menjadi 60. Mengubah nilai tersebut bisa 
// saja mengakibatkan mesin kopi rusak. Meskipun kita sudah menetapkan nilai temperature, 
// nilainya tetap dapat diubah. Hal ini tidaklah baik. Untuk mencegah hal itu terjadi lagi, 
// kita dapat menerapkan getter dan setter.

// Getter terdiri dari method get. get adalah cara untuk mendapatkan nilai dari property, 
// sedangkan setter terdiri dari method set. set adalah method untuk menetapkan 
// nilai property. Dengan begitu, kita dapat mengatur akses ke property yang dimiliki 
// oleh object. Perhatikan contoh berikut ini.

// KITA AKAN BUAT SEBUAH MESIN KOPI YANG ABSOLUTE

class MachineCoffe {
    constructor(waterAmount){
        this.JumlahhAir = waterAmount;
        this._suhu = 90;
    };

    // kita akan membuat method yang tidak bisa diubah oleh pengguna barista pada suhu program mesin kopi
    set suhu(suhu){
        console.log(`Anda tidak diizinkan mengubah suhu🌡️`);
    };
    // kita kembalikan nilai pada propety menggunakan method get
    get suhu(){
        return this._suhu;
    };
};

// Kita akan mengubah setelan suhu program mesin kopi ini dengan paksa
// apakah propery yang ada didalam Superclass bisa diakses dengan mudah?
// mari kita coba

const coffe2 = new MachineCoffe(20);
// kita ubah paksa
coffe2.suhu = 100;
// output: Anda tidak diizinkan mengubah suhu🌡️

// kita cek apakah berhasil berubah atau malah sebalik nya
console.log(`Cek suhu ${coffe2.suhu}°C`)
// output: Cek suhu 90°C

// Penambahan underscore (_) di variable temperature untuk menandakan bahwa nilai temperature
// tidak dapat diubah. Namun, sebenarnya penggunaan tanda underscore tidak benar-benar membuat
// property temperature tidak dapat diubah, ia masih dapat diubah. Penggunaan underscore hanyalah 
// code convention yang disepakati oleh komunitas JavaScript.

// Untuk membuat nilainya benar-benar tidak dapat diubah, 
// Anda dapat melakukannya dengan cara berikut.

class CoffeeMachinePremium {
    #temperatureAbsolute = 90;
  
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperatureAbsolute = this.#defaultTemperature();
    }
  
    set temperatureAbsolute(temperatureAbsolute) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperatureAbsolute() {
      return this.#temperatureAbsolute;
    }
  
    #defaultTemperature() {
      return 90;
    }
  }
  
  const coffee = new CoffeeMachinePremium(10);
  coffee.temperatureAbsolute = 180;
  
  console.log(`cek suhu ${coffee.temperatureAbsolute}°C`);

//   Sejak JavaScript versi ES2022, kita dapat menggunakan tanda hashtag (#) untuk membuat hak akses private 
// pada property dan method. Pada contoh di atas, kita menambahkan tanda hashtag di variable dan method yang 
// bersifat private. Selain itu, kita mendeklarasikan property yang bersifat private di enclosing class 
// seperti berikut.

// class CoffeeMachine {
//     #temperature = 90; // enclosing class
   
//     constructor(waterAmount) {
//       this.waterAmount = waterAmount;
//       this.#temperature = this.#defaultTemperature();
//     }
   
//     // Kode lainnya disembunyikan
//   }


// Jika mencoba mengakses property yang bersifat private, Anda akan mendapatkan pesan error seperti berikut ini.

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-6bfc0de8b3a881caeaf6347cc2f8aac220240730153534.jpeg
coffee.#temperatureAbsolute = 180;

// Seperti itulah konsep encapsulation, membatasi bagian kode yang dapat diakses. 
// Secara default buatlah bagian kode menjadi tidak dapat diakses, jika tidak diperlukan.