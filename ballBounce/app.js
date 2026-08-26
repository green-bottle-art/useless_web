(async () => {
    // 1. Inisialisasi Canvas PixiJS
    const app = new PIXI.Application();
    await app.init({
        width: 1160,
        height: 800,
        background: '#f2e394',
        antialias: true,
    });
    document.body.appendChild(app.canvas);

    // 2. Daftar file PNG Sequence Anda
    // Sesuaikan nama file dan jumlah frame dengan hasil ekspor Anda
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
    ]

    // Load semua gambar ke dalam Assets PixiJS
    const textures = [];
    for (const path of framePaths) {
        const texture = await PIXI.Assets.load(path);
        textures.push(texture);
    }

    // 3. Buat AnimatedSprite dari kumpulan Texture
    const animatedBall = new PIXI.AnimatedSprite(textures);

    // Atur titik pusat objek berada di tengah-tengah gambar
    animatedBall.anchor.set(0.5);
    animatedBall.scale.set(0.4)
    animatedBall.x = app.screen.width / 2;
    animatedBall.y = app.screen.height / 2 - 130;

    // Kecepatan animasi (semakin besar semakin cepat)
    animatedBall.animationSpeed = 0.2;

    // Pengaturan Looping
    animatedBall.loop = true; // Jalankan terus-menerus
    animatedBall.play();      // Mulai jalankan animasi

    app.stage.addChild(animatedBall);

    // 4. Teks Judul
    const titleText = new PIXI.Text({
        text: 'Bouncing Ball',
        style: {
            fontFamily: 'serif',
            fontSize: 48,
            fill: 0x000000,
            align: 'center',
        }
    });
    titleText.anchor.set(0.5);
    titleText.x = app.screen.width / 2;
    titleText.y = app.screen.height / 2 + 130;
    app.stage.addChild(titleText);

    subText.anchor.set(0.5);
    subText.x = app.screen.width / 2;
    subText.y = app.screen.height / 2 + 350;
    app.stage.addChild(subText);
})();
