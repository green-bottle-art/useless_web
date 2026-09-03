import { Application, Text, Graphics} from "pixijs";
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect, useRef } from 'react';

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
    }
  })
}

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);