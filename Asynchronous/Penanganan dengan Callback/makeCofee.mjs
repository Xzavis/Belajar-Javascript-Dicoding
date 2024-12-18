export function makeCoffeePremium(callback) {
    const estimationTime = 5000;

    const inSecond = Math.ceil (estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
    
    setTimeout (() => {
        console.log('Kopi siap');
        callback();
    }, estimationTime);
};

// membuat pelayan mengantarkan kopi kepada pelanggan

export function sendCoffee(callback) {
    const estimationTime = 3000;
    console.log(`Pelayan sedang berjalan mengantarkan kopi ke meja pelanggan`);

    setTimeout(() => {
        console.log('Kopi telah diantarkan');
        callback();
    }, estimationTime);
};
