import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function GlowingOrb() {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.6, 128, 128]}>
        <MeshDistortMaterial
          color="#5b48ff"
          emissive="#7c6cff"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.4}
        />
      </Sphere>
    </Float>
  );
}

export function HeroSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#a89cff" />
        <pointLight position={[-3, -2, 3]} intensity={1.2} color="#4f46e5" />
        <GlowingOrb />
      </Suspense>
    </Canvas>
  );
}

export default HeroSphere;