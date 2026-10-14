import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { PlanetAtmosphereConfig } from '../config/solarSystemConfig';

interface PlanetAtmosphereProps {
  radius: number;
  config: PlanetAtmosphereConfig;
  isHovered: boolean;
}

const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const atmosphereFragmentShader = `
  uniform vec3 uColor;
  uniform float uRimPower;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    // Normalized vector from surface to camera
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    
    // Physical Fresnel calculation (grazing edge glow)
    float normalDotView = dot(vNormal, viewDir);
    float fresnel = pow(1.0 - max(0.0, normalDotView), uRimPower);

    // Illumination direction towards central Sun at origin [0, 0, 0]
    vec3 sunDir = normalize(-vWorldPosition);
    float sunFacing = max(0.0, dot(vNormal, sunDir) * 0.5 + 0.5);

    // Thin, restrained atmospheric scattering (stronger on sunlit limb)
    float alpha = fresnel * uOpacity * (0.2 + 0.8 * sunFacing);

    gl_FragColor = vec4(uColor, alpha);
  }
`;

export const PlanetAtmosphere: React.FC<PlanetAtmosphereProps> = ({
  radius,
  config,
  isHovered,
}) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => {
    return {
      uColor: { value: new THREE.Color(config.color) },
      uRimPower: { value: config.rimPower },
      uOpacity: { value: config.opacity },
    };
  }, [config.color, config.rimPower, config.opacity]);

  useFrame(() => {
    if (materialRef.current) {
      // Smoothly boost atmospheric rim glow when hovered
      const targetOpacity = isHovered ? config.opacity * 1.5 : config.opacity;
      materialRef.current.uniforms.uOpacity.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uOpacity.value,
        targetOpacity,
        0.1
      );
    }
  });

  const scale = config.scale || 1.05;

  return (
    <mesh scale={[scale, scale, scale]} raycast={() => null}>
      <sphereGeometry args={[radius, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={atmosphereVertexShader}
        fragmentShader={atmosphereFragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.FrontSide}
      />
    </mesh>
  );
};
