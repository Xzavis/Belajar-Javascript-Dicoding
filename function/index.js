/* 
Variabel yang dibuat dengan const juga umum disebut sebagai constant (konstan) 
karena dalam matematika istilah tersebut memiliki arti tetap 
atau tidak berubah-ubah.
*/

/* 
Perhatian

Perubahan nilai yang tidak terduga menjadi salah satu akar permasalahan yang 
sering terjadi dalam pemrograman. Oleh sebab itu, kami rekomendasikan untuk 
selalu membuat variabel dengan const jika memang variabel tersebut tidak 
direncanakan untuk diubah nilainya.
*/
/* 
Aturan Penamaan Variabel
Dalam membuat variabel, kita tidak bisa memberikan nama secara sembarang.
Ada aturan yang perlu kita taati. Berikut adalah beberapa aturan dalam penamaan 
variabel pada JavaScript.


Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
Nama variabel haruslah unik dalam cakupannya. Anda tidak bisa menggunakan nama 
yang sama dengan variabel yang sudah terdefinisi sebelumnya.

Berikut adalah contoh kode yang akan menghasilkan error karena memberikan 
nama variabel yang sudah terdefinisi sebelumnya.
*/



function companyInfo() {
  // Tipe data Variable
  const nama = "IDMETAFORA";
  const legal = "LLC";

  // Tipe data Variable
  console.log(`Nama Perusahaan: ${nama}`);
  console.log(`Legalitas: ${legal}`);
}

function employeInfo() {
  // Tipe data Variable
  const nama = "Hafidz";
  const devisi = "CEO";

  // Tipe data Variable
  console.log(`Nama Pendiri perusahaan: ${nama}`);
  console.log(`Sebagai: ${devisi}`);
}

companyInfo();
employeInfo();

// kita bisa menggunakan sebuah tipe data variable dengan nama yang sama tetapi dengan nama function yang berbeda

// nama variabel yang benar
// const firstName = 'Fulan';
// const last_name = 'Lestari';
// const $message = 'Hello, World!';
// const userId1 = 123;
// const userId2 = 456;

// // nama variabel yang salah
// const first-name = 'Fulan'; // tidak boleh mengandung karakter -
// const last name = 'Lestari'; // tidak boleh mengandung spasi
// const @message = 'Hello, World!'; // tidak boleh mengandung karakter @

// // nama variabel yang benar
// const firstName = 'Fulan';
// const _secondName = 'Fulana';

// // nama variabel yang salah karena diawali dengan angka
// const 1stName = 'Fulan';
// const 2ndName = 'Fulana';
