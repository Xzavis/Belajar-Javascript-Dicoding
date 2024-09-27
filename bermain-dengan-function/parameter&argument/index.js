// function membuat nilai konversi celscius ke farenheit
function celciusKeFarenheit (temperature){
    const rumusFarenheit = 9 / 5 * temperature + 32;

    console.log(`konversi celcius ke farenheit: ${rumusFarenheit}F°`);
}

const nilaiCelsius = 90 ;

celciusKeFarenheit(nilaiCelsius);

// kali ini kita akan belajar memahami dan mendalami tentang parameter
// dan argument didalam sebuah function di javasript

// Ada teks temperature dalam parentheses di atas.
// Itulah parameter function. 
// Jika kita amati, notasinya akan seperti berikut.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-4c21e53c1373b85267dcbe2673f0179020240801101927.jpeg

// Gambar di atas menunjukkan parameter function didefinisikan dalam parentheses.
// Parameter dapat lebih dari satu asalkan dipisah dengan tanda koma (,). 

// Karena parameter sama dengan input data bagi function body,
// kita dapat memanfaatkan nilai parameter selayaknya nilai yang tersimpan dalam variabel.
// Mudah, kan?

// Ketika memanggil function yang memiliki parameter,
// kita menentukan nilai dalam parentheses. 
// Ini pernah dilakukan sebelumnya.

// const temperatureInCelsius = 90;
// convertCelsiusToFahrenheit(temperatureInCelsius);

// temperatureInCelsius yang kita panggil dalam
// parentheses atau parameter ketika memanggil function tersebut
// yang ada () itu disebut sebagai argument

// Argument ini bisa berasal dari nilai yang langsung dimasukkan atau nilai yang tersimpan dari variabel.

// ada beberapa cara yang bisa memasukan nilai
// dalam parameter function tersebut
// seperti:

// Langsung memasukkan nilai
// convertCelsiusToFahrenheit(100);
 
// Memasukkan nilai dengan variabel
// const temperatureInCelsius = 90;
// convertCelsiusToFahrenheit(temperatureInCelsius);

// Dengan cara ini, kita dapat mencari angka suhu berskala fahrenheit dari celsius
// berdasarkan parameter function convertCelsiusToFahrenheit,
// berapa pun angka suhu celsius yang kita masukkan. Lebih fleksibel,
// bukan? Memang benar bahwa function adalah fitur yang sangat powerful dalam bahasa pemrograman.


// === DEFAOUT PARAMETER ===
// Tahukah Anda bahwa argument dapat bernilai undefined
// jika kita tidak beri nilai apa pun dalam parentheses saat function dipanggil?
// Lalu, apa yang akan terjadi jika function body tetap dijalankan
// dalam keadaan seperti itu? Mari kita lihat bersama.

function celciusKeFarenheit (temperature){
    const rumusFarenheit = 9 / 5 * temperature + 32;

    console.log(`konversi celcius ke farenheit: ${rumusFarenheit}F°`);
};

celciusKeFarenheit(); // Output: NaN (Not-a-Number)

// !Nilai tersebut hadir karena salah satu operan dalam proses kalkulasi
// bukan bertipe number ataupun numerik, tetapi undefined. Nah,
// ini adalah masalah nyata yang tidak kita inginkan dan perlu diselesaikan.

// hal seperti ini dapat kita selesaikan dengan mengguanakan
// conditional statement, yaitu
// kita perlu memeriksa bahwa nilai argument tersebut bernilai 
// undefined, dengan tidak memproses kalkulasi.

// function convertCelsiusToFarenheit(Temperature){
//     // verifikasi conditional statement sebelum dikalkulasi
//     if(Temperature !== undefined){
//         // rumus konversi celcius kedalam farenheit
//         const rumusFarenheit = 9 / 5 * Temperature + 32;
//         // cetak hasil nama variable diatas
//         console.log(rumusFarenheit);
//     };
// };

// kita panggil identifier function diatas
// convertCelsiusToFarenheit(Temperature);

// Namun, kita akan membahas conditional statement pada materi terpisah.

// JavaScript memiliki solusi lain untuk mengatasinya jika tidak ada nilai apa pun
// yang disertakan ketika pemanggilan function.
// Ia adalah default parameter.
// Fitur ini memungkinkan parameter function memiliki
// nilai yang telah ditentukan atau default value jika
// ia tidak diberikan argument atau nilai apa pun.

function cToF(suhu = 90){
    const rumusF = 9 / 5 * suhu + 32;
    console.log(`ini adalah nilai default parameter: ${rumusF}F°`)
};

cToF();

// Fitur ini memungkinkan parameter function memiliki nilai
// yang telah ditentukan atau default value
// jika ia tidak diberikan argument atau nilai apa pun.

// Simpel saja. Kita tambahkan sintaksis assignment (=) dan diikuti dengan nilai default-nya.
// Dengan cara ini, parameter akan bernilai default value.

// Bagaimana jika kita ingin mengubah nilainya? Tenang,

// menggantikan nilai default
cToF(180);

// Itu adalah penerapan parameter pada function sebagai input data.
// Berikutnya, kita akan membahas fundamental lain yang sangat penting dari function,
// yaitu return value. Ayo, kita belajar lagi!
