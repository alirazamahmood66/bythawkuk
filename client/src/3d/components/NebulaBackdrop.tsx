import React, { useMemo } from 'react';
import * as THREE from 'three';

export const NebulaBackdrop: React.FC = () => {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Radial gradient with deep space tones
    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
    grad.addColorStop(0, 'rgba(32, 217, 243, 0.12)'); // Electric cyan core
    grad.addColorStop(0.35, 'rgba(11, 27, 50, 0.18)'); // Deep space navy
    grad.addColorStop(0.7, 'rgba(139, 92, 246, 0.06)'); // Subtle violet edge
    grad.addColorStop(1, 'rgba(3, 7, 18, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  return (
    <mesh position={[0, -2, -18]} scale={[40, 24, 1]} raycast={() => null}>
      <planeGeometry />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};
