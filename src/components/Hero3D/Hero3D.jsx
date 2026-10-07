import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Embers(props) {
  const ref = useRef();
  // Generate 2000 points in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000 * 3), { radius: 2.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
    // Make them float up slowly like smoke/embers
    ref.current.position.y += delta * 0.05;
    if (ref.current.position.y > 0.5) ref.current.position.y = -0.5;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#D62828"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // Additive blending for that glowing ember look
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Embers />
      </Canvas>
    </div>
  );
}
