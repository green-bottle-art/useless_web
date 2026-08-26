(async () => {
    // Inisialisasi
    const app = new PIXI.Application();
    await app.init({
        width: 800,
        height: 600,
        background: '#f2e394',
        antialias: true,
    });

    document.body.appendChild(app.canvas);

    // membuat objek bola
    // file png frame dijadikan frame
    const framePaths = [
        'public/assets/ball/ball0001.png',
        'public/assets/ball/ball0002.png',
        'public/assets/ball/ball0003.png',
        'public/assets/ball/ball0004.png',
        'public/assets/ball/ball0005.png',
        'public/assets/ball/ball0006.png',
        'public/assets/ball/ball0007.png',
        'public/assets/ball/ball0008.png',
        'public/assets/ball/ball0009.png',
        'public/assets/ball/ball0010.png',
        'public/assets/ball/ball0011.png',
        'public/assets/ball/ball0012.png',
        'public/assets/ball/ball0013.png',
        'public/assets/ball/ball0014.png',
    ];

    // Load gambar
    const textures = [];
    for (const path of framePaths) {
        const texture = await PIXI.Asset.load(path);
        textures.push(texture);
    }
})