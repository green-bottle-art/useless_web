import { Application, Text, Graphics} from "pixijs";
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect, useRef, Children } from 'react';
import { contain } from "three/src/extras/TextureUtils.js";

function PixiCanvas({scene, onGameOver}) {
  const containerRef = useRef(null);
  const appRef = useRef(null);


  // Inisialisasi
  useEffect(() => {
    let isMounted = true;
    const app = new Application();

    async function initPixi() {
      await app.init({
        width: 800,
        height: 600,
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
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);