
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import MushScene from '../models/3d/mushroom.glb'
import { MeshStandardMaterial , PointLight } from "three";
import {a} from '@react-spring/three'

const Mushroom = (props) => {
  const MushRef = useRef();
  const { nodes, materials } = useGLTF(MushScene);

  const glowingMaterial = new MeshStandardMaterial({
    ...materials["default"],
    emissive: 'rgb(255,83,73)',
    emissiveIntensity: 0.03,
  });
  const lightPosition = [1.3, -2.2, 0.8];

  return (
    <a.group ref = {MushRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hood_low_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stem_low_default_0.geometry}
        material={glowingMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.annulus_low_default_0.geometry}
        material={glowingMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
       <pointLight
        color={'rgb(0,128,128)'} // rgb(255,83,73)
        intensity={4}
        distance={5} // Controls how far the light reaches
        decay={3} // How the light dims over distance
        position={lightPosition} // Position the light near the hood
      />
    </a.group>
  );
}

useGLTF.preload("/fly_agaric_mushroom.glb");
export default Mushroom;
