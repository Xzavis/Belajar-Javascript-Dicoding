// Arrow Function
// -------------------
// Function expression benar-benar bisa mengubah cara kita membuat function.
// Namun, ada alternatif sintaksis lain dalam JavaScript yang bisa lebih mengubah cara kita membuat function.
// Sintaksis tersebut bernama arrow function.
//  Yap, ini cara baru yang bisa kita manfaatkan dalam membuat function.
// Mari kita pelajari sintaksis ini.


// Deklarasi
// -------------------------
// Pertanyaan utama yang perlu dipecahkan adalah 
// bagaimana notasi arrow function? Untuk menjawabnya,
// mari kita langsung saja melihat perubahan
// function convertCelsiusToFahrenheit menjadi arrow function.



// -------------------------------
// Contoh
// Deklarasi function dengan Regular Function

const convertCelciusToFarenheitUsingRegularFunction = function (temperature){
    const result = 9 / 4 * temperature + 32;
    return result;
}

let temperatureInFarenheit = NaN;

temperatureInFarenheit = convertCelciusToFarenheitUsingRegularFunction (90);
console.log(`Celcius ke Farenhit: ${temperatureInFarenheit}°F`)
// Output: Celcius ke Farenhit: 234.5°F


// Deklarasi Function dengan Arrow Function
const convertCelciusToFarenheitUsingArrowFunction = (temperature) => {
    const result = (9/4) * temperature + 32;
    return result;
}

temperatureInFarenheit = convertCelciusToFarenheitUsingArrowFunction(180);
console.log(`Celcius ke Farenheit: ${temperatureInFarenheit}°F`)

// Pada contoh kode di atas, kita melihat penerapan dua buah sintaksis function,
// yaitu regular function dan arrow function.
// Regular function adalah cara penulisan function yang telah kita gunakan sebelumnya,
// sedangkan arrow function adalah cara lain dalam membuat function.
// Apakah Anda melihat perbedaan di antara keduanya?
// Apakah Anda menyadari bahwa arrow function menunjukkan sintaksis yang lebih sederhana?
// Jika benar, memang itulah yang terjadi.

// Arrow function ternyata `menghilangkan kewajiban` kita menaruh kata kunci `function` di sana.
// Sebagai gantinya, kita wajib menambahkan tanda panah (=>) setelah parameter.
// Ini disebut sebagai notasi fat arrow. Selain itu,
// arrow function juga memiliki function body sebagaimana regular function.

// Sampai dengan ini Anda sudah paham notasinya, bukan? Jika diilustrasikan, berikut notasinya.
// https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos-1fe12eb469b22632c5f7bdff72e87ce520240801105630.jpeg

// Refactor
// Apakah Anda merasa arrow function belum dikatakan sebagai sintaksis function yang sederhana?
// Tenang, ternyata arrow function ini bisa lebih simpel lagi!

// Kita bisa menyederhanakan penulisan arrow function body
// agar `tidak` menggunakan `tanda kurung kurawal` sama sekali.
// Mari kita lihat saja implementasinya dengan mengubah contoh kasus.

// Arrow function singkat
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => (9/5) * temperature + 32;
console.log(convertCelsiusToFahrenheitInConciseSyntax(90))

// Lihat! Function convertCelsiusToFahrenheitInConciseSyntax memiliki
// penulisan sintaksis yang sangat sederhana. Jauh lebih sederhana dari sebelumnya.
// Di sana kita menghilangkan beberapa hal, yaitu tanda kurung kurawal dan keyword return.
// Sebagai gantinya, return value langsung diletakkan setelah fat arrow. Wah, hebat sekali, ya!

// Bila kita animasikan, perubahan ini akan terlihat seperti berikut.
// https://raw.githubusercontent.com/dicodingacademy/a256-course-javascript/099-shared-file/media/03-bermain-dengan-function/arrow-function-refactor-version-1.webm

// Hal yang perlu dicatat adalah pembuatan arrow function hanya tersedia dalam bentuk expression.
// Oleh karena itu, kita selalu menyimpan nilainya dalam variabel. Selain itu,
// arrow function dengan gaya seperti ini hanya mampu menampung satu return value.
// Silakan bungkus dengan tanda kurung kurawal buka-tutup jika memerlukan banyak kode.