// Polymorphism
// 
// Seperti yang Anda ketahui sebelumnya bahwa kita dapat mewariskan property dan method ke class lainnya. 
// Namun, apa yang terjadi jika SubClass ingin mengubah implementasi dari method yang diwariskan 
// dari SuperClass? Layaknya kita sebagai anak, ingin mengubah suatu sifat atau perilaku dari 
// orang tua yang kita mungkin tidak setuju atau butuhkan. Jangan khawatir, di OOP kita dapat mengubah 
// implementasi method yang diturunkan dari SuperClass.


// Bagaimana cara untuk mengubah implementasi yang diturunkan dari SuperClass? Caranya adalah menggunakan 
// pilar utama lainnya dari OOP yaitu Polymorphism. Polymorphism berasal dari bahasa Yunani yang memiliki 
// arti secara harfiah yaitu memiliki banyak bentuk. Polymorphism merupakan konsep di mana suatu 
// entitas menjadi SuperClass untuk mewariskan property atau method ke SubClass. 

// Polymorphism berhubungan erat dengan pewarisan. Sebelumnya kita memiliki SuperClass Smartphones 
// yang memiliki property color, brand, model dan method charging. Kemudian kita memiliki SubClass 
// yang implementasinya berbeda tergantung dengan jenisnya seperti Android dan iOS.

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-d5d391ddead8f52be1a927af603f72bb20240730153718.jpeg

// Kini, bentuk implementasi dari Smartphones berbeda untuk setiap jenis. Inilah yang disebut dengan polymorphism. 
// Lalu, bedanya apa dong dengan pewarisan? Bedanya terdapat pada implementasi method yang diubah. 
// Untuk mengubah implementasi method tersebut, terdapat konsep yang disebut dengan overriding. 


// Overriding
// OOP memiliki konsep overriding yang sangat erat kaitannya dengan pewarisan. Overriding adalah cara kita 
// untuk membuat implementasi yang berbeda di SubClass untuk method yang diturunkan dari SuperClass. 
// Overriding dapat diterapkan untuk membuat method yang lebih spesifik di SubClass. Selain itu, 
// overriding juga dapat diterapkan untuk menambah properti baru di SubClass. Overriding dapat 
// diterapkan pada constructor maupun pada method.

// Overriding Constructor
// Constructor adalah method khusus yang dipanggil ketika instance class dibuat. Misalnya, ketika membuat 
// instance class dengan keyword new, constructor akan terpanggil
 
// const android = new android();  // constructor di class Android akan dipanggil.

// Jika kita telusuri kembali pada SuperClass Smartphones, terdapat constructor 
// yang berisikan property color, brand, dan model.

// class Smartphones {
//     constructor(color, brand, model){
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//     };

//     charging() {
//         console.log(`Charging ${this.model}`)
//     };
// };

// Bagaimana ketika kita butuh untuk menambahkan property baru pada SubClass Android atau iOS? Nah, 
// kita dapat melakukan overriding constructor, caranya sesederhana mendefinisikan ulang constructor-nya 
// seperti contoh berikut.

// subClass dengan constuctor Overriding Constructor
// class Android extends Smartphones {
//     constructor(color, brand, model,model, ram, rom) {
//         super(color, brand, model); // panggil constructor SuperClass
//         // panggil constructor subClass yang sudah ditambahkan
//         this.model = model;
//         this.ram = ram;
//         this.rom = rom;
//     };

//     splitScreen() {
//         console.log('Android have a Split Screen');
//       }
// };

// Karena Android tidak hanya bisa dijalankan di smartphone, tetapi juga di perangkat lain seperti tablet
// atau smart TV, kita menambahkan properti baru yaitu device di dalam constructor SubClass Android. 
// Properti device ini ditambahkan untuk memenuhi kebutuhan penamaan perangkat yang menjalankan sistem 
// operasi Android.

// Ketika melakukan overriding constructor, kita wajib memanggil method super() di dalam constructor. 
// Hal ini digunakan untuk menandakan apa saja property yang diturunkan dari SuperClass. Di contoh, 
// property yang diturunkan adalah color, brand, dan model. Jika tidak memanggil method super(), 
// akan terjadi error Referrence Error.



// Overriding Method
// Selain kita bisa mengubah dan menambahkan property di constructor, kita juga dapat mengubah implementasi pada
// method yang diturunkan dari SuperClass. Konsep ini disebut dengan overriding method. Overriding method 
// memungkinkan SubClass untuk plementasi spesifik dari metode yang sudah ada di SuperClass.

// Misalkan, kita ingin mengubah method charging() yang diturunkan dari SuperClass di SubClass Android karena 
// Android sudah mendukung untuk fast charging. Caranya adalah dengan menulis ulang method yang ingin kita override. 
// Perhatikan contoh berikut 

// class Android extends SmartPhones {
//     constructor(color, brand, model, device) {
//       super(color, brand, model);
//       this.device = device;
//     }
   
//     charging() {
//       console.log(`Charging ${this.model} with fast charger`);
//     }
   
//     splitScreen() {
//       console.log('Android have a Split Screen');
//     }
//   }


// kita buat superClass hyperPhone
class hyperPhone {
    constructor(cpu, ram, rom){
        this.cpu = cpu;
        this.ram = ram;
        this.rom = rom;
    };

    // method charging
    charging(){
        console.log(`Charging ${this.model} with normal charger`);
    };

    // method informations superClass
    informations(){
        console.log(`Cpu: ${this.cpu} | Ram: ${this.ram} | Rom: ${this.rom}`);
    }
};

// subClass Iphone Ios dan menambahkan beberapa property dari superClass
class Iphone extends hyperPhone{
    constructor(cpu, ram, rom, model, color, brand){
        // sebut property dari superClass
        super(cpu, ram, rom);
        // tambahkan property baru
        this.model = model;
        this.color = color;
        this.brand = brand;
    };
    // overriding method informations Iphone
    iphoneInfo(){
        super.informations()
        console.log(`Brand: ${this.brand} | Model: ${this.model} | Color: ${this.color} | Cpu: ${this.cpu} | Ram: ${this.ram} | Rom: ${this.rom}`);
    }

    // buat method airDrop
    airDrop(){
        console.log(`Best system for AirDrop is ${this.brand}`);
    };

    // buat method fast charging
    fastCharging(){
        // overriding method fast charging by superClass smartphone
        super.charging();
        // print
        console.log(`Fast Charging for ${this.model} is available`)
    };
};

// kita isi disetiap propertynya
const Iphone1 = new Iphone('Bionic 13', 4, 256, 'Iphone 11', 'red', 'Apple');
Iphone1.fastCharging();

Iphone1.iphoneInfo();

