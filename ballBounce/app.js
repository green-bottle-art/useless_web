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

    
})