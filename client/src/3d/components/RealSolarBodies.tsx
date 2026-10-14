import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';
import {
  REAL_BODIES,
  SUN_RADIUS,
  SUN_TEXTURE,
  MILKY_WAY_TEXTURE,
  getBodyPosition,
  type RealBodyConfig,
} from '../config/realSolarSystem';

/* ------------------------------------------------------------------ */
/* Milky Way backdrop (real star-field photo mapped on a huge sphere)   */
/* ------------------------------------------------------------------ */
export const MilkyWayBackdrop: React.FC<{ isReducedMotion?: boolean }> = ({ isReducedMotion }) => {
  const tex = useTexture(MILKY_WAY_TEXTURE);
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current && !isReducedMotion) ref.current.rotation.y += delta * 0.004;
  });
  return (
    <mesh ref={ref} renderOrder={-10}>
      <sphereGeometry args={[320, 64, 64]} />
      <meshBasicMaterial map={tex} side={THREE.BackSide} color="#9fb0c8" depthWrite={false} toneMapped={false} />
    </mesh>
  );
};

/* ------------------------------------------------------------------ */
/* Fresnel atmosphere rim                                               */
/* ------------------------------------------------------------------ */
const Atmosphere: React.FC<{ radius: number; color: string; intensity: number; scale: number }> = ({
  radius, color, intensity, scale,
}) => {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uColor: { value: new THREE.Color(color) }, uIntensity: { value: intensity } },
        vertexShader: `
          varying vec3 vN; varying vec3 vV;
          void main(){
            vN = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position,1.0);
            vV = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          uniform vec3 uColor; uniform float uIntensity;
          varying vec3 vN; varying vec3 vV;
          void main(){
            float f = pow(1.0 - abs(dot(vN, vV)), 3.2);
            gl_FragColor = vec4(uColor, f * uIntensity);
          }`,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [color, intensity]
  );
  return (
    <mesh raycast={() => null}>
      <sphereGeometry args={[radius * scale, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

/* ------------------------------------------------------------------ */
/* The Sun                                                              */
/* ------------------------------------------------------------------ */
export interface CelestialInteractProps {
  isReducedMotion?: boolean;
  isHovered?: boolean;
  serviceTitle?: string;
  planetName?: string;
  onPointerOver?: (id: string) => void;
  onPointerOut?: (id: string) => void;
  onClick?: (id: string) => void;
}

export const RealSun: React.FC<CelestialInteractProps> = ({
  isReducedMotion,
  isHovered,
  serviceTitle = 'Digital Studio Launchpad',
  planetName = 'THE SUN',
  onPointerOver,
  onPointerOut,
  onClick,
}) => {
  const tex = useTexture(SUN_TEXTURE);
  const meshRef = useRef<THREE.Mesh>(null);

  const glowTexture = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0.0, 'rgba(255,240,200,1)');
    grad.addColorStop(0.18, 'rgba(255,190,90,0.75)');
    grad.addColorStop(0.4, 'rgba(255,120,30,0.28)');
    grad.addColorStop(0.7, 'rgba(255,80,10,0.08)');
    grad.addColorStop(1.0, 'rgba(255,60,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current && !isReducedMotion) meshRef.current.rotation.y += delta * 0.02;
  });

  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        onPointerOver?.('sun');
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onPointerOut?.('sun');
        document.body.style.cursor = 'auto';
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.('sun');
      }}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[SUN_RADIUS, 64, 64]} />
        <meshBasicMaterial map={tex} color="#ffd9a0" toneMapped={false} />
      </mesh>
      <Atmosphere radius={SUN_RADIUS} color="#ff9a3c" intensity={1.6} scale={1.12} />
      <sprite scale={[SUN_RADIUS * 8, SUN_RADIUS * 8, 1]} raycast={() => null}>
        <spriteMaterial map={glowTexture} blending={THREE.AdditiveBlending} depthWrite={false} transparent toneMapped={false} />
      </sprite>
      <pointLight color="#fff6e8" intensity={35} distance={90} decay={1.1} />

      {isHovered && (
        <Html position={[0, SUN_RADIUS * 1.5 + 0.4, 0]} center pointerEvents="none">
          <div className="pointer-events-none select-none transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="px-3 py-1.5 rounded-lg bg-[#040b18]/90 border border-amber-400/80 backdrop-blur-xl shadow-[0_0_25px_rgba(245,158,11,0.55)] text-center">
                <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono tracking-[0.2em] text-amber-300 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {planetName}
                </div>
                <div className="text-xs font-extrabold text-white tracking-wide mt-0.5 whitespace-nowrap">
                  {serviceTitle}
                </div>
              </div>
              <div className="w-px h-3 bg-gradient-to-b from-amber-400/80 to-transparent" />
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

/* ------------------------------------------------------------------ */
/* Saturn rings (real ring alpha strip mapped radially)                 */
/* ------------------------------------------------------------------ */
const SaturnRings: React.FC<{ inner: number; outer: number; texture: string }> = ({ inner, outer, texture }) => {
  const tex = useTexture(texture);
  const geo = useMemo(() => {
    const g = new THREE.RingGeometry(inner, outer, 160, 1);
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      uv.setXY(i, (v.length() - inner) / (outer - inner), 0.5);
    }
    return g;
  }, [inner, outer]);
  return (
    <mesh geometry={geo} rotation={[-Math.PI / 2, 0, 0]} raycast={() => null}>
      <meshStandardMaterial map={tex} side={THREE.DoubleSide} transparent depthWrite={false} roughness={1} metalness={0} />
    </mesh>
  );
};

/* ------------------------------------------------------------------ */
/* Earth extras                                                         */
/* ------------------------------------------------------------------ */
const EarthClouds: React.FC<{ radius: number; texture: string; isReducedMotion?: boolean }> = ({
  radius, texture, isReducedMotion,
}) => {
  const tex = useTexture(texture);
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current && !isReducedMotion) ref.current.rotation.y += delta * 0.16;
  });
  return (
    <mesh ref={ref} raycast={() => null}>
      <sphereGeometry args={[radius * 1.012, 64, 64]} />
      <meshStandardMaterial alphaMap={tex} color="#ffffff" transparent opacity={0.85} depthWrite={false} roughness={1} />
    </mesh>
  );
};

const Moon: React.FC<{ earthRadius: number; isReducedMotion?: boolean }> = ({ earthRadius, isReducedMotion }) => {
  const tex = useTexture('/textures/2k_moon.jpg');
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = isReducedMotion ? 0 : state.clock.elapsedTime;
    const a = 1.0 + t * 0.18;
    const d = earthRadius * 3.1;
    ref.current.position.set(Math.cos(a) * d, Math.sin(a * 0.5) * 0.06, Math.sin(a) * d);
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[earthRadius * 0.27, 32, 32]} />
        <meshStandardMaterial map={tex} roughness={1} />
      </mesh>
    </group>
  );
};

/* ------------------------------------------------------------------ */
/* Earth city lights (only visible on the unlit hemisphere)             */
/* ------------------------------------------------------------------ */
const EarthNightLights: React.FC<{ radius: number; texture: string; spin: number; isReducedMotion?: boolean }> = ({
  radius, texture, spin, isReducedMotion,
}) => {
  const tex = useTexture(texture);
  const ref = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uMap: { value: tex }, uLight: { value: new THREE.Vector3(-9, 6, 12).normalize() } },
        vertexShader: `
          varying vec2 vUv; varying vec3 vWN;
          void main(){
            vUv = uv;
            vWN = normalize(mat3(modelMatrix) * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }`,
        fragmentShader: `
          uniform sampler2D uMap; uniform vec3 uLight;
          varying vec2 vUv; varying vec3 vWN;
          void main(){
            float d = dot(normalize(vWN), normalize(uLight));
            float night = smoothstep(0.08, -0.25, d);
            vec3 c = texture2D(uMap, vUv).rgb * vec3(1.0, 0.82, 0.55) * 1.6;
            gl_FragColor = vec4(c * night, night);
          }`,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [tex]
  );
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = (isReducedMotion ? 0 : state.clock.elapsedTime) * spin;
  });
  return (
    <mesh ref={ref} raycast={() => null}>
      <sphereGeometry args={[radius * 1.002, 96, 96]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export interface PlanetInteractProps {
  cfg: RealBodyConfig;
  isReducedMotion?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  serviceTitle?: string;
  planetName?: string;
  onPointerOver?: (id: string) => void;
  onPointerOut?: (id: string) => void;
  onClick?: (id: string) => void;
}

export const RealPlanet: React.FC<PlanetInteractProps> = ({
  cfg,
  isReducedMotion,
  isHovered,
  isActive,
  serviceTitle,
  planetName,
  onPointerOver,
  onPointerOut,
  onClick,
}) => {
  const tex = useTexture(cfg.texture);
  const groupRef = useRef<THREE.Group>(null);
  const spinRef = useRef<THREE.Mesh>(null);
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = isReducedMotion ? 0 : state.clock.elapsedTime;
    if (groupRef.current) groupRef.current.position.copy(getBodyPosition(cfg.id, t, tmp));
    if (spinRef.current) spinRef.current.rotation.y = t * cfg.spin;
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        onPointerOver?.(cfg.id);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onPointerOut?.(cfg.id);
        document.body.style.cursor = 'auto';
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(cfg.id);
      }}
    >
      <group rotation={[0, 0, cfg.tilt]}>
        <mesh ref={spinRef}>
          <sphereGeometry args={[cfg.radius, 96, 96]} />
          <meshStandardMaterial
            map={tex}
            bumpMap={cfg.bump ? tex : null}
            bumpScale={cfg.bump ?? 0}
            roughness={0.92}
            metalness={0}
          />
        </mesh>
        {/* Invisible enlarged hit sphere for effortless clicking across all screen sizes */}
        <mesh>
          <sphereGeometry args={[Math.max(0.65, cfg.radius * 1.6), 16, 16]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
        {cfg.night && <EarthNightLights radius={cfg.radius} texture={cfg.night} spin={cfg.spin} isReducedMotion={isReducedMotion} />}
        {cfg.clouds && <EarthClouds radius={cfg.radius} texture={cfg.clouds} isReducedMotion={isReducedMotion} />}
        {cfg.rings && <SaturnRings {...cfg.rings} />}
      </group>
      {cfg.atmosphere && <Atmosphere radius={cfg.radius} {...cfg.atmosphere} />}
      {cfg.moon && <Moon earthRadius={cfg.radius} isReducedMotion={isReducedMotion} />}

      {isHovered && (
        <Html position={[0, cfg.radius * 1.5 + 0.35, 0]} center pointerEvents="none">
          <div className="pointer-events-none select-none transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="px-3 py-1.5 rounded-lg bg-[#040b18]/90 border border-cyan-400/80 backdrop-blur-xl shadow-[0_0_20px_rgba(32,217,243,0.5)] text-center">
                <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono tracking-[0.2em] text-cyan-300 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {planetName || cfg.id}
                </div>
                {serviceTitle && (
                  <div className="text-xs font-extrabold text-white tracking-wide mt-0.5 whitespace-nowrap">
                    {serviceTitle}
                  </div>
                )}
              </div>
              <div className="w-px h-3 bg-gradient-to-b from-cyan-400/80 to-transparent" />
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export interface AllRealPlanetsProps {
  isReducedMotion?: boolean;
  hoveredPlanetId?: string | null;
  activePlanetId?: string;
  planetServices?: Record<string, { serviceTitle: string; planetName: string }>;
  onPointerOver?: (id: string) => void;
  onPointerOut?: (id: string) => void;
  onClick?: (id: string) => void;
}

export const AllRealPlanets: React.FC<AllRealPlanetsProps> = ({
  isReducedMotion,
  hoveredPlanetId,
  activePlanetId,
  planetServices,
  onPointerOver,
  onPointerOut,
  onClick,
}) => (
  <>
    {REAL_BODIES.map((b) => (
      <RealPlanet
        key={b.id}
        cfg={b}
        isReducedMotion={isReducedMotion}
        isHovered={hoveredPlanetId === b.id}
        isActive={activePlanetId === b.id}
        serviceTitle={planetServices?.[b.id]?.serviceTitle}
        planetName={planetServices?.[b.id]?.planetName}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onClick={onClick}
      />
    ))}
  </>
);

