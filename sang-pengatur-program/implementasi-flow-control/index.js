// Implementasi Flow Control
// 
// Rasanya ada yang kurang ketika sudah mengetahui teori flow control
// “sang pengendali program” tanpa mengimplementasikan flow control.
// Di materi kali ini, kita akan lihat seperti apa penerapan flow control
// di sebuah program JavaScript sederhana.  

// Misalnya, Anda ingin membuat program untuk mengetahui predikat
// berdasarkan nilai yang dimasukkan.
// Perhatikan kode program berikut ini.

// fung
function cekPredikat(predikat){
    // me-looping dari array predikat
    for (let i = 0; i < predikat.length; i++){
        // membuat sebuah program pengecekan tipe data harus berupa 'number' menggunakan typeof
        if(typeof predikat[i] !== 'number'){
            // jika parameter yang berisi argument i = number makan akan terjadi error
            throw new Error('Invalid input. Please provide an array of numbers.');
        }

    // buat sebuah variable untuk percabangan
    const dataPredikat = predikat[i];
    // buat variable let untuk mengisi beberapa value dalam percabangan
    let grade;
    

    // buat sebuah percabangan unutk menentukan predikat dari sebuah number 
    if(dataPredikat >= 90){
        grade = 'A';
    } else if (dataPredikat >= 80){
        grade = 'B'
    } else if (dataPredikat >= 70){
        grade = 'C'
    } else if (dataPredikat >= 60){
        grade = 'D'
    } else {
        grade = 'E'
    }
    
// cetak
console.log(`Predikat ${i + 1}: ${dataPredikat} (${grade}) `);

} // block akhir looping
} // block akhir function

// try catch
try {
    const predikatMahasiswa = [90,88,78,68,72];
    cekPredikat(predikatMahasiswa)
} catch(err){
    console.error(e);
}
