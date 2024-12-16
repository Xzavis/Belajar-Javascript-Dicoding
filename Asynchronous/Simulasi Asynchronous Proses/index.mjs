export function makeCoffe(){
    // 1000 1 detik
    const estimationTIme = 10000;

    // variabel menghitung mundur 
    const inSecond = Math.ceil(estimationTIme / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);


    // kita set time selesainya setelah proses perhitung mundur
    // akan menampilkan Pramusaji selesai membuat kopi.
    setTimeout(() => {console.log(`Pramusaji selesai membuat kopi.`)} ,estimationTIme)
};
