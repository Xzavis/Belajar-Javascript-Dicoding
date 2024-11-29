// Inheritance
// Pilar yang akan kita bahas pertama adalah inheritance. 
// Inheritance jika diterjemahkan ke dalam bahasa Indonesia artinya adalah pewarisan. 
// Sesuai dengan namanya, kita bisa mewariskan harta property dan method dari sebuah class ke class lain. 
// Umumnya, properti dan method yang diwariskan berasal dari class (induk) dan digunakan oleh class baru (anak). 
// Sama halnya di kehidupan sehari-hari, sedikit banyaknya sebagai anak, 
// kita memperoleh sifat dan perilaku dari orang tua.

// Di OOP, inheritance memungkinkan class untuk mewarisi property dan method yang dimilikinya 
// sehingga membantu mengurangi penulisan kode secara berulang (mengurangi redundancy kode). 
// Misalnya, ketika kita membuat sebuah class dengan property dan method, keduanya dapat digunakan 
// kembali oleh class lainnya melalui inheritance. Berikut adalah contohnya.


// class SuperClass { }
 
// class SubClass extends SuperClass { }

// Istilah SuperClass dan SubClass akan sering kita dengar ketika bahas inheritance di OOP. 
// Class yang mewariskan property dan method-nya disebut dengan 
// SuperClass, Induk, Base, atau Parent Class. Class yang mewarisi 
// property dan method dari class lain disebut dengan SubClass dan Children Class (Anak).

// Misalnya, Anda memiliki smartphones dengan jenis Android dan iOS, setiap smartphones tersebut
// pasti memiliki property color, brand, model, dan method-nya adalah charging. 
// Dengan paradigma OOP, property dan method yang memiliki kesamaan bisa kita abstraksikan 
// menjadi sebuah class baru bernama Smartphones. Kemudian kita bisa membuat dua class baru, 
// yaitu Android dan iOS.


// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-13f5027c4feb3f946ca8283971ec7c3a20240730152812.jpeg

// Android dan iOS akan mewariskan property dan method dari class Smartphones seperti yang ada pada gambar di atas. 
// Dengan begitu, class Android dan iOS akan memiliki property color, brand, model dan method charging. 
// Selain itu, di masing-masing class kita dapat menambahkan property yang hanya ada pada dirinya. 
// Misalkan, class Android memungkinkan untuk memiliki method split screen, sedangkan class iOS memungkinkan 
// untuk memiliki method AirDrop.

// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-5d39c33682733986f428004d4328796120240730152842.jpeg

// Jika contoh di atas kita terapkan pada kode JavaScript, kodenya akan menjadi seperti berikut ini.



// SuperClass atau induk class
class Smartphone {
    constructor(color, brand, model, OutputWatt) {
        this.warna = color;
        this.merek = brand;
        this.model = model;
        this.Power = OutputWatt;
    };

    // method function didalam bawaan induk class
    charging(){
        console.log(`Charging ${this.merek} ${this.model} | ${this.Power} Watt`)
    }
    informationSmartphone(){
        console.log(`Information: Color ${this.warna} | Brand: ${this.merek} | Model: ${this.model} | Charging Power: ${this.Power}`)
    }
};

// Membuat input Smartphone1
const Smartphone1 = new Smartphone('Titanium Black', 'Iphone', '15 Pro Max', 80);
Smartphone1.charging(); // Ouput: Charging Iphone 15 Pro Max


// Child Class Ios
 class Ios extends Smartphone{
    // Method AirDrop
    AirDrop(){
        console.log(`iOS have a behavior AirDrop`);
    };
 };

//  Child Class Android
class Android extends Smartphone{
    // Method SplitScreen
    SplitScreen(){
        console.log(`Android have a Split Screen`);
    };
};


// -------------------------------------------------------------

// Hp Iphone
const Iphone1 = new Ios('Purple Midnight', 'Apple', 'Iphone 11', 25);
Iphone1.informationSmartphone();
// Output: Information: Color undefined | Brand: undefined | Model: undefined | Charging Power: undefined

// print all methods
Iphone1.charging(); // Output: Charging Apple Iphone 11 | 25 Watt
Iphone1.AirDrop(); // Output: iOS have a behavior AirDrop
 
// Hp Android 
const Android1 = new Android('Black Mate', 'Iqoo', 'Z9 5G', 80);
Android1.informationSmartphone()
// Output: Information: Color Black Mate | Brand: Iqoo | Model: Z9 5G | Charging Power: 80

// print all methods
Android1.charging();
Android1.SplitScreen();

// PENJELASAN
// 
// Di implementasi kode, SubClass (Android, iOS) hanya mendefinisikan method yang hanya ada pada dirinya. 
// Selain itu, kita tetap dapat mengakses property dan method yang ada pada 
// SuperClass (color, brand, model, charging) sehingga mengurangi penulisan kode yang berulang.

// Ternyata, mengimplementasikan pewarisan di JavaScript dengan ES6 Class sangat mudah, ya. 
// Masih ingatkah Anda bahwa sebelum adanya ES6 Class, untuk membuat class di JavaScript 
// menggunakan constructor function. Sekarang, kita akan kilas balik ke masa sebelum adanya ES6. 
// Kita akan mencoba merasakan penderitaan orang terdahulu dalam mengimplementasikan pewarisan 
// sebelum adanya ES6 Class.


// Tanpa menggunakan ES6 Class, pewarisan akan menggunakan teknik prototype inheritance seperti berikut ini


// Untuk mengetahui asal muasal dari sebuah class, Anda dapat menggunakan instanceof. 
// Instanceof dapat digunakan untuk menguji apakah suatu object merupakan instance dari 
// sebuah class atau constructor function tertentu. Nilai keluaran dari instanceof adalah boolean. 
// Jika object tersebut merupakan instance dari kelas yang diuji, nilainya akan true. Jika tidak, 
// nilainya akan false. Perhatikan contoh berikut ini.

console.log(Iphone1 instanceof Smartphone);
console.log(Android1 instanceof Smartphone)

// Berdasarkan contoh di atas, terbukti bahwa iOS dan Android adalah class yang terbuat dari 
// constructor SmartPhones. Secara sederhana, Iphone1 dan Android1 memiliki rantai 
// prototype dengan SmartPhones

