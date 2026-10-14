import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getBodyPosition } from '../config/realSolarSystem';
import { PLANET_SERVICES } from '../config/planetServicesConfig';

interface SliderCameraRigProps {
  activeStationIndex: number | null;
  isOverview?: boolean;
  isReducedMotion?: boolean;
  isMobile?: boolean;
}

export const SliderCameraRig: React.FC<SliderCameraRigProps> = ({
  activeStationIndex,
  isOverview = false,
  isReducedMotion = false,
  isMobile = false,
}) => {
  const init = useRef(false);
  const pos = useRef(new THREE.Vector3(0, 22.0, 36.0));
  const look = useRef(new THREE.Vector3(0, 0, 0));
  const bodyPos = useRef(new THREE.Vector3());
  const targetCam = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());

  const lastStation = useRef<number | null>(null);
  const transitionTime = useRef<number>(0);

  // Reusable vectors for zero GC
  const toBodyNorm = useRef(new THREE.Vector3());
  const overviewPos = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const time = isReducedMotion ? 0 : state.clock.elapsedTime;

    if (activeStationIndex !== lastStation.current) {
      lastStation.current = activeStationIndex;
      transitionTime.current = state.clock.elapsedTime;
    }

    // Panoramic camera setup:
    // With Neptune at orbit radius 23.2, steeper pitch angles open up the orbits
    // into deep, grand amphitheaters vertically, avoiding any 'too short' squashing.
    const baseOverview = isMobile
      ? overviewPos.current.set(0, 34.0, 42.0)
      : overviewPos.current.set(0, 21.0, 27.0);

    if (isOverview || activeStationIndex === null) {
      // ═════════════════════════════════════════════════════════════
      // OVERVIEW MODE: Bird's eye panorama of all 9 orbits
      // ═════════════════════════════════════════════════════════════
      targetCam.current.copy(baseOverview);
      targetLook.current.set(0, isMobile ? -0.5 : -0.3, 0);

      if (!isReducedMotion && !isMobile) {
        targetCam.current.x += state.pointer.x * 2.2;
        targetCam.current.y += state.pointer.y * 1.2;
      }
    } else {
      // ═════════════════════════════════════════════════════════════
      // PLANET FOCUS MODE:
      // Phase 1 (0 to 3.5s): Close cinematic zoom into the planet
      // Phase 2 (3.5s+): Smooth pull-back revealing the ENTIRE solar system
      //                  (all planets including Saturn, Uranus, Neptune)
      //                  with the selected planet prominent in the foreground.
      // ═════════════════════════════════════════════════════════════
      const station = PLANET_SERVICES[activeStationIndex] || PLANET_SERVICES[0];
      getBodyPosition(station.id, time, bodyPos.current);

      const elapsed = state.clock.elapsedTime - transitionTime.current;

      // Close zoom parameters
      const isSun = station.id === 'sun';
      const closeDistMult = isSun ? 1.0 : (isMobile ? 0.95 : 0.85);

      const closeCamPos = new THREE.Vector3(
        bodyPos.current.x + (isMobile ? 0 : station.camOffset[0]) * closeDistMult,
        bodyPos.current.y + station.camOffset[1] * closeDistMult,
        bodyPos.current.z + station.camOffset[2] * closeDistMult
      );
      const closeLookPos = new THREE.Vector3(
        bodyPos.current.x + (isMobile ? 0 : station.lookOffset[0]),
        bodyPos.current.y + station.lookOffset[1] * 0.4,
        bodyPos.current.z + (isMobile ? 0 : station.lookOffset[2])
      );

      // Wide pull-back position:
      // Pull back far and high enough so the entire solar system is in view!
      if (isSun) {
        toBodyNorm.current.copy(baseOverview);
      } else {
        toBodyNorm.current.copy(bodyPos.current).normalize();
        const radiusOut = isMobile ? 42.0 : 28.0;
        const elevation = isMobile ? 34.0 : 21.0;
        toBodyNorm.current.multiplyScalar(radiusOut);
        toBodyNorm.current.y = elevation;
      }

      const wideCamPos = toBodyNorm.current;
      const wideLookPos = isSun
        ? new THREE.Vector3(0, isMobile ? -0.5 : -0.3, 0)
        : new THREE.Vector3(bodyPos.current.x * 0.25, 0, bodyPos.current.z * 0.25);

      // Timing: 3.5 seconds close inspection -> 3.0 seconds smooth ease-out to wide view
      if (elapsed < 3.5) {
        targetCam.current.copy(closeCamPos);
        targetLook.current.copy(closeLookPos);
      } else {
        const t = Math.min(1, (elapsed - 3.5) / 3.0);
        const easeOut = 1 - Math.pow(1 - t, 3);

        targetCam.current.copy(closeCamPos).lerp(wideCamPos, easeOut);
        targetLook.current.copy(closeLookPos).lerp(wideLookPos, easeOut);
      }

      if (!isReducedMotion && !isMobile) {
        targetCam.current.x += state.pointer.x * 0.4;
        targetCam.current.y += state.pointer.y * 0.25;
      }
    }

    if (!init.current) {
      pos.current.copy(targetCam.current);
      look.current.copy(targetLook.current);
      init.current = true;
    } else {
      const k = isReducedMotion ? 1 : Math.min(1, delta * 2.8);
      pos.current.lerp(targetCam.current, k);
      look.current.lerp(targetLook.current, k);
    }

    state.camera.position.copy(pos.current);
    state.camera.lookAt(look.current);
  });

  return null;
};

export default SliderCameraRig;
