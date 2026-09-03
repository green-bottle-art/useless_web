import { Application, Text, Graphics} from "pixi.js";
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect, useRef} from 'react';


function PixiCanvas({scene, onGameOver}) {
  const containerRef = useRef(null);
  const appRef = useRef(null);


  // Inisialisasi
  useEffect(() => {
    let isMounted = true;
    const app = new Application();

    async function initPixi() {
      await app.init({
        resizeTo: window,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0x1e1e2e,
      });

      if (!isMounted) return;

      // menambahkan canvas ke DOM Reat
      if (containerRef.current) {
        containerRef.current.appendChild(app.canvas);
      }
      appRef.current = app;

      // Render
      renderScene(app, scene);
    }

    initPixi();

    // cleanup
    return() => {
      isMounted = false;
      if (appRef.current) {
        appRef.current.destroy(true, {children: true});
        appRef.current = null;
      }
    };
  }, []) 


  // Update
  useEffect(() => {
    const app = appRef.current;
    if (app && app.stage) {
      app.stage.removeChildren();
      renderScene(app, scene);
    }
  }, [scene]);
  
  // fungsi dravv 
  function renderScene(app, currentScene) {

    const screenWidth = app.screen.width;
    const screenHeight = app.screen.height;

    if (currentScene === 'menu') {
      const title = new Text({
        text: 'Menu',
        style: {fill: 0x89b4fa, fontSize: 28 },
      });
      title.anchor.set(0.5);
      title.x = screenWidth / 2;
      title.y = screenHeight / 2;
      app.stage.addChild(title);
    } else if (currentScene === 'game') {

      const square = new Graphics();
      square.rect(-50, -50, 100, 100);
      square.fill(0xa6e3a1);

      square.x = screenWidth / 2;
      square.y = screenHeight / 2 - 20;

      square.eventMode = 'static';
      square.cursor = 'pointer';
      
      square.on('pointerdown', () => {
        onGameOver();
      });

      const hint = new Text({
        text: 'Klik kotak hijau untuk mati/Game Over',
        style: { fill: 0xffffff, fontSize: 18 },
      });
      hint.anchor.set(0.5);
      hint.x = screenWidth / 2;
      hint.y = screenHeight / 2 + 80;

      app.stage.addChild(square);
      app.stage.addChild(hint);

    } else if (currentScene === 'gameover') {
      
      const text = new Text({
        text: 'GAME OVER (PIXI)',
        style: { fill: 0xf38ba8, fontSize: 36 },
      });
      text.anchor.set(0.5);
      text.x = screenWidth / 2;
      text.y = screenHeight / 2;
      app.stage.addChild(text);
      app.stage.addChild(text);
    }
  }

  return <div ref={containerRef} style={{ borderRadius: '8px', overflow: 'hidden' }} />;

}

// State
function App() {
  // State kontrol
  const [scene, setScene] = useState('menu');

  return (
    <div className="wrapper">
      <h1>React Scene Manager</h1>

      {/* OVERLAY UI REACT (Navigasi / Tombol) */}
      <div className="uiOverlay">
        {scene === 'menu' && (
          <button className="btnPrimary" onClick={() => setScene('game')}>
            Start Game
          </button>
        )}

        {scene === 'game' && (
          <div>
            <button className="btnDanger" onClick={() => setScene('gameover')}>
              Trigger Game Over
            </button>
            <button className="btnSecondary" onClick={() => setScene('menu')}>
              Kembali ke Menu
            </button>
          </div>
        )}

        {scene === 'gameover' && (
          <div>
            <button className="btnPrimary" onClick={() => setScene('game')}>
              Main Lagi
            </button>
            <button className="btnSecondary" onClick={() => setScene('menu')}>
              Main Menu
            </button>
          </div>
        )}
      </div>

      {/* PIXI CANVAS (RENDERER) */}
      <PixiCanvas scene={scene} onGameOver={() => setScene('gameover')} />
    </div>
  );
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);