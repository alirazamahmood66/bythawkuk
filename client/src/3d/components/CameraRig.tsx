import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  isReducedMotion?: boolean;
}

export const CameraRig: React.FC<CameraRigProps> = ({ isReducedMotion = false }) => {
  const targetVec = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    if (isReducedMotion) {
      state.camera.position.set(0, 2.0, 11.5);
      state.camera.lookAt(0.6, 0.2, 0);
      return;
    }

    // Subtle pointer parallax (restrained — will not disorient or distract)
    const px = state.pointer.x * 0.85;
    const py = state.pointer.y * 0.4;

    targetVec.current.set(px, 2.0 + py, 11.5);
    state.camera.position.lerp(targetVec.current, delta * 2.0);
    state.camera.lookAt(0.6, 0.2, 0);
  });

  return null;
};
