"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function BalloonLetter({
  char,
  position,
  delay,
}: {
  char: string;
  position: [number, number, number];
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.position.y =
        position[1] + Math.sin(t * 0.5) * 0.12;
      meshRef.current.rotation.y =
        Math.sin(t * 0.35 + delay) * 0.15;
      meshRef.current.rotation.x =
        Math.sin(t * 0.25 + delay * 0.5) * 0.08;
      meshRef.current.rotation.z =
        Math.sin(t * 0.4 + delay * 0.7) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Text3D
        font="/fonts/helvetiker_bold.typeface.json"
        size={1.2}
        height={0.5}
        bevelEnabled
        bevelSize={0.08}
        bevelThickness={0.05}
        bevelSegments={12}
        curveSegments={20}
      >
        {char}
        <meshPhysicalMaterial
          color="#eee5ff"
          metalness={0.85}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.03}
          reflectivity={1}
          envMapIntensity={4.0}
          ior={2.5}
          specularIntensity={1.0}
          specularColor={new THREE.Color("#f0e8ff")}
          sheen={0.5}
          sheenColor={new THREE.Color("#d4b8ff")}
          sheenRoughness={0.15}
        />
      </Text3D>
    </mesh>
  );
}

function BalloonText() {
  const topLine = "I'm";
  const bottomLine = "WEN";

  const topLetters = useMemo(() => {
    const letters: { char: string; pos: [number, number, number]; delay: number }[] = [];
    let x = -1.2;
    for (let i = 0; i < topLine.length; i++) {
      letters.push({
        char: topLine[i],
        pos: [x, 0.9, 0],
        delay: i * 0.9,
      });
      x += topLine[i] === "'" ? 0.55 : topLine[i] === "m" ? 1.5 : 0.95;
    }
    return letters;
  }, []);

  const bottomLetters = useMemo(() => {
    const letters: { char: string; pos: [number, number, number]; delay: number }[] = [];
    let x = -2.0;
    for (let i = 0; i < bottomLine.length; i++) {
      letters.push({
        char: bottomLine[i],
        pos: [x, -0.9, 0],
        delay: (i + topLine.length) * 0.9,
      });
      x += bottomLine[i] === "W" ? 1.6 : 1.3;
    }
    return letters;
  }, []);

  return (
    <Center>
      <group>
        {topLetters.map((l, i) => (
          <Float
            key={`top-${i}`}
            speed={1.0}
            rotationIntensity={0.25}
            floatIntensity={0.3}
            floatingRange={[-0.08, 0.08]}
          >
            <BalloonLetter char={l.char} position={l.pos} delay={l.delay} />
          </Float>
        ))}
        {bottomLetters.map((l, i) => (
          <Float
            key={`bot-${i}`}
            speed={0.8}
            rotationIntensity={0.25}
            floatIntensity={0.35}
            floatingRange={[-0.08, 0.08]}
          >
            <BalloonLetter char={l.char} position={l.pos} delay={l.delay} />
          </Float>
        ))}
      </group>
    </Center>
  );
}

export default function HeroBalloonText() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.6 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-4, 5, 3]} intensity={1.5} color="#e8d8ff" />
        <directionalLight position={[0, -2, 5]} intensity={1.0} color="#d4c0f8" />
        <pointLight position={[3, 3, 4]} intensity={1.5} color="#e0d0ff" />
        <pointLight position={[-3, -1, 3]} intensity={0.8} color="#c8b0f0" />
        <Suspense fallback={null}>
          <BalloonText />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
