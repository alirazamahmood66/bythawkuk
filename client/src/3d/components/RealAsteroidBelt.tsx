import React, { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// ---- tiny deterministic 3D value-noise (no dependencies) ----
function hash(x: number, y: number, z: number, seed: number) {
  let h = x * 374761393 + y * 668265263 + z * 2147483647 + seed * 1274126177;
  h = (h ^ (h >> 13)) * 1274126177;
  h = h ^ (h >> 16);
  return ((h >>> 0) % 100000) / 100000;
}
const fade = (t: number) => t * t * (3 - 2 * t);
function vnoise(x: number, y: number, z: number, seed: number) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = fade(x - xi), yf = fade(y - yi), zf = fade(z - zi);
  const l = (a: number, b: number, t: number) => a + (b - a) * t;
  const c = (dx: number, dy: number, dz: number) => hash(xi + dx, yi + dy, zi + dz, seed);
  return l(
    l(l(c(0, 0, 0), c(1, 0, 0), xf), l(c(0, 1, 0), c(1, 1, 0), xf), yf),
    l(l(c(0, 0, 1), c(1, 0, 1), xf), l(c(0, 1, 1), c(1, 1, 1), xf), yf),
    zf
  );
}

/** Lumpy, cratered, potato-shaped rock (like Eros / Itokawa / Ida). */
function makeRockGeometry(seed: number) {
  const g = new THREE.IcosahedronGeometry(1, 4);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  // overall elongation so no two shapes are alike
  const sx = 1.0 + hash(seed, 1, 2, 3) * 0.55;
  const sy = 0.65 + hash(seed, 4, 5, 6) * 0.35;
  const sz = 0.8 + hash(seed, 7, 8, 9) * 0.35;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).normalize();
    // big lumps + medium bumps + fine roughness
    let n = (vnoise(v.x * 1.3 + 10, v.y * 1.3 + 10, v.z * 1.3 + 10, seed) - 0.5) * 0.55;
    n += (vnoise(v.x * 3.1, v.y * 3.1, v.z * 3.1, seed + 7) - 0.5) * 0.26;
    n += (vnoise(v.x * 7.7, v.y * 7.7, v.z * 7.7, seed + 13) - 0.5) * 0.09;
    // crater-like dents: sharpen low regions of a mid frequency field
    const cr = vnoise(v.x * 4.4 + 50, v.y * 4.4 + 50, v.z * 4.4 + 50, seed + 21);
    if (cr < 0.28) n -= (0.28 - cr) * 0.9;
    const r = 1 + n;
    p.setXYZ(i, v.x * r * sx, v.y * r * sy, v.z * r * sz);
  }
  g.computeVertexNormals();
  return g;
}

interface BeltProps {
  count?: number;
  innerRadius: number;
  outerRadius: number;
  isReducedMotion?: boolean;
}

const VARIANTS = 4;

export const RealAsteroidBelt: React.FC<BeltProps> = ({
  count = 360,
  innerRadius,
  outerRadius,
  isReducedMotion = false,
}) => {
  const tex = useTexture('/textures/2k_moon.jpg');
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.InstancedMesh | null)[]>([]);

  const geometries = useMemo(() => Array.from({ length: VARIANTS }, (_, i) => makeRockGeometry(i * 17 + 3)), []);

  const rocks = useMemo(() => {
    const perVariant: {
      pos: THREE.Vector3;
      rot: THREE.Euler;
      spin: THREE.Vector3;
      scale: number;
      color: THREE.Color;
    }[][] = Array.from({ length: VARIANTS }, () => []);
    const palette = ['#32302d', '#282624', '#3d3935', '#2a2826', '#1f1e1c', '#35322e'];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      // denser in the middle of the belt, thin at the edges
      const u = (Math.random() + Math.random() + Math.random()) / 3;
      const r = innerRadius + u * (outerRadius - innerRadius);
      const y = (Math.random() - 0.5) * 0.55 * (1 - Math.abs(u - 0.5));
      // power law: many small rocks, a few big ones
      const scale = 0.016 + Math.pow(Math.random(), 3.2) * 0.10;
      perVariant[i % VARIANTS].push({
        pos: new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r),
        rot: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        spin: new THREE.Vector3((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5),
        scale,
        color: new THREE.Color(palette[Math.floor(Math.random() * palette.length)]).multiplyScalar(0.7 + Math.random() * 0.3),
      });
    }
    return perVariant;
  }, [count, innerRadius, outerRadius]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // static colours
  useEffect(() => {
    rocks.forEach((list, vi) => {
      const m = meshRefs.current[vi];
      if (!m) return;
      list.forEach((r, i) => m.setColorAt(i, r.color));
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
    });
  }, [rocks]);

  useFrame((state, delta) => {
    if (groupRef.current && !isReducedMotion) groupRef.current.rotation.y += delta * 0.006;
    const t = isReducedMotion ? 0 : state.clock.elapsedTime;
    rocks.forEach((list, vi) => {
      const m = meshRefs.current[vi];
      if (!m) return;
      list.forEach((r, i) => {
        dummy.position.copy(r.pos);
        dummy.rotation.set(r.rot.x + r.spin.x * t, r.rot.y + r.spin.y * t, r.rot.z + r.spin.z * t);
        dummy.scale.setScalar(r.scale);
        dummy.updateMatrix();
        m.setMatrixAt(i, dummy.matrix);
      });
      m.instanceMatrix.needsUpdate = true;
    });
  });

  return (
    <group ref={groupRef}>
      {rocks.map((list, vi) => (
        <instancedMesh
          key={vi}
          ref={(el) => {
            meshRefs.current[vi] = el;
          }}
          args={[geometries[vi], undefined, list.length]}
          frustumCulled={false}
          raycast={() => null}
        >
          <meshStandardMaterial map={tex} bumpMap={tex} bumpScale={3} color="#45423d" roughness={1.0} metalness={0.0} />
        </instancedMesh>
      ))}
    </group>
  );
};
