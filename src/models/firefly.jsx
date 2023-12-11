import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Firefly = ({ position, scale }) => {
  const meshRef = useRef();
  const lightRef = useRef();

  // Use the useFrame hook to update the position of the firefly each frame
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Directly apply the updated position to the refs
    meshRef.current.position.x = position[0] + Math.sin(t) * -1;
    meshRef.current.position.y = position[1] + Math.sin(t) * 2;
    meshRef.current.position.z = position[2] + Math.cos(t) * 1;
    // Update light position to match the firefly
    if (lightRef.current) {
      lightRef.current.position.copy(meshRef.current.position);
    }
  });

  return (
    <a.group ref={meshRef} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
      {/* Add a point light that will move with the firefly */}
      <pointLight ref={lightRef} distance={5} intensity={3} color="yellow" />
    </a.group>
  );
};

export default Firefly;

