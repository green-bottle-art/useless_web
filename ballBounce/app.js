(async () => {
    // 1. Inisialisasi Canvas PixiJS
    const app = new PIXI.Application();
    await app.init({
        width: 800,
        height: 600,
        background: '#f2e394',
        antialias: true,
    });
    document.body.appendChild(app.canvas);

    // 2. Daftar file PNG Sequence Anda
    // Sesuaikan nama file dan jumlah frame dengan hasil ekspor Anda
    const framePaths = [
        'frames/frame_0.png',
        'frames/frame_1.png',
        'frames/frame_2.png',
        'frames/frame_3.png',
        'frames/frame_4.png',
        'frames/frame_5.png',
    ];

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
    animatedBall.x = app.screen.width / 2;
    animatedBall.y = app.screen.height / 2 - 50;

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
    titleText.y = app.screen.height / 2 + 120;
    app.stage.addChild(titleText);

    // 5. Teks Subtitle
    const subText = new PIXI.Text({
        text: "Ari ma'shum | 2026",
        style: {
            fontFamily: 'serif',
            fontSize: 14,
            fill: 0x000000,
            align: 'center',
        }
    });
    subText.anchor.set(0.5);
    subText.x = app.screen.width / 2;
    subText.y = app.screen.height / 2 + 220;
    app.stage.addChild(subText);
})();
