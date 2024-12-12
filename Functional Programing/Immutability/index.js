// Yang Sudah Tercipta, Tak Bisa Diubah Lagi (Immutability)
// 
// Kita sudah mengetahui bahwa banyak benefit yang didapatkan ketika bisa menjaga kesucian sebuah fungsi 
// (pure function). Menghasilkan efek samping, seperti mengubah sebuah data yang bersumber dari luar bisa 
// menyebabkan fungsi menjadi impure. Untuk selalu menjaga bahwa fungsi selalu pure, dalam FP juga terdapat 
// sebuah konsep bahwa segala yang sudah dibuat, tidak bisa diubah nilainya. Konsep ini disebut sebagai 
// immutability.

// Walau terdengar sedikit menyeramkan bagi kita yang sudah terbiasa mengubah data sesuka hati, 
// sebenarnya konsep ini memiliki tujuan yang baik. Tujuannya adalah memastikan sebuah nilai 
// tidak dapat diubah dengan mudah (atau bahkan tidak bisa). Tujuannya tentu untuk menghindari 
// segala perubahan yang tidak terduga dan biasanya menjadi akar permasalahan, seperti bug.

// Dalam JavaScript, kita dapat menerapkan prinsip immutability dengan menggunakan fungsi yang 
// mengembalikan salinan baru, alih-alih mengubah data asli. Biasanya ini dilakukan ketika 
// kita perlu mengubah data dari objek ataupun array. Namun, sebelum mengetahui berbagai fungsi 
// yang dapat mendukung prinsip immutability, kita perlu tahu dulu fungsi-fungsi “bahaya” yang 
// perlu diperhatikan kembali.

// Secara umum, perubahan data secara tidak sadar terjadi karena penggunaan beberapa fungsi 
// bawaan JavaScript yang bersifat mengubah atau biasa disebut mutator function. Berikut 
// adalah beberapa fungsi yang sering kita gunakan dan harus diperhatikan kembali ketika 
// menerapkan prinsip immutability.

// *Array.push: menambahkan elemen di akhir dari sebuah array.
// *Array.pop: menghapus elemen terakhir dari sebuah array.
// *Array.shift: menghapus elemen pertama dari sebuah array.
// *Array.unshift: menambahkan elemen di awal dari sebuah array.
// *Array.splice: menambahkan atau menghapus elemen di posisi 
// tertentu dari sebuah array.
// *Array.reverse: membalikkan urutan elemen dari sebuah array.
// *Array.sort: mengurutkan elemen dari sebuah array.
// *Object.assign: memodifikasi properti dari object.

// Daftar fungsi di atas bersifat mutate, alias mengubah langsung data array asli. Tentu 
// penggunaan method tersebut di dalam fungsi akan membuat fungsi menghasilkan efek samping.

// Perhatikan contoh kode di bawah ini.

function max(arrayOfNumbers){
    return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop()
}

const numbers = [ 1, 2, 3, 4, 5];
const maxNumber = max(numbers);

console.log(maxNumber); // Output: undefined
console.log(numbers)

// Fungsi max adalah fungsi yang mengembalikan elemen bernilai terbesar dari array yang 
// dikirimkan melalui argumen. Sepintas, fungsi max terlihat pure karena tidak mengakses 
// nilai selain dalam argumennya. Namun, karena dalam implementasinya kita menggunakan 
// fungsi sort dan pop, fungsi max jadi memiliki efek samping, yaitu mengubah nilai array 
// numbers yang diberikan melalui argumen. Efek samping ini mungkin saja tidak terduga 
// karena tujuan fungsi tersebut hanya mengembalikan elemen yang paling besar.

// Selain pada array, perubahan data juga banyak terjadi dalam object. Salah satunya adalah 
// penggunaan fungsi Object.assign yang dapat mengubah nilai pada sebuah objek yang sudah 
// terbentuk sebelumnya.

function registerEmail(person, email){
    return Object.assign(person, { email });
}

const person = {
    name: 'John Doe',
    username: 'johndoe'
};

const personWithEmail = registerEmail(person, 'jhondoe@gmail.com');

console.log(person);
console.log(personWithEmail)

// Anda bisa lihat bahwa fungsi registerEmail menambahkan properti email, baik pada personWithEmail maupun person.


// Duplikasi alih-alih Mengubah Aslinya
// Lalu, solusinya seperti apa? Untuk membuat kedua fungsi di atas kembali pure, kita tidak boleh memodifikasi 
// nilai yang diberikan melalui argumen. Umumnya, hal ini dilakukan dengan menduplikasi nilai array atau objek 
// dan menambahkan data baru, lalu kembalikan fungsi menggunakan nilai baru tersebut.

// Secara umum, proses duplikasi data dapat dilakukan dengan mudah menggunakan sintaksis spread operator. 
// Berikut adalah versi perbaikan dari fungsi max dan registerEmail agar bersifat immutate.


function registerEmailUser(AccountUSer, Email){
    return { ...AccountUSer, Email };
};

const AccountUSer = {
    name: 'John Frank',
    username: 'johnfrank'
};

const addEmail = registerEmailUser(AccountUSer, 'jhonfrank@gmail.com');

console.log(AccountUSer);
// update after add email in user account
console.log(addEmail);



// Array Map
// Fungsi Array.map() adalah bawaan dari array yang sangat berguna dan banyak sekali digunakan. 
// Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });

// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses 
// pada index array sesuai dengan iterasinya.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });

// Fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan 
// dihasilkan dari kembalian callback function-nya.

const array = ['Jef', 'Claren', 'Sumo'].map ((name) => `${name}`);

console.log(array)

// Array Filter
// Fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. 
// Bila Anda memiliki kasus ingin menghilangkan beberapa item dalam array berdasarkan spesifikasi 
// tertentu, fungsi ini sangatlah cocok digunakan.

// Cara kerja fungsi ini mirip seperti Array.map(). Namun, callback function dari fungsi ini harus 
// mengembalikan boolean. Nilai boolean ini digunakan untuk menentukan item array lolos saring atau tidak.

// Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

// Inilah contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array sebagai berikut.

const thurtyArray = [1, 0, '', null, 'hi', 13].filter ((checkArray) => Boolean(checkArray));
const falsyArray = [1, 0, '', null, 'hi', 13].filter ((checkArray) => Boolean (checkArray) === false);

console.log(thurtyArray);
console.log(falsyArray);

// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan 
// beasiswa berdasarkan nilai skor yang didapat.


const siswa = [
    {
        name: 'Harry',
        score: 60,
      },
      {
        name: 'James',
        score: 88,
      },
      {
        name: 'Ron',
        score: 90,
      },
      {
        name: 'Bethy',
        score: 100,
      }
];

const beasiswa = siswa.filter((penerimaBeasiswa) => penerimaBeasiswa.score >= 88);

console.log(beasiswa);


// Array Reduce
// Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan 
// output satu nilai saja. Berikut adalah struktur dari penggunaan fungsi Array.reduce.

// Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya
// pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada 
// bagian initialValue.

// Inilah contoh penggunaan ketika kita ingin menjumlahkan total nilai siswa seperti di bawah ini.

const mahasiswa = [
    {
        name: 'Harry',
        score: 60,
      },
      {
        name: 'James',
        score: 88,
      },
      {
        name: 'Ron',
        score: 90,
      },
      {
        name: 'Bethy',
        score: 100,
      }
];

const totalScore = mahasiswa.reduce((acc, mahasiswa) => acc + mahasiswa.score, 0);
console.log(totalScore)

// Immutable Object
// JavaScript menyediakan fungsi Object.freeze untuk membekukan objek sehingga tidak dapat diubah setelah dibuat. 
// Melalui fungsi ini, kita bisa memastikan bahwa tidak ada perubahan yang dapat dilakukan pada objek tersebut.


const userPc = {
    name: 'Harry',
    age: 20,
};
// membekukan data variable userPc alias membuatnya immutable atau tidak dapat diubah
Object.freeze(userPc);

const testFreeze = userPc.age = 21;

console.log(userPc);
console.log(testFreeze);
// after
console.log(userPc)

// Pada contoh di atas, kita menggunakan Object.freeze untuk membekukan objek user. Setelah objek dibekukan, 
// setiap upaya untuk mengubah properti akan diabaikan (atau menghasilkan error jika mengaktifkan mode strict). 
// Dengan demikian, kita dapat memastikan bahwa objek tidak akan bisa diubah secara tidak sengaja.

// Namun, perlu diingat bahwa Object.freeze hanya membekukan tingkat pertama dari objek. Jika objek 
// tersebut memiliki properti yang merupakan objek lain, properti tersebut masih dapat diubah. Untuk membuat 
// objek benar-benar immutable, kita perlu membekukan setiap objek yang menjadi properti secara rekursi.

function deepFreeze(object){
    Object.keys(object).forEach((name) => {
        const prop = object[name];

        if(typeof prop == 'object' && prop !== null){
            deepFreeze(prop)
        }
    });
    return Object.freeze(object);
}

const complexUser= {
    name: 'bob',
    emai: 'Bob@gmail.com',
    preferences: {
        newsletter: true,
        Notification: 'weekly',
        address: {
            street: '123 main st',
            city: 'Anytown',
            zipCode: 1003,
        },
    },
};

deepFreeze(complexUser);
console.log(complexUser.preferences.address.city)

