import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

function LiquidBlob() {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y += delta * 0.08;
  });

  return (
    <mesh ref={ref} scale={4} position={[0, 0, -1]}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#D62828" // El rojo oficial de Leno/Beto
        distort={1.2} // Mucha más deformación
        speed={2.5} // Movimiento más rápido
        roughness={0.1} // Más brillante
        metalness={0.9} // Más metálico para que refleje luz
        opacity={0.45} // Mucho más visible
        transparent
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={4} color="#ff3333" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ffffff" />
        <LiquidBlob />
      </Canvas>
    </div>
  );
}
