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
    grad.addColorStop(0, 'rgba(245, 158, 11, 0.16)'); // Electric cyan core
    grad.addColorStop(0.35, 'rgba(11, 12, 16, 0.25)'); // Deep space teal
    grad.addColorStop(0.7, 'rgba(217, 119, 6, 0.08)'); // Subtle mint edge
    grad.addColorStop(1, 'rgba(4, 4, 7, 0)');

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
